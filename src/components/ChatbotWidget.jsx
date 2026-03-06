import { useState } from 'react';
import botIcon from '../images/botlogo.png';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 md:right-6 lg:right-8 
                        w-full h-full sm:w-[400px] sm:h-[600px] md:w-[420px] md:h-[650px] lg:w-[440px] lg:h-[700px]
                        sm:max-h-[85vh] sm:rounded-2xl
                        bg-white shadow-2xl z-[9999] flex flex-col overflow-hidden
                        animate-[slideUp_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white 
                          p-3 sm:p-4 flex items-center justify-between
                          shadow-md">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1.5 sm:p-2
                              shadow-sm ring-2 ring-white/30">
                <img src={botIcon} alt="Bot" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold">Chat Assistant</span>
                <span className="text-xs text-white/80">Online</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded-full 
                         w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                         transition-all duration-300 text-2xl sm:text-3xl font-bold
                         hover:rotate-90"
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          {/* Chat iframe */}
          <div className="flex-1 ">
            <iframe
              src="https://app.rubikchat.com/chat/YAPer2MrlHASNtGpjbNGPn5N"
              className="w-full h-full border-0"
              title="Rehmat Ali Chatbot"
              allow="microphone"
            />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed 
                    bottom-5 right-5 
                    sm:bottom-6 sm:right-6 
                    md:bottom-6 md:right-6 
                    lg:bottom-6 lg:right-6
                    w-16 h-16 
                    sm:w-[70px] sm:h-[70px] 
                    md:w-20 md:h-20
                    lg:w-20 lg:h-20
                    rounded-full 
                    bg-white
                    shadow-lg hover:shadow-xl
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:scale-110 active:scale-95
                    z-[99999] cursor-pointer 
                    group
                    ${isOpen ? 'scale-95' : 'animate-bounce'}
                    border-2 border-gray-200
                    overflow-hidden`}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
        style={{ pointerEvents: 'auto' }}
      >
        {isOpen ? (
          <span className="text-gray-600 text-4xl sm:text-5xl font-bold 
                           transition-transform duration-300 group-hover:rotate-90">
            ×
          </span>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-3">
            <img 
              src={botIcon} 
              alt="Chat Bot" 
              className="w-full h-full object-cover rounded-full
                         transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full 
                             border-2 border-white animate-pulse shadow-lg"></span>
          </div>
        )}
      </button>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget
