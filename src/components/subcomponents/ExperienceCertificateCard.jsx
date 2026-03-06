import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceCertificateCard = ({
  img,
  company,
  position,
  duration,
  technologies,
  description,
  certificateCode,
  type,
  status,
  downloadName,
  buttonText,
  offerLetterImg
}) => {
  const handleDownload = () => {
    if (downloadName) {
      const link = document.createElement('a');
      link.href = offerLetterImg || img;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleView = () => {
    window.open(offerLetterImg || img, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="neomorphic-card rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden border border-gray-100 group w-full max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto"
    >
      {/* Certificate Image Display */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="flex justify-center items-center p-3 sm:p-6">
          <img
            src={img}
            alt={`${company} Certificate`}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-md sm:shadow-lg border border-gray-200"
            style={{ 
              minHeight: '200px',
              maxHeight: '300px',
              '@media (min-width: 640px)': {
                minHeight: '300px',
                maxHeight: '500px'
              }
            }}
            onError={(e) => {
              e.target.src = '/myLogo.jpg'; // Fallback image
            }}
          />
        </div>
        
        {/* Certificate Code Badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#f5b841] text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg z-10">
          <span className="text-xs sm:text-sm font-mono font-bold">{certificateCode}</span>
        </div>

        {/* Completion Status Badge */}
        <div className="absolute top-12 right-2 sm:top-16 sm:right-4 bg-[#25D366] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg shadow-lg z-10">
          <span className="text-xs font-bold">✓ {status || 'Completed'}</span>
        </div>

        {/* Company Info Badge */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg z-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f5b841] flex items-center justify-center">
              <span className="text-white font-bold text-xs">{company.charAt(0)}</span>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-bold text-gray-800 text-sm">{company}</h4>
              <p className="text-xs text-gray-600">{type}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleView}
            className="p-2 sm:p-3 bg-[#f5b841] hover:bg-[#e5a831] text-white rounded-full shadow-lg transition-colors duration-200"
            title="View Full Certificate"
          >
            <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 sm:p-3 bg-[#25D366] hover:bg-[#1fa855] text-white rounded-full shadow-lg transition-colors duration-200"
            title="Download Certificate"
          >
            <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#f5b841] transition-colors duration-300 leading-tight">
            {position}
          </h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-2 sm:mb-3">
            <div className="flex items-center gap-1">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{duration}</span>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-3 sm:mb-4">
          <h5 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {technologies.split(', ').map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1 neomorphic-badge text-gray-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={handleView}
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 neomorphic-btn text-gray-800 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:bg-accent-yellow text-sm sm:text-base"
          >
            <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{buttonText || "View Certificate"}</span>
          </button>
          
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 neomorphic-btn text-gray-800 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:bg-accent-yellow text-sm sm:text-base"
          >
            <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCertificateCard;