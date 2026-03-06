import { useState } from 'react';
import Heading from './subcomponents/Heading';
import ResumeEducation from './ResumeEducation';
import ResumeSkills from './ResumeSkills';
import Experience from './Experience';
import Certification from './Certification';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Button Style Generator
  const getButtonStyle = (tab) =>
    `neomorphic-btn h-14 min-w-[200px] m-2 px-4 py-2 font-medium text-sm sm:text-base 
     flex items-center justify-center rounded-xl outline-none cursor-pointer transition-all duration-300 ease-in-out
     ${
       activeTab === tab
         ? 'bg-accent-yellow text-white'
         : 'text-gray-800 hover:text-[#f5b841] focus:text-[#f5b841]'
     }`;

  return (
    <div className="text-gray-800 py-4 px-4 sm:px-8">
      {/* Heading */}
      <div data-aos="fade-up" data-aos-duration="600">
        <Heading sub="As a MernStack Developer" title="My Resume" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center py-10" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <button onClick={() => setActiveTab('education')} className={getButtonStyle('education')}>
          EDUCATION
        </button>

        <button onClick={() => setActiveTab('skills')} className={getButtonStyle('skills')}>
          PROFESSIONAL SKILLS
        </button>
        <button onClick={() => setActiveTab('experience')} className={getButtonStyle('experience')}>
          EXPERIENCE
        </button>
        <button onClick={() => setActiveTab('certifications')} className={getButtonStyle('certifications')}>
          CERTIFICATIONS
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'education' && <ResumeEducation />}
        {activeTab === 'skills' && <ResumeSkills />}
        {activeTab === 'certifications' && <Certification />}
        {activeTab === 'experience' && <Experience />}
      </div>
    </div>
  );
};

export default Resume;
