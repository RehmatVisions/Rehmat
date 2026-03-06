 import React, { useState } from 'react';
import rehmat from '../images/RRR.jpg'
import AnimateBtn from './subcomponents/AnimateBtn';
 import Video from '../components/Video'
 
 
const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponse('');

    input.trim() === '' ? null : (
      setLoading(true),
      await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCcUxOGWe1mZrWCc0THWYGW5Tb4C2iV9Q0',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      )
        .then((res) => res.json())
        .then((data) =>
          data?.candidates?.[0]?.content?.parts?.[0]?.text
            ? setResponse(data.candidates[0].content.parts[0].text)
            : setError('No response from Gemini.')
        )
        .catch(() => setError('Something went wrong.'))
        .finally(() => setLoading(false))
    );
  };

  return (
    <div className="min-h-screen w-full  p-6 bg-gradient-to-br from-[#6B21A8] via-[#9333EA] to-[#C4B5FD] text-white">
    
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white/10 p-4  border border-white/20">
        <h1 className="text-xl font-bold">🤖 Gemini Chatbot</h1>
        <img
          src={rehmat}
          alt="User"
          className="w-20 h-20 rounded-full border-2 border-[#67f567]"
        />
      </div>

      {/* Greeting */}
      <div className="text-center mb-6 mt-8">
        <h2 className="text-2xl font-semibold my-6">"Feel free to explore my work and get in touch."👋</h2>
        <p>How can AI help you today?</p>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
        <div className="flex items-center bg-white/10 border border-white/20 rounded-lg overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow p-3 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
          />
         
          <AnimateBtn   type="submit"/>
        </div>
      </form>

      {/* Output */}
      <div className="max-w-2xl mx-auto">
        {loading
          ? <p className="text-center">Loading...</p>
          : error
            ? <p className="text-center text-red-400">{error}</p>
            : response
              ? (
                <div className="bg-white/10 border border-white/20 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Response:</h3>
                  <p className="whitespace-pre-wrap">{response}</p>
                </div>
              )
              : null}
      </div>

      {/* Footer */}
      <p className="text-center mt-10 text-sm text-white/80">
        ⚠ Gemini Chatbot • Made by Rehmat Ali
      </p>
    <Video/>
     
    </div>
    

  );
};

export default Chatbot;
