import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// Initialize the API with explicit version
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const useGemini = () => {
  const generateStream = async (prompt: string) => {
    try {
      // Get the model with proper configuration
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.0-flash', 
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      });

      // Generate content with proper error handling
      const result = await model.generateContentStream({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      return result;
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  };

  return { generateStream };
};

// // Test the streaming response
// const testStream = async () => {
//   const { generateStream } = useGemini();
//   const result = await generateStream("Hello, now can you repeat what was my name i told you  ?");
  
//   try {
//     for await (const chunk of result.stream) {
//       console.log("chunk", chunk.text());
//     }
//   } catch (error) {
//     console.error('Error reading stream:', error);
//   }
// };

// // Run the test
// testStream();