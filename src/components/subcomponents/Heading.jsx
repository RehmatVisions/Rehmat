 import React from 'react';

const Heading = (props) => {
  return (
    <div className="text-center space-y-3 px-4">

      {/* Subheading */}
      <h4 className="text-[#f5b841] text-base md:text-lg tracking-widest">
        {props.sub}
      </h4>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-gray-800">
        <span className="accent-yellow">.</span>
        {props.title}
        <span className="accent-yellow">...</span>
      </h1>
    </div>
  );
};

export default Heading;
