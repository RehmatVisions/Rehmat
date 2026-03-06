import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Heading from './subcomponents/Heading';
import zeff from '../images/zeff.jpeg';
import nts from '../images/nts.jpeg';
import leads from '../images/leads.jpeg';

const testimonials = [
  {
    name: 'ABC',
    feedback: 'This portfolio is amazing! Very clean and responsive.',
    img: zeff,
  },
  {
    name: 'Abc',
    feedback: 'The work is excellent, and the skills are top-notch.',
    img: nts,
  },
  {
    name: 'Abc',
    feedback: 'Great design and smooth animations. Highly recommend!',
    img: leads,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-10 mt-20 rounded-3xl">
      {/* Heading */}
      <div className="mb-16 text-center" data-aos="fade-up" data-aos-duration="600">
        <Heading sub="What Instructors Say" title="Testimonials" />
      </div>

      {/* Swiper Section */}
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 py-12 px-4">
                
                {/* Institute Info Card */}
                <div
                  data-aos="slide-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  tabIndex={0}
                  className="neomorphic-card w-full lg:w-1/2
                             p-8 sm:p-10 rounded-3xl 
                             flex flex-col justify-center 
                             transition-all duration-500 ease-out outline-none
                             hover:scale-[1.02] hover:-translate-y-2
                             focus:scale-[1.02] focus:-translate-y-2
                             relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#f5b841]
                                      flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                      Learning Institutes
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 text-center">
                      These institutes have greatly contributed to my MERN Stack learning journey by
                      providing structured guidance and practical knowledge.
                    </p>
                    
                    <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                      <li className="flex items-start gap-3 p-3 rounded-xl neomorphic-badge
                                     hover:scale-[1.02]">
                        <span className="accent-yellow text-xl mt-0.5">✓</span>
                        <span className="font-medium">Lahore Leads University</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-xl neomorphic-badge
                                     hover:scale-[1.02]">
                        <span className="accent-yellow text-xl mt-0.5">✓</span>
                        <span className="font-medium">Zaff Institute of Arfa Kareem Technology</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-xl neomorphic-badge
                                     hover:scale-[1.02]">
                        <span className="accent-yellow text-xl mt-0.5">✓</span>
                        <span className="font-medium">NAVTTC – Govt Certified</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div
                  data-aos="slide-left"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  tabIndex={0}
                  className="neomorphic-card w-full lg:w-1/2
                             p-8 sm:p-10 rounded-3xl 
                             flex flex-col justify-center items-center
                             transition-all duration-500 ease-out outline-none
                             hover:scale-[1.02] hover:-translate-y-2
                             focus:scale-[1.02] focus:-translate-y-2
                             relative overflow-hidden"
                >
                  <div className="relative z-10 text-center">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg className="w-12 h-12 mx-auto text-[#f5b841] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    {/* Profile Image */}
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-[#f5b841]
                                      rounded-full blur-xl opacity-30 animate-pulse"></div>
                      <img
                        src={item.img}
                        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover 
                                   border-4 border-white shadow-xl
                                   transition-transform duration-500
                                   hover:scale-110 hover:rotate-6"
                        alt={item.name}
                      />
                    </div>
                    
                    {/* Feedback */}
                    <p className="text-lg sm:text-xl italic mb-6 leading-relaxed 
                                  text-gray-700 font-semibold">
                      "{item.feedback}"
                    </p>
                    
                    {/* Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
