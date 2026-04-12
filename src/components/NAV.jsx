 import React, { useState } from 'react';
import rehmat from '../images/RRR.jpg';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NAV = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cardStyle = `
    px-6 py-2 rounded-lg cursor-pointer text-gray-800 
    flex items-center justify-center text-base font-semibold 
    transition-all duration-300 
    neomorphic-btn
    hover:bg-accent-yellow hover:text-white
    hover:scale-105 active:scale-105
    mb-2
  `;

  return (
    <div  className="max-w-[100vw] overflow-x-hidden">
      {/* Mobile Button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={rehmat}
            alt="Rehmat Ali"
            className="h-14 w-14 z-50 rounded-full border-2 border-[#f5b841] 
              hover:border-[#f5b841] transition-all duration-300 
              shadow-lg hover:shadow-[#f5b841]/50"
          />
        </button>
      </div>

      {/* Sidebar */}
      <nav 
        onClick={() => setMenuOpen(false)}
        className={`
          fixed top-0 left-0 h-screen z-40 text-gray-800 font-sans
          transition-all duration-500 ease-in-out border-r border-gray-300
          shadow-xl overflow-y-auto overflow-x-hidden
          ${menuOpen ? 'w-[75vw] px-6 py-10' : 'w-0 px-0 py-0'}
          sm:w-[20vw] sm:px-6 sm:py-10 sm:block
          bg-[#e3e8ef]
        `}
      >
        <div className="flex flex-col items-start gap-2 w-full min-h-full pb-6">
          {/* Close Button - only on mobile */}
          <div className="w-full flex justify-between items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-red-400 text-2xl hover:text-red-300"
            >
              <div>.</div>
            </button>
          </div>

          {/* Profile Section */}
          <img
            src={rehmat}
            alt="Rehmat Ali"
            className="h-24 w-24 rounded-full border-4 ml-5 border-[#f5b841] 
              shadow-lg hover:shadow-[#f5b841]/50 transition-all duration-300 
              mx-auto sm:block hidden"
          />
          <h1 className="text-xl font-bold mt-2 text-center accent-yellow">
            Rehmat Ali
          </h1>
          <p className="text-sm text-gray-700">
            Building Clean, Fast & Interactive Applictions.
          </p>

          {/* Nav Links */}
          <div className="flex flex-col text-md font-medium w-full">
            <Link to="/" className={cardStyle}>Home</Link>
            <Link to="/resume" className={cardStyle}>Resume</Link>
            <Link to="/skills" className={cardStyle}>Skills</Link>
            <Link to="/testimonials" className={cardStyle}>Testimonials</Link>
            <Link to="/features" className={cardStyle}>Features</Link>
            <Link to="/projects" className={cardStyle}>Projects</Link>
            <Link to="/contact" className={cardStyle}>Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NAV;
