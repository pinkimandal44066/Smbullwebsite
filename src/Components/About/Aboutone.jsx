// import React from 'react';
// import about from '../../public/Images/about.png';
// import { ReactTyped } from 'react-typed';
// import { NavLink } from 'react-router-dom';
// const Home = () => {
//   return (
//     <>
//    <div className=''>
//    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 '>
//         <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
//           <div className='md:w-1/2 mt-0 md:mt-24 space-y-4 order-2 md:order-1'>
//             <span className='text-lg md:text-xl'>Welcome To My Feed</span>
//             <div className='flex flex-col md:flex-row md:space-x-2 text-2xl md:text-3xl  '>
//               <h1 className='mb-5 md:mb-0'>SMBULL</h1>
//               <ReactTyped
//                 className='text-[#a6c465] font-bold'
//                 strings={["Mobile App Development", "UI/UX Design", "Web Development"]}
//                 typeSpeed={40}
//                 backSpeed={50}
//                 loop={true}
//               />

//             </div>
//             <p className='text-base md:text-lg mt-4 md:mt-6'>
//           At SMBULL IT Company, we are more than just a technology firm; we are your dedicated partner in navigating the digital landscape. Founded with a vision to revolutionize the way businesses leverage technology, SMBULL IT Company stands at the forefront of innovation, delivering tailored software solutions that drive success and foster growth.
              
//             </p>
//             <div className="flex justify-center md:justify-start   ">
//         <NavLink to="/about" className="about-us-link inline-block px-4 py-2 text-base md:text-lg font-bold
//          text-white bg-[#a6c465] rounded-md text-center no-underline transition-colors duration-300 ease-in-out hover:bg-black">Read More</NavLink>
//         </div>
        
//           </div>
          
//           <div className="flex flex-col items-center md:items-start md:w-1/2  lg:mt-5 md:mt-36
//            shadow-lg transition-transform transform ">
//             <img 
//               src={about} 
//               alt="About Us Image" 
//               className="about-img max-w-full rounded-lg mb-5 md:mb-0 transition-transform duration-300 ease-in-out" 
//             />
//           </div>
//         </div>
//       </div>
    
//    </div>
//     </>
//   );
// }

// export default Home;











// import React from 'react';
// import about from '../../public/Images/about.png';
// import { ReactTyped } from 'react-typed';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//   return (
//     <>
//     <div className='bg-gray-100 shadow-lg transition-transform transform lg:mx-20 mx-5 mt-10 rounded-xl'>
//     <div className='w-full  py-10 '>
//       {/* <div className='bg-gray-50 '> */}
//       <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 '>
//           <div className='flex flex-col md:flex-row items-center gap-8 '>
//             {/* Left Section */}
//             <div className='w-full md:w-1/2 order-2 md:order-1 space-y-4 '>
//               {/* <span className='text-center md:text-left text-lg md:text-xl font-semibold'>Welcome To My Feed</span> */}
//               <div className='flex flex-col md:flex-row justify-center md:justify-start md:space-x-2 text-2xl md:text-3xl text-center md:text-left'>
//                 <h1 className='mb-4 md:mb-0'>SMBULL</h1>
//                 <ReactTyped
//                   className='text-[#a6c465] font-bold'
//                   strings={["Mobile App Development", "UI/UX Design", "Web Development"]}
//                   typeSpeed={40}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </div>
//               <p className='text-center md:text-left text-base md:text-lg mt-4'>
//                 At SMBULL IT Company, we are more than just a technology firm; we are your dedicated partner in navigating the digital landscape. Founded with a vision to revolutionize the way businesses leverage technology, SMBULL IT Company stands at the forefront of innovation, delivering tailored software solutions that drive success and foster growth.
//               </p>
//               <div className='flex justify-center md:justify-start'>
//                 <NavLink to="/about" className='px-4 py-2 text-base md:text-lg font-bold text-white bg-[#a6c465] rounded-md no-underline transition-colors duration-300 hover:bg-black'>
//                   Read More
//                 </NavLink>
//               </div>
//             </div>

//             {/* Right Section (Image) */}
//             <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end'>
//               <img 
//                 src={about} 
//                 alt="About Us Image" 
//                 className='max-w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
//               />
//             </div>
//           </div>
//         {/* </div> */}
//       </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Home;











import React from 'react';
import about from '../../../public/Images/about.png';
import { ReactTyped } from 'react-typed';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='bg-gray-100 shadow-lg transition-transform transform lg:mx-10 mx-5 mt-10 rounded-xl'>
    <div className='w-full py-10'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
           
            <div className='w-full lg:w-1/2 order-1 lg:order-1 flex justify-center lg:justify-start'>
              <img 
                src={about} 
                alt="About Us Image" 
                className='max-w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
              />
            </div>

           
            <div className='w-full lg:w-1/2 order-2 lg:order-2 space-y-4'>
              <div className='flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-2 text-2xl lg:text-3xl text-center lg:text-left'>
                <h1 className='mb-4 lg:mb-0'>SMBULL</h1>
                <ReactTyped
                  className='text-[#a6c465] font-bold'
                  strings={["Mobile App Development", "UI/UX Design", "Web Development"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <p className='text-center lg:text-left text-base lg:text-lg mt-4'>
                {/* At SMBULL IT Company, we are more than just a technology firm; we are your dedicated partner in navigating the digital landscape. Founded with a vision to revolutionize the way businesses leverage technology, SMBULL IT Company stands at the forefront of innovation, delivering tailored software solutions that drive success and foster growth. */}
                Welcome to SMBULL, where we bridge the gap between brands and influencers to create impactful partnerships that resonate with audiences around the globe.

In a world where authenticity matters, we understand the power of influence. Our mission is to connect brands with the right influencers who can bring their vision to life. With a keen understanding of market trends and consumer behavior, we tailor strategies that not only enhance brand visibility but also foster genuine connections.
              </p>
              <div className='flex justify-center lg:justify-start'>
                <NavLink to="/about" className='px-4 py-2 text-base lg:text-lg font-bold text-white bg-[#a6c465] rounded-md no-underline transition-colors duration-300 hover:bg-black'>
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Home;
