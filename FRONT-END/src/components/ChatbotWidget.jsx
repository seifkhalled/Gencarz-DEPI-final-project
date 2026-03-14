import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Minimize2 } from 'lucide-react';
import { cn } from '../hooks/utils';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your CarAI assistant. How can I help you find your dream car today?", sender: 'ai', time: new Date() },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I'm analyzing the market data for your request. Based on current trends, the Tesla Model 3 has seen a 5% price drop this week. Would you like to see the listings?",
        sender: 'ai',
        time: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col rounded-3xl overflow-hidden glass shadow-2xl border border-white/20 dark:border-slate-800/20">
          {/* Header */}
          <div className="p-4 ai-gradient flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">CarAI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] opacity-80">Always active</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-light dark:bg-surface-dark custom-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={cn(
                  "flex flex-col max-w-[85%] duration-300",
                  msg.sender === 'user' ? "ml-auto items-end" : "items-start"
                )}
              >
                <div className={cn(
                  "p-3 rounded-2xl text-sm shadow-sm",
                  msg.sender === 'user' 
                    ? "bg-primary text-white rounded-br-none" 
                    : "bg-white dark:bg-slate-800 text-foreground rounded-bl-none border border-border"
                )}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 px-1">
                  {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start space-x-2 animate-pulse">
                <div className="bg-white dark:bg-slate-800 border border-border p-3 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white dark:bg-slate-900">
            <div className="relative flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about cars..."
                className="flex-1 bg-surface-light dark:bg-surface-dark border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-3 ai-gradient text-white rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300",
          isOpen ? "bg-slate-800 rotate-90" : "ai-gradient"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
