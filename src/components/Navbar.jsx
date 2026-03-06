 import React, { useState } from 'react';
import logo from '../images/iconprofile.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="text-gray-400 md:hidden px-10 py-3 font-sans fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-white/5 border border-white/10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
          
          {/* Left Side: Logo and Name */}
          <div className="flex items-center gap-2 ml-5">
            <img className="h-14 w-14 rounded-full object-cover border-2 border-[#f5b841]" src={logo} alt="Rehmat Ali" />
            <h1 className="font-bold text-xl text-white font-sans">
              Rehmat Ali
            </h1>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-red-500 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>

          {/* Nav Links */}
          <div className={`w-full md:w-auto md:flex items-center gap-11 font-medium text-md ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row gap-29 ml-35 md:gap-10 mt-9 md:mt-0 md:ml-6">
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Home</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Experience</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Skills</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Certifications</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Projects</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-white active:text-white duration-200" href="#">Contact</a>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
