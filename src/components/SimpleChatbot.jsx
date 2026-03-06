import { useState } from 'react';

const SimpleChatbot = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Chat Box */}
      {show && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-xl z-50">
          <div className="bg-purple-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-bold">Chat with Me</span>
            <button onClick={() => setShow(false)} className="text-xl">×</button>
          </div>
          <iframe
            src="https://app.rubikchat.com/chat/YAPer2MrlHASNtGpjbNGPn5N"
            className="w-full h-full rounded-b-lg"
            title="Chat"
          />
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShow(!show)}
        className="fixed bottom-5 right-5 w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg z-50"
      >
        💬
      </button>
    </>
  );
};

export default SimpleChatbot;
