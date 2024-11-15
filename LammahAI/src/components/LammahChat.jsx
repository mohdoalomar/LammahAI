import React, { useState, useRef } from 'react';
import { AlertCircle, User, Bot, Key } from 'lucide-react';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
const LammahChat = ({ isVisible, initialPrompt = "مرحبًِا، أنا لمّاح كيف أقدر أساعدك اليوم؟" }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: initialPrompt }
  ]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
  const chatContainerRef = useRef(null);
  const maxInputChars = 500;

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || hasUserSentMessage || !apiKey) return;
    setIsLoading(true);
    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setHasUserSentMessage(true);
    const systemMessage = {
        role: 'system',
        content: "انت اسمك لمّاح بس ترد بالعربي، لازم ترد على اي شيء يجيك وتحوله إلى قصة بحبكة وسيناريو ولازم تلتزم بالرسالةاللي جتك اذا ما تفدر تحولها الى قصة ارسل اعتذار" 
      };
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-4o-mini',
            messages: [systemMessage, ...messages, userMessage],
            max_tokens: 2000,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        if (response.data.choices && response.data.choices[0]?.message) {
          const aiMessage = response.data.choices[0].message;
          setMessages(prev => [...prev, aiMessage]);
        } else {
          throw new Error('Invalid response format from OpenAI API');
        }
      } catch (error) {
        console.error('Error with OpenAI API:', error);
        setError(
          error.response?.data?.error?.message || 
          'حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.'
        );
        // Remove the user message if API call failed
        setMessages(prev => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
        scrollToBottom();
      }
    };
    


  const toggleApiKeyVisibility = () => {
    setIsApiKeyVisible(!isApiKeyVisible);
  };

  return (
    isVisible && (
        <>
           <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-LammahBrown font-bold lg:animate-delay-500 animate-fade-up">
        جرب لمّاح
        <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed mt-5"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
      </h1>
        
      <div className="min-h-screen bg-LammmahBG p-4 flex items-center justify-center animate-fade-up animate-delay-1000">
        
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all">
          {/* Header */}
          <div className="bg-LammahBrown p-6">
            <h2 className="text-2xl font-bold text-LammahBiege text-center">لمّاح</h2>
          </div>

          {/* API Key Input */}
          <div className="p-4 bg-LammahBiege border-b border-LammahBrown">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type={isApiKeyVisible ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="أدخل مفتاح لماح عشان تقدر تستخدمه" 
                    className="w-full p-2 pr-10 border text-center border-LammahBrown rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-LammahBrown"
                  />
                  <button
                    onClick={toggleApiKeyVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-LammahBrown hover:text-LammahRed bg-white"
                  >
                    <Key className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div 
            ref={chatContainerRef}
            className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-LammmahBG to-white scrollbar-thin scrollbar-thumb-LammahBrown scrollbar-track-LammahBiege"
          >
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-LammahGreen flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-LammahBrown text-white rounded-br-none' 
                      : 'bg-LammahBiege text-LammahBlack rounded-bl-none'
                  } transform transition-all duration-200 hover:scale-[1.02]`}>
                    <p className="text-sm md:text-base text-right">{msg.content}</p>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-LammahRed flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {error && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="text-LammahRed" />
                  <p className="text-LammahRed">{error}</p>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-LammahGreen flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-LammahBiege rounded-2xl px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-LammahBrown rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-LammahBrown rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-LammahBrown rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-LammahBiege">
            <div className="flex space-x-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, maxInputChars))}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder={!apiKey 
                  ? "أدخل مفتاح لماح عشان تقدر تستخدمه" 
                  : hasUserSentMessage 
                    ? "معليش بس لك محاولة وحدة مع لمّاح الحين" 
                    : "كيف تبي لمّاح يبدع لك؟"
                }
                className="flex-1 p-4 border text-right border-LammahBiege rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-LammahBrown resize-none"
                rows="3"
                disabled={isLoading || hasUserSentMessage || !apiKey}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim() || hasUserSentMessage || !apiKey}
                className={`px-6 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isLoading || !input.trim() || hasUserSentMessage || !apiKey
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-LammahBrown hover:bg-LammahRed text-white'
                }`}
              >
                <FaPaperPlane className={`w-6 h-6 ${isLoading ? 'animate-pulse' : ''}`} />
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-500 text-right">
              {!apiKey 
                ? "أدخل مفتاح لماح عشان تقدر تستخدمه" 
                : hasUserSentMessage 
                  ? "معليش بس لك محاولة وحدة مع لمّاح الحين" 
                  : `${maxInputChars - input.length} حرف متبقي`}
            </div>
          </div>
        </div>
      </div>
      </>
    )
  );
};

export default LammahChat;