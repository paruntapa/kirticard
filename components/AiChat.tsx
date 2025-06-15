import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sparkles, Send } from 'lucide-react'

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  isHtml?: boolean;
}

const AiChat = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      type: 'bot',
      message: "Hi there! I'm CardGuru, your AI credit card expert. Looking for a specific type of card or have questions about benefits?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom only when new messages are added
  useEffect(() => {
    if (chatHistory.length > 0) {
      const timeoutId = setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!chatMessage.trim() || isLoading) return;

    const userMessage = { type: 'user' as const, message: chatMessage };
    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage('');
    setIsLoading(true);

    try {
      const botMessage = { type: 'bot' as const, message: '', isHtml: false };
      setChatHistory(prev => [...prev, botMessage]);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: chatMessage }),
      });
      console.log("response", response.body);

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let accumulatedText = '';
      let lastUpdateTime = Date.now();
      const updateInterval = 100; // Slower update for smoother experience

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                accumulatedText += data.text;
                
                // Only update if enough time has passed since last update
                const now = Date.now();
                if (now - lastUpdateTime >= updateInterval) {
                  setChatHistory(prev => {
                    const newHistory = [...prev];
                    const lastMessage = newHistory[newHistory.length - 1];
                    if (lastMessage.type === 'bot') {
                      lastMessage.message = accumulatedText;
                      // Check if the response contains HTML-like tags
                      lastMessage.isHtml = accumulatedText.includes('<div>') || 
                                          accumulatedText.includes('<h1>') || 
                                          accumulatedText.includes('<h2>') ||
                                          accumulatedText.includes('<p>') ||
                                          accumulatedText.includes('<ul>') ||
                                          accumulatedText.includes('<li>');
                    }
                    return newHistory;
                  });
                  lastUpdateTime = now;
                }
              }
            } catch (e) {
              console.error('Error parsing chunk:', e);
            }
          }
        }
      }

      // Final update to ensure all text is displayed
      setChatHistory(prev => {
        const newHistory = [...prev];
        const lastMessage = newHistory[newHistory.length - 1];
        if (lastMessage.type === 'bot') {
          lastMessage.message = accumulatedText;
          lastMessage.isHtml = accumulatedText.includes('<div>') || 
                              accumulatedText.includes('<h1>') || 
                              accumulatedText.includes('<h2>') ||
                              accumulatedText.includes('<p>') ||
                              accumulatedText.includes('<ul>') ||
                              accumulatedText.includes('<li>');
        }
        return newHistory;
      });

    } catch (error) {
      console.error('Error:', error);
      setChatHistory(prev => [
        ...prev,
        { type: 'bot' as const, message: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (chat: ChatMessage) => {
    if (chat.type === 'user') {
      return (
        <div className="max-w-[80%] p-3 rounded-lg text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          {chat.message}
        </div>
      );
    }

    // If the message contains HTML, render it as HTML
    if (chat.isHtml) {
      return (
        <div 
          className="max-w-[80%] p-3 rounded-lg text-sm bg-white/20 text-gray-100"
          dangerouslySetInnerHTML={{ __html: chat.message }}
        />
      );
    }

    // Regular text message
    return (
      <div className="max-w-[80%] p-3 rounded-lg text-sm bg-white/20 text-gray-100">
        {chat.message}
      </div>
    );
  };

  return (
    <div className="relative flex justify-center">
      <div className="relative">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-white text-lg">CardGuru AI Assistant</CardTitle>
                <p className="text-sm text-gray-300">Ask me anything about credit cards</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              ref={chatContainerRef}
              className="max-h-[400px] overflow-y-auto space-y-3 scroll-smooth"
            >
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {renderMessage(chat)}
                </div>
              ))}
              {/* <div ref={chatEndRef} /> */}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="What credit cards are you looking for?"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AiChat