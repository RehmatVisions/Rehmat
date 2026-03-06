 import React, { useState } from 'react';

const AnimateBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Toggle on touch
  const handleTap = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 1000); // auto-reset after 1s
  };

  return (
    <div className="relative inline-flex justify-center items-center">
      <button
        onTouchStart={handleTap}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          WebkitBoxReflect:
            'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))',
        }}
        className={`w-fit px-6 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-orange-500 shadow-xl ${
          isHovered ? 'shadow-2xl shadow-red-600' : 'shadow-red-600'
        } uppercase font-serif tracking-widest relative overflow-hidden text-transparent cursor-pointer z-10 text-sm sm:text-base after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]`}
      >
        Button

        <p
          className={`absolute pb-3 z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest ${
            isHovered ? '-translate-y-full' : ''
          }`}
        >
          Ask AI
        </p>

        <p
          className={`absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 h-full w-full transition-all duration-400 tracking-widest font-extrabold ${
            isHovered ? '-translate-y-[40%]' : 'translate-y-full'
          }`}
        >
          Sending
        </p>

        <svg
          className={`absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ${
            isHovered ? '-translate-y-[45%]' : ''
          } ${isHovered ? '' : 'animate-pulse'}`}
          viewBox="0 0 2400 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
              <stop offset="0%" stopOpacity="1" stopColor="hsl(37, 99%, 67%)" />
              <stop offset="100%" stopOpacity="1" stopColor="hsl(316, 73%, 52%)" />
            </linearGradient>
          </defs>
          <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
            {[35, 70, 105, 140, 175, 210, 245].map((dy, i) => (
              <path
                key={i}
                opacity={(i + 1) * 0.16}
                transform={`matrix(1,0,0,1,0,${dy})`}
                d="M 0 305.98 Q 227.6 450 600 302.18 Q 1010.77 450 1200 343.3 Q 1379.44 450 1800 320.39 Q 2153.57 450 2400 314.38 L 2400 800 L 0 800 L 0 340.31 Z"
              />
            ))}
          </g>
        </svg>

        <svg
          className={`absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] transition-all duration-500 z-40 fill-red-500 ${
            isHovered ? '-translate-y-[33%] scale-95' : ''
          }`}
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,170.7C627.7,203,646,245,665,256C683.1,267,702,245,720,245.3C738.5,245,757,267,775,266.7C793.8,267,812,245,831,234.7C849.2,224,868,224,886,218.7C904.6,213,923,203,942,170.7C960,139,978,85,997,53.3C1015.4,21,1034,11,1052,48C1070.8,85,1089,171,1108,197.3C1126.2,224,1145,192,1163,197.3C1181.5,203,1200,245,1218,224C1236.9,203,1255,117,1274,106.7C1292.3,96,1311,160,1329,170.7C1347.7,181,1366,139,1385,128C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L0,320Z"
            fillOpacity="1"
          />
        </svg>
      </button>
    </div>
  );
};

export default AnimateBtn;
