import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP with optimized settings
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// ============ ENTRANCE ANIMATIONS ============

// Fade in from bottom with scale
export const animateFadeInUp = (element, options = {}) => {
  const { delay = 0, duration = 0.8, stagger = 0 } = options;
  
  return gsap.fromTo(
    element,
    { 
      opacity: 0, 
      y: 60, 
      scale: 0.95 
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      clearProps: 'all',
    }
  );
};

// Slide in from left
export const animateSlideInLeft = (element, options = {}) => {
  const { delay = 0, duration = 1 } = options;
  
  return gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      clearProps: 'all',
    }
  );
};

// Slide in from right
export const animateSlideInRight = (element, options = {}) => {
  const { delay = 0, duration = 1 } = options;
  
  return gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      clearProps: 'all',
    }
  );
};

// Scale and rotate entrance
export const animateScaleRotate = (element, options = {}) => {
  const { delay = 0, duration = 0.8, stagger = 0 } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.5,
      rotation: -180,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      stagger,
      ease: 'back.out(1.7)',
      clearProps: 'all',
    }
  );
};

// Bounce entrance
export const animateBounceIn = (element, options = {}) => {
  const { delay = 0, duration = 1, stagger = 0 } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'elastic.out(1, 0.5)',
      clearProps: 'all',
    }
  );
};

// ============ SCROLL TRIGGER ANIMATIONS ============

// Scroll-triggered fade in up
export const animateScrollFadeUp = (element, options = {}) => {
  const { delay = 0, duration = 0.8, start = 'top 85%', stagger = 0 } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
      clearProps: 'all',
    }
  );
};

// Scroll-triggered slide in
export const animateScrollSlide = (element, options = {}) => {
  const { delay = 0, duration = 1, direction = 'left', start = 'top 85%' } = options;
  const xValue = direction === 'left' ? -100 : 100;
  
  return gsap.fromTo(
    element,
    { x: xValue, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
      clearProps: 'all',
    }
  );
};

// Scroll-triggered scale rotate
export const animateScrollScaleRotate = (element, options = {}) => {
  const { delay = 0, duration = 0.8, start = 'top 90%', stagger = 0 } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.5,
      rotation: -180,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      stagger,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
      clearProps: 'all',
    }
  );
};

// ============ CONTINUOUS ANIMATIONS ============

// Floating animation
export const animateFloat = (element, options = {}) => {
  const { duration = 2.5, yOffset = -15 } = options;
  
  return gsap.to(element, {
    y: yOffset,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Pulse animation
export const animatePulse = (element, options = {}) => {
  const { duration = 1.5, scale = 1.05 } = options;
  
  return gsap.to(element, {
    scale,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Rotate animation
export const animateRotate = (element, options = {}) => {
  const { duration = 3 } = options;
  
  return gsap.to(element, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: 'linear',
  });
};

// ============ HOVER ANIMATIONS ============

// Hover lift effect
export const setupHoverLift = (element, options = {}) => {
  const { yOffset = -10, rotation = 5, duration = 0.3 } = options;
  
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y: yOffset,
      rotation,
      duration,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      rotation: 0,
      duration,
      ease: 'power2.out',
    });
  });
};

// ============ TIMELINE ANIMATIONS ============

// Create entrance timeline
export const createEntranceTimeline = (elements, options = {}) => {
  const { stagger = 0.15, ease = 'power3.out' } = options;
  
  const tl = gsap.timeline({ defaults: { ease } });
  
  elements.forEach((el, index) => {
    if (el.element) {
      tl.fromTo(
        el.element,
        el.from || { opacity: 0, y: 50 },
        {
          ...el.to,
          opacity: 1,
          duration: el.duration || 0.8,
        },
        index === 0 ? 0 : `-=${1 - stagger}`
      );
    }
  });
  
  return tl;
};

// ============ UTILITY FUNCTIONS ============

// Kill all animations on element
export const killAnimations = (element) => {
  gsap.killTweensOf(element);
};

// Refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Batch scroll animations for performance
export const batchScrollAnimations = (selector, animation, options = {}) => {
  const { start = 'top 85%', stagger = 0.1 } = options;
  
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => animation(batch, { stagger }),
    start,
  });
};

