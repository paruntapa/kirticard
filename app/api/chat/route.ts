import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CONTEXT_PATH, CREDIT_CARDS } from '@/lib/context';

// Initialize the API
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Read context and credit card data
const getPromptData = () => {
  try {

    const context = CONTEXT_PATH || '';
    const creditCards = CREDIT_CARDS || '';
    
    return { context, creditCards };
  } catch (error) {
    console.error('Error reading prompt files:', error);
    return { 
      context: 'You are a credit card expert. Format your responses in HTML.',
      creditCards: 'No credit card data available.'
    };
  }
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const { context, creditCards } = getPromptData();

    // Construct the full prompt
    const fullPrompt = `${context}

    AVAILABLE CREDIT CARDS:
    ${creditCards}

    USER QUESTION: ${message}

    Please provide a helpful response about credit cards based on the available data. Format your response in HTML as instructed.`;

    // Get the model with proper configuration
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

    // Generate content with proper error handling
    const result = await model.generateContentStream({
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
    });

    // Create a TransformStream to handle the streaming response
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // Process the stream
    (async () => {
      try {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            await writer.write(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
          }
        }
      } catch (error) {
        console.error('Error processing stream:', error);
        await writer.write(encoder.encode(`data: ${JSON.stringify({ error: 'Error processing response' })}\n\n`));
      } finally {
        await writer.close();
      }
    })();

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 