//  // SignInCard.jsx
// import React, { useState } from 'react';
// import { SiGmail } from 'react-icons/si';
// import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
// import emailjs from 'emailjs-com';

// const SignInCard = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
 
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // alert(`Form submitted successfully\nName: ${name}\nEmail: ${email}\n Message: ${message}`);
//     setName('');
//     setEmail('');
 
//     setMessage('');

//       toast.success('Success Message!');
      
//   };

//   return (
//     <div className="max-w-[450px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px_35px] border-[5px] border-white shadow-[rgba(133,189,215,0.88)_0px_30px_30px_-20px] m-5">
//       <div className="text-center font-black text-[30px] text-red-400">Get In Touch</div>
      
//       <form onSubmit={handleSubmit} className="mt-5">
//         <input
//           required
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           placeholder="Enter Name"
//           className="w-full bg-white border-none p-[15px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#12B1D1]"
//         />
//         <input
//           required
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           placeholder="Enter Your Email"
//           className="w-full bg-white border-none p-[15px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#12B1D1]"
//         />
     
//         <textarea
//           required
//           onChange={(e) => setMessage(e.target.value)}
//           value={message}
//           placeholder="Write Message..."
//           className="w-full bg-white border-none p-[20px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#12B1D1]"
//         ></textarea>

//         <input
//           type="submit"
//           value="Send Message"
//           className="cursor-pointer block w-full font-bold  bg-gradient-to-r from-red-400 to-pink-500
//   text-white py-[15px] mt-5 rounded-[20px] shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] transition-all duration-200 hover:scale-[1.03] hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-[0.95] active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px]"
//         />
//       </form>

//       {/* Social Accounts */}
//       <div className="mt-6">
//         <span className="block text-center text-[10px] text-gray-400 mb-2">"Connect with Me Professionally"</span>
//         <div className="flex justify-center gap-6">
          
//           {/* Gmail */}
//           <a
//             href="mailto:itsrehmet@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#EA4335] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition"
//           >
//             <SiGmail className="text-white text-lg" />
//           </a>

//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/923244646260"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#25D366] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition"
//           >
//             <FaWhatsapp className="text-white text-lg" />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/rehmat-ali-01a443350"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#0A66C2] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition"
//           >
//             <FaLinkedinIn className="text-white text-lg" />
//           </a>
//         </div>
//       </div>

//       {/* Terms of Use */}
//       <span className="block text-center mt-4">
//         <a href="#" className="text-[#0099ff] text-[12px] no-underline">
//           Leave a Comment
//         </a>
//       </span>
//     </div>
//   );
// };

// export default SignInCard;




 // SignInCard.jsx
import React, { useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const SignInCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.info("Connecting...");

    const templateParams = {
        name: name,           // 👈 for {{name}}
  email: email,         // 👈 if used elsewhere
  message: message,     // 👈 for {{message}}
  time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_1hptcx8',               // ✅ Your EmailJS Service ID
        'template_sl9oiv5',         // ✅ Your EmailJS Template ID
        templateParams,
        'HjtNI0vYBWsimtaOh'             // ✅ Your EmailJS Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error("❌ EmailJS Error:", err);
        toast.error("Failed to send. Please try again.");
      });
  };

  return (
    <div className="max-w-[450px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px_35px] border-[5px] border-white shadow-[rgba(133,189,215,0.88)_0px_30px_30px_-20px] m-5">
      <div className="text-center font-black text-[30px] accent-yellow">Get In Touch</div>

      <form onSubmit={handleSubmit} className="mt-5">
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="w-full bg-white border-none p-[15px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#f5b841]"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="w-full bg-white border-none p-[15px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#f5b841]"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Message..."
          className="w-full bg-white border-none p-[20px_20px] rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-x-2 border-transparent focus:outline-none focus:border-[#f5b841]"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="cursor-pointer block w-full font-bold neomorphic-btn text-gray-800 py-[15px] mt-5 rounded-[20px] transition-all duration-200 hover:scale-[1.03] hover:bg-accent-yellow hover:text-white active:scale-[0.95]"
        />
      </form>

      {/* Social Accounts */}
      <div className="mt-6">
        <span className="block text-center text-[10px] text-gray-400 mb-2">Connect with Me Professionally</span>
        <div className="flex justify-center gap-6">
          <a href="mailto:itsrehmet@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-[#EA4335] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition">
            <SiGmail className="text-white text-lg" />
          </a>
          <a href="https://wa.me/923244646260" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition">
            <FaWhatsapp className="text-white text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/rehmat-ali-01a443350" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition">
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>
      </div>

      <span className="block text-center mt-4">
        <a href="#" className="text-[#f5b841] text-[12px] no-underline">Leave a Comment</a>
      </span>
    </div>
  );
};

export default SignInCard;
