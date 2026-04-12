import { useEffect, useRef } from 'react';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { SiVercel, SiMongodb, SiExpress, SiNodedotjs, SiGithub, SiUpwork, SiFiverr } from "react-icons/si";
import { TbBrandReactNative } from 'react-icons/tb';
import { RiTailwindCssLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import hero from '../images/dp.jpg';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { 
  animateSlideInLeft, 
  animateFadeInUp, 
  animateFloat,
  createEntranceTimeline 
} from '../utils/gsapAnimations';

const HeroSec = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const socialRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Create entrance timeline
    createEntranceTimeline([
      { element: nameRef.current, from: { x: -100, opacity: 0 }, to: { x: 0 }, duration: 0.8 },
      { element: titleRef.current, from: { x: -100, opacity: 0 }, to: { x: 0 }, duration: 0.8 },
      { element: descRef.current, from: { y: 50, opacity: 0 }, to: { y: 0 }, duration: 0.8 },
      { element: socialRef.current, from: { y: 30, opacity: 0 }, to: { y: 0 }, duration: 0.6 },
      { element: skillsRef.current, from: { y: 30, opacity: 0 }, to: { y: 0 }, duration: 0.6 },
      { element: imageRef.current, from: { scale: 0.5, opacity: 0, rotation: -10 }, to: { scale: 1, rotation: 0 }, duration: 1 },
    ], { stagger: 0.15 });

    // Floating animation for image
    animateFloat(imageRef.current, { duration: 2.5, yOffset: -15 });
  }, []);

  const cardStyle =
    'neomorphic-icon-btn transition-all duration-300 hover:scale-105 focus:scale-105';

  const socialLinks = [
    { icon: <FiLinkedin className="text-[#2d83f3] text-3xl sm:text-4xl" />, url: "https://www.linkedin.com/in/rehmat-ali-01a443350" },
    { icon: <FiFacebook className="text-[#3f92ff] text-3xl sm:text-4xl" />, url: "https://www.facebook.com/RehmatVisions/" },
    { icon: <SiFiverr className="text-green-500 text-3xl sm:text-4xl" />, url: "https://www.fiverr.com/s/e64XNQP" },
    { icon: <SiUpwork className="text-[#6FDA44] text-3xl sm:text-4xl" />, url: "https://www.upwork.com/freelancers/~0177583e5d01fec6f0?mp_source=share" },
    { icon: <SiGithub className="text-black text-3xl sm:text-4xl" />, url: "https://github.com/RehmatAli02" },
    { icon: <FaWhatsapp className="text-[#25D366] text-3xl sm:text-4xl" />, url: "https://wa.me/923244646260" },
  ];

  const skills = [
    { icon: <TbBrandReactNative className="text-[#61DAFB] text-3xl sm:text-4xl" />, url: "https://vite.dev/" },
    { icon: <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" />, url: "https://tailwindcss.com/docs/installation/using-vite" },
    { icon: <SiMongodb className="text-[#47A248] text-3xl sm:text-4xl" />, url: "https://mongodb.com/" },
    { icon: <SiExpress className="text-gray-700 text-3xl sm:text-4xl" />, url: "https://expressjs.com/" },
    { icon: <SiNodedotjs className="text-green-600 text-3xl sm:text-4xl" />, url: "https://nodejs.org/" },
    { icon: <SiVercel className="text-black text-3xl sm:text-4xl" />, url: "https://vercel.com/" },
  ];

  return (
    <div className="min-h-screen mt-0 pt-16 md:pt-0 text-gray-800 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 pb-8 md:pb-12 overflow-hidden">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-2 sm:p-4 md:p-8 lg:p-10">
        <h1
          ref={nameRef}
          className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl accent-yellow mb-2"
        >
          Rehmat Ali
        </h1>

        <h4
          ref={titleRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide mb-4 sm:mb-6 text-gray-700 font-medium"
        >
          WELCOME TO MY PORTFOLIO
        </h4>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
        >
          <span className="text-gray-800">Hi, I'm </span>
          <br className="sm:hidden" />
          <span className="accent-yellow block sm:inline">
            Rehmat Ali
          </span>
        </h1>

        <h3 
          className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-4 sm:mb-6 text-gray-700">
          <Typewriter
            options={{
              strings: ['React Developer', 'Backend Developer', 'MernStack Developer'],
              autoStart: true,
              loop: true,
              delay: 65,
              deleteSpeed: 30,
            }}
          />
        </h3>

        <p 
          ref={descRef}
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md leading-relaxed"
        >
          Full-stack MERN developer building fast, modern web applications — specializing in React, Node.js, Express, MongoDB, Tailwind, and JavaScript with a strong focus on design, UX, and performance.
        </p>

        {/* Social & Skills */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div ref={socialRef}>
            <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-wide accent-yellow mb-2 sm:mb-3">
              Find me
            </h3>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
              {socialLinks.map((item, index) => (
                <div 
                  className={cardStyle} 
                  key={index} 
                  tabIndex={0}
                  style={{ width: '40px', height: '40px' }}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div ref={skillsRef}>
            <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-wide accent-yellow mb-2 sm:mb-3">
              Best skills on
            </h3>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
              {skills.map((item, index) => (
                <div 
                  className={cardStyle} 
                  key={index} 
                  tabIndex={0}
                  style={{ width: '40px', height: '40px' }}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 px-4">
        <div
          ref={imageRef}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full p-2 transition-all duration-300 hover:brightness-110 hover:scale-[1.05]"
          style={{
            background: '#e3e8ef',
            boxShadow: '10px 10px 20px #b8bdc8, -10px -10px 20px #ffffff'
          }}
          tabIndex={0}
        >
          <motion.div
            className="relative w-full h-full cursor-pointer"
            whileHover={{ scale: 1.08 }}
          >
            <motion.img
              src={hero}
              alt="Rehmat Ali"
              loading="eager"
              className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-[#f5b841] shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              animate={{
                rotateX: [0, 2, -2, 0],
                rotateY: [0, 2, -2, 0],
                y: [0, -12, 0],
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.2)",
                  "0 15px 30px rgba(0,0,0,0.3)",
                  "0 10px 25px rgba(0,0,0,0.2)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
