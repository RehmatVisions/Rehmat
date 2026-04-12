import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeAnimation = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const fullText = 'Welcome to My Portfolio';

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setShow(true);
      sessionStorage.setItem('hasSeenWelcome', 'true');

      // Typewriter effect
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 60);

      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 40);

      // Hide after 4 seconds
      setTimeout(() => {
        setShow(false);
      }, 4000);

      return () => {
        clearInterval(typeInterval);
        clearInterval(progressInterval);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#e3e8ef' }}
        >
          {/* Typewriter Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-16 italic"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#000',
              fontStyle: 'italic',
              letterSpacing: '-0.02em'
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Enhanced Loading Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Bouncing Dots */}
            <div className="flex gap-3 mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-5 h-5 rounded-full relative"
                  style={{
                    background: '#e3e8ef',
                    boxShadow: '6px 6px 12px #b8bdc8, -6px -6px 12px #ffffff'
                  }}
                  animate={{
                    y: [0, -25, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: '#f5b841' }}
                    animate={{
                      scale: [0.6, 1, 0.6],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Progress Bar with Neomorphic Design */}
            <div className="w-80 md:w-96">
              <div
                className="h-3 rounded-full relative overflow-hidden"
                style={{
                  background: '#e3e8ef',
                  boxShadow: 'inset 4px 4px 8px #b8bdc8, inset -4px -4px 8px #ffffff'
                }}
              >
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #f5b841 0%, #ffd32a 100%)',
                    boxShadow: '0 2px 8px rgba(245, 184, 65, 0.5)'
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-4 text-xl font-semibold"
                style={{ color: '#f5b841', fontFamily: 'Poppins, sans-serif' }}
              >
                {progress}%
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg font-medium mt-2"
              style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}
            >
              Loading your experience...
            </motion.p>
          </motion.div>

          {/* Decorative Circles */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full"
            style={{
              background: '#e3e8ef',
              boxShadow: '8px 8px 16px #b8bdc8, -8px -8px 16px #ffffff'
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 rounded-full"
            style={{
              background: '#e3e8ef',
              boxShadow: '6px 6px 12px #b8bdc8, -6px -6px 12px #ffffff'
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
