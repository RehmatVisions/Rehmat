 import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e3e8ef] text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Company Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/herosec" className="hover:text-[#f5b841] transition-colors">About Us</a></li>
            <li><a href="/resume" className="hover:text-[#f5b841] transition-colors">Careers</a></li>
            <li><a href="/features" className="hover:text-[#f5b841] transition-colors">Blog</a></li>
            <li><a href="/contact" className="hover:text-[#f5b841] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/projects" className="hover:text-[#f5b841] transition-colors">Web Design</a></li>
            <li><a href="projects" className="hover:text-[#f5b841] transition-colors">Development</a></li>
            <li><a href=".chatbot" className="hover:text-[#f5b841] transition-colors">AI ChatBot</a></li>
            <li><a href="/testimonials" className="hover:text-[#f5b841] transition-colors">Branding</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://wa.me/923244646260" className="hover:text-[#f5b841] transition-colors">Help Center</a></li>
            <li><a href="mailto:itsrehmet@gmail.com?subject=Hello%20Rehmat&body=I'm%20interested%20in%20your%20services." className="hover:text-[#f5b841] transition-colors">FAQs</a></li>
            <li><a href="https://www.linkedin.com/messaging/thread/new/?recipients=rehmat-ali-01a443350" className="hover:text-[#f5b841] transition-colors">Linkdin</a></li>
            <li><a href="" className="hover:text-[#f5b841] transition-colors">Refund</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:contact@rehmetstudio.com" className="hover:text-[#f5b841] transition-colors">Email</a></li>
            <li><a href="https://linkedin.com/in/rehmat-ali-01a443350" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5b841] transition-colors">LinkedIn</a></li>
            <li><a href="https://wa.me/03244646260" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5b841] transition-colors">WhatsApp</a></li>
            <li><a href="https://www.google.com/maps?q=rehmet+studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5b841] transition-colors">Location</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} REHMET✕Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
