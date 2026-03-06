//  import React, { useState } from 'react';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Form submitted successfully\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`);
//     setName('');
//     setEmail('');
//     setNumber('');
//     setMessage('');
//   };

//   const inputStyle = `
//     w-full rounded-md border border-white/20 bg-white/10 text-white placeholder-white/70 px-5 py-3 
//     backdrop-blur-md shadow-[2px_2px_8px_#d8b4fe,-2px_-2px_8px_#f5d0fe] 
//     outline-none transition-all duration-300 
//     hover:shadow-[inset_3px_3px_10px_#e0e7ff,inset_-3px_-3px_10px_#f3e8ff]
//     focus:shadow-[inset_3px_3px_10px_#e0e7ff,inset_-3px_-3px_10px_#f3e8ff]
//     hover:scale-[1.03] focus:scale-[1.03] hover:brightness-110 focus:brightness-110`;

//   return (
//     <div className="flex min-h-screen overflow-hidden max-w-6xl w-full items-center justify-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 
//         bg-gradient-to-br from-[#6B21A8] via-[#9333EA] to-[#C4B5FD] 
//         max-w-7xl rounded-xl p-8 backdrop-blur-xl bg-white/5 shadow-xl border border-white/20"
//       >
//         <div className="flex flex-col gap-6 md:flex-row">
//           <div className="flex-1">
//             <label className="mb-2 block text-sm text-white/80" htmlFor="name">Name</label>
//             <input
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               id="name"
//               className={inputStyle}
//               type="text"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="mb-2 block text-sm text-white/80" htmlFor="email">Email</label>
//             <input
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//               className={inputStyle}
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="mb-2 block text-sm text-white/80" htmlFor="phone">Phone</label>
//           <input
//             required
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             id="phone"
//             className={inputStyle}
//             type="tel"
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <div className="mt-6">
//           <label className="mb-2 block text-sm text-white/80" htmlFor="message">Message</label>
//           <textarea
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             id="message"
//             className={`${inputStyle} resize-none`}
//             rows="5"
//             placeholder="Enter your message"
//           ></textarea>
//         </div>

//         <button
//           className="mt-6 w-full rounded-md px-4 py-3 text-white font-semibold text-lg 
//           bg-white/10 backdrop-blur-md border border-white/20
//           shadow-[2px_2px_10px_#d8b4fe,-2px_-2px_10px_#f5d0fe]
//           hover:shadow-[inset_3px_3px_10px_#e0e7ff,inset_-3px_-3px_10px_#f3e8ff]
//           focus:shadow-[inset_3px_3px_10px_#e0e7ff,inset_-3px_-3px_10px_#f3e8ff]
//           hover:brightness-110 focus:brightness-110
//           hover:scale-105 focus:scale-105
//           transition-all duration-300 cursor-pointer"
//           type="submit"
//         >
//           SEND MESSAGE
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
