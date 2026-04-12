import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Heading from './subcomponents/Heading';
import SignInCard from '../components/subcomponents/SignInCard';

const Contacts = () => {
  return (
    <div className=''>
      {/* Heading */}
      <div className='my-6 pt-6 text-gray-800' data-aos="fade-up" data-aos-duration="600">
        <Heading title="CONTACT WITH ME" sub="Contact" />
      </div>

      {/* Sign In + Contact Info Section (Responsive Flex) */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 sm:px-6 lg:px-12 py-6 text-gray-800">
        
        {/* Form Card */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg" data-aos="slide-right" data-aos-duration="1000">
          <SignInCard />
        </div>

        {/* Contact Info Card */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-xl" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="neomorphic-card text-gray-800 rounded-2xl">

            <div className="py-6 sm:py-9 px-4 sm:px-9">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold accent-yellow">
                Rehmat Ali..
              </h1>

              <p className="text-gray-500 py-3 sm:py-5 text-sm sm:text-base leading-relaxed">
                I'm available for collaboration or freelance opportunities. Feel free to reach out to me on LinkedIn, WhatsApp, or Gmail.
              </p>

              {/* Contact Icons */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap mt-4">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923244646260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorphic-icon-btn w-16 sm:w-20 md:w-24 lg:w-28 
                    transition-all duration-300 hover:bg-accent-yellow hover:scale-105 flex items-center justify-center"
                >
                  <FaWhatsapp className="text-green-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rehmat-ali-01a443350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorphic-icon-btn w-16 sm:w-20 md:w-24 lg:w-28 
                    transition-all duration-300 hover:bg-accent-yellow hover:scale-105 flex items-center justify-center"
                >
                  <FaLinkedin className="text-[#0A66C2] text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                </a>

                {/* Gmail */}
                <a
                  href="mailto:itsrehmet@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorphic-icon-btn w-16 sm:w-20 md:w-24 lg:w-28 
                    transition-all duration-300 hover:bg-accent-yellow hover:scale-105 flex items-center justify-center"
                >
                  <SiGmail className="text-red-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
