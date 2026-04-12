const CertificateCard = ({ 
  img, 
  title, 
  subtitle, 
  description, 
  date, 
  certificateCode, 
  link,
  downloadName 
}) => {
  const isCompleted = !!certificateCode;

  return (
    <div className="group neomorphic-card rounded-xl sm:rounded-2xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-3 hover:bg-accent-yellow hover:text-white">
      <div className="flex flex-col sm:flex-row min-h-[280px] sm:min-h-[320px]">
        
        {/* Image Section */}
        <div 
          className="relative w-full sm:w-96 bg-gray-50"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="relative h-48 sm:h-full overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            
            {/* Status Badge */}
            <div 
              className="absolute top-3 right-3"
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-110 ${
                isCompleted ? 'bg-[#f5b841] hover:bg-[#e5a831]' : 'bg-orange-500 hover:bg-orange-600'
              }`}>
                {isCompleted ? 'Certified' : 'In Progress'}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          className="flex-1 p-4 sm:p-8 flex flex-col justify-between"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="space-y-3 sm:space-y-4">
            {/* Title & Subtitle */}
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm sm:text-lg text-gray-600 font-medium leading-tight group-hover:text-white">{subtitle}</p>
              )}
            </div>

            {/* Date */}
            {date && (
              <div 
                className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 rounded-lg text-xs sm:text-sm font-medium text-gray-700 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-once="true"
              >
                📅 {date}
              </div>
            )}

            {/* Description */}
            <p 
              className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none group-hover:text-white transition-colors duration-300"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
              data-aos-once="true"
            >
              {description}
            </p>
          </div>

          {/* Bottom Section */}
          <div 
            className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
            data-aos-once="true"
          >
            {/* Certificate ID */}
            {certificateCode && (
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3 group-hover:bg-white/20 transition-colors duration-300">
                <span className="text-xs sm:text-sm text-gray-500 font-mono group-hover:text-white">
                  ID: {certificateCode}
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 neomorphic-btn text-gray-800 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-accent-yellow hover:text-white text-sm sm:text-base"
                >
                  🔗 <span className="hidden xs:inline">View Certificate</span><span className="xs:hidden">View</span>
                </a>
              )}
              
              <a
                href={img}
                download={downloadName}
                className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 neomorphic-btn text-gray-800 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-accent-yellow hover:text-white text-sm sm:text-base"
              >
                📥 <span className="hidden xs:inline">Download</span><span className="xs:hidden">Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;


