import leads from '../images/leads.jpeg';
import zaff from '../images/zaff.jpeg';
import nts from '../images/navttc.png';
import apna from '../images/apna.jpeg';

const educationData = [
  {
    id: 1,
    heading: "Bachelor of Science in Computer Science",
    img: leads,
    ins: "Lahore Leads University",
    date: "Expected Graduation: 2028",
    desc: "Currently enrolled in the BSCS program, learning core programming, web development (HTML, CSS, JavaScript), databases, and software design. Gaining strong problem-solving and real-world project skills."
  },
  {
    id: 2,
    heading: "MERN Stack Web Development",
    img: zaff,
    ins: "(ZAFF Institute, Arfa Kareem Tower)",
    date: "Ongoing Course",
    desc: "Completed MERN Stack Web Development course from ZAFF Institute at Arfa Kareem Tower. Learned to build full-stack applications using MongoDB, Express.js, React.js, and Node.js with hands-on practice on real-world projects."
  },
  {
    id: 3,
    heading: "— NAVTTC Full Stack Course:",
    img: nts,
    ins: "National Vocational & Technical Training Commission",
    date: "Ongoing Course",
    desc: "Completed Full Stack Web Development course under the NAVTTC program, a government initiative by the Government of Pakistan. Learned both frontend and backend technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with hands-on training and real-world project experience."
  },
  {
    id: 4,
    heading: "Online Programming Courses",
    img: apna,
    ins: "YouTube Based (Self learning)",
    date: "Completed",
    desc: "Learned programming and web development from APNA COLLEGE and CODEWITH HARRY, along with self-learning through practice and online resources. Gained skills in JavaScript, React.js, and basic programming through consistent hands-on learning."
  }
];

const ResumeEducation = () => {
  return (
    <div className="text-gray-800 px-4 sm:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            tabIndex={0}
            className="neomorphic-card relative max-w-md mx-auto rounded-2xl overflow-hidden
                       transition-all duration-300 cursor-pointer 
                       hover:bg-[#f5b841]
                       focus:bg-[#f5b841]
                       hover:text-gray-800 focus:text-gray-800
                       p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={edu.img}
                alt={edu.heading}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#f5b841] transition-all duration-300"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold accent-yellow">{edu.heading}</h2>
                <h4 className="text-sm sm:text-base font-medium opacity-70">{edu.ins}</h4>
              </div>
            </div>

            <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full neomorphic-badge accent-yellow font-semibold 
                             transition-all duration-300 w-fit
                             hover:bg-accent-yellow hover:text-white">
              {edu.date}
            </span>

            <p className="text-sm sm:text-base leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
  <a href='/REHMATALI.pdf' download className="neomorphic-btn py-3 px-6 sm:px-10 text-sm sm:text-base font-semibold text-gray-800 
                     rounded-lg transition hover:scale-105 hover:bg-accent-yellow cursor-pointer flex items-center justify-around gap-2">
    DOWNLOAD CV   <svg
    className="h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
  </svg>
  </a>
{/* 
  <button className="py-3 px-6 sm:px-10 text-sm sm:text-base font-semibold text-pink-600 
                     bg-gradient-to-br from-purple-400 via-purple-200 to-pink-200 
                     rounded-lg shadow-md transition hover:scale-105 cursor-pointer">
    DOWNLOAD CERTIFICATES
  </button> */}
</div>

                     
    </div>
  );
};

export default ResumeEducation;
