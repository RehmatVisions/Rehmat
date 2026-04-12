import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  FaMobileAlt,
  FaLaptopCode,
  FaReact,
  FaPaintBrush,
  FaBolt,
  FaSyncAlt,
  FaMagic,
  FaLink,
  FaGlobe
} from "react-icons/fa";

const Feautures = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const features = [
    {
      icon: <FaMobileAlt className="text-[#34d399]" />,
      heading: "Responsive Web Design",
      desc: "Fully mobile-friendly layouts that look great on all devices."
    },
    {
      icon: <FaLaptopCode className="text-[#60a5fa]" />,
      heading: "Clean & Maintainable Code",
      desc: "Code that's well-organized, readable, and easy to update."
    },
    {
      icon: <FaReact className="text-[#61dafb]" />,
      heading: "React.js Frontend Development",
      desc: "SPAs using powerful React features like hooks, router, and components."
    },
    {
      icon: <FaPaintBrush className="text-[#f472b6]" />,
      heading: "Tailwind CSS Styling",
      desc: "Pixel-perfect, utility-first design with full customization power."
    },
    {
      icon: <FaBolt className="text-yellow-400" />,
      heading: "Fast Performance",
      desc: "Optimized sites for speed, smooth loading, and better SEO."
    },
    {
      icon: <FaSyncAlt className="text-purple-400" />,
      heading: "Reusable Components",
      desc: "Modular React components for scalability and maintenance."
    },
    {
      icon: <FaMagic className="text-pink-500" />,
      heading: "Modern UI/UX",
      desc: "User-focused design with animation and interaction using Framer Motion, Swiper.js, etc."
    },
    {
      icon: <FaLink className="text-teal-400" />,
      heading: "API Integration",
      desc: "Fetching and displaying dynamic content using Axios and REST APIs."
    },
    {
      icon: <FaGlobe className="text-indigo-400" />,
      heading: "Cross-Browser Compatibility",
      desc: "Your site will work perfectly in all major browsers."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='mt-10 px-4 sm:px-6 lg:px-8 py-12 text-gray-900'
    >
      {/* Enhanced Heading Section */}
      <div className='text-center mb-16' data-aos="fade-up" data-aos-duration="600">
        <div className='inline-block'>
          <span className='text-sm sm:text-base font-bold tracking-[0.3em] uppercase 
                          accent-yellow
                          relative font-["Poppins",sans-serif]
                          after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                          after:bg-[#f5b841]'>
            FEATURES
          </span>
        </div>
        
        <h1 
          data-aos="fade-up" 
          data-aos-duration="600" 
          data-aos-delay="100"
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-6 mb-6
                     text-gray-800
                     font-["Montserrat",sans-serif] tracking-tight'>
          What I Offer
        </h1>

        <p
          data-aos="fade-up" 
          data-aos-duration="600" 
          data-aos-delay="200"
          className='text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-["Inter",sans-serif] leading-relaxed'>
          Delivering modern, scalable, and high-performance web solutions
        </p>
      </div>

      {/* Cards Section */}
      <div className='All-cards'>
        <div className='flex items-center justify-center py-6 flex-wrap gap-8 sm:gap-10 lg:gap-12'>
          {features.map((feature, index) => {
            const aosAnimations = [
              'zoom-in',
              'flip-up',
              'fade-up',
              'fade-down',
              'flip-left',
              'flip-right',
              'zoom-in-up',
              'zoom-in-down',
              'slide-up'
            ];
            const aosAnimation = aosAnimations[index % aosAnimations.length];
            
            return (
            <motion.div
              key={index}
              data-aos={aosAnimation}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="group relative"
            >
              <div
                tabIndex={0}
                className="neomorphic-card relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 
                           rounded-full
                           flex flex-col items-center justify-center p-4 sm:p-6
                           transition-all duration-500 ease-out
                           hover:scale-110 focus:scale-110
                           outline-none cursor-pointer"
              >
                {/* Animated Background Circles */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-pink-400/30 to-transparent rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-3 sm:mb-4 text-4xl sm:text-5xl lg:text-6xl 
                                transition-all duration-500 ease-out
                                group-hover:scale-125 group-hover:rotate-12 
                                group-focus:scale-125 group-focus:rotate-12
                                drop-shadow-[0_4px_10px_rgba(147,51,234,0.3)]">
                  {feature.icon}
                </div>

                {/* Heading */}
                <h2 className="relative z-10 text-center text-base sm:text-lg lg:text-xl font-extrabold mb-2 
                               text-gray-800
                               transition-all duration-300
                               group-hover:accent-yellow
                               group-focus:accent-yellow
                               px-2 font-['Poppins',sans-serif] tracking-tight">
                  {feature.heading}
                </h2>

                {/* Description */}
                <p className="relative z-10 text-center text-xs sm:text-sm text-gray-600 leading-relaxed
                              transition-all duration-300
                              group-hover:text-gray-800 group-focus:text-gray-800
                              px-2 font-['Inter',sans-serif]">
                  {feature.desc}
                </p>

                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#f5b841] animate-[spin_8s_linear_infinite]"></div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Feautures;
