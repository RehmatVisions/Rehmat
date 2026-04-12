import { useEffect, useRef } from 'react';
import { animateScrollScaleRotate, setupHoverLift } from '../utils/gsapAnimations';
import htmlImg from '../images/html.jpeg';
import cssImg from '../images/css.png';
import jsImg from '../images/JS.jpeg';
import tailwindImg from '../images/tailwind.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/nodejs.png';
import expressImg from '../images/express.png';
import mongoImg from '../images/mongo.png';
import githubImg from '../images/download.png';
import stripeImg from '../images/stripe.png';
import socketImg from '../images/socket.png';

const ResumeSkills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        // Scroll animation
        animateScrollScaleRotate(skill, {
          delay: index * 0.05,
          duration: 0.8,
          start: 'top 90%',
        });

        // Hover animation
        setupHoverLift(skill, {
          yOffset: -10,
          rotation: 5,
          duration: 0.3,
        });
      }
    });
  }, []);
  const skills = [
    { img: htmlImg, skill: "HTML" },
    { img: cssImg, skill: "CSS" },
    { img: jsImg, skill: "JavaScript" },
    { img: tailwindImg, skill: "Tailwind CSS" },
    { img: reactImg, skill: "ReactJS" },
    { img: nodeImg, skill: "Node.js" },
    { img: expressImg, skill: "Express.js" },
    { img: mongoImg, skill: "MongoDB" },
    { img: githubImg, skill: "GitHub" },
    { img: stripeImg, skill: "Stripe" },
    { img: socketImg, skill: "Socket.IO" },
    { img: nodeImg, skill: "Redis", icon: "🔴" },
    { img: nodeImg, skill: "Firebase Push", icon: "🔔" },
    { img: expressImg, skill: "REST APIs", icon: "🔌" },
    { img: nodeImg, skill: "Cron Jobs", icon: "⏰" }
  ];

  return (
    <div className="py-16 px-4">
      <div className="flex flex-wrap justify-center gap-9">
        {skills.map((skillData, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <div
              tabIndex={0}
              className="neomorphic-card text-gray-800 font-medium w-52 h-60 p-6 rounded-2xl 
                         flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out 
                         hover:text-white hover:bg-accent-yellow
                         focus:text-white focus:bg-accent-yellow
                         hover:scale-105 focus:scale-105 outline-none relative"
            >
              {skillData.icon && (
                <div className="absolute top-2 right-2 text-3xl opacity-70">
                  {skillData.icon}
                </div>
              )}
              <img className="h-30 w-30 rounded-full mb-4" src={skillData.img} alt="Skill" loading="lazy" decoding="async" />
              <h2 className="text-xl sm:text-2xl font-semibold text-center">
                {skillData.skill}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
