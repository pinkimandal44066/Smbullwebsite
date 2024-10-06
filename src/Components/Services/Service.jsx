// import React, { useEffect, useState } from "react";
// import blog from '../../public/Images/blog-4.jpg';
// import ImageSlider from "./Imageslider";
// import service from '../../public/Images/service.jpg';
// const services = [
//   {
//     title: "AI & Machine Learning",
//     description: "Intelligent systems for automation and data insights.",
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protect your digital assets with advanced security solutions.",
//   },
//   {
//     title: "DevOps & Automation",
//     description:
//       "Streamline processes with automation and continuous delivery.",
//   },
//   {
//     title: "IT Consulting",
//     description: "Expert advice for IT strategies and implementation.",
//   },
//   {
//     title: "Data Analytics",
//     description: "Unlock the power of data with custom analytics solutions.",
//   },
//   {
//     title: "UI/UX Design",
//     description: "User-centered design for superior user experience.",
//   },

//   {
//     title: "Web Development",
//     description: "Custom web solutions for modern businesses.",
//   },
//   {
//     title: "Mobile App Development",
//     description: "Native and cross-platform apps tailored to your needs.",
//   },
//   {
//     title: "Cloud Solutions",
//     description: "Scalable cloud infrastructure to support your operations.",
//   },
// ];

// const AnimatedTextOnScroll = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollTimeout, setScrollTimeout] = useState(null);

//   const handleScroll = () => {
//     if (scrollTimeout) {
//       clearTimeout(scrollTimeout);
//     }

//     setIsVisible(true);

//     const timeout = setTimeout(() => {
//       setIsVisible(false);
//     }, 1000);

//     setScrollTimeout(timeout);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//     };
//   }, [scrollTimeout]);

//   return (
//     <>
//       {/* <div
//         className="relative h-64 bg-cover bg-center "
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbXB1dGVyfGVufDB8fHx8MTYxMzg0MTg3Mg&ixlib=rb-1.2.1&q=80&w=1080')",
//         }} 
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative flex flex-col items-center justify-center h-full text-white p-6  ">
//           <h1 className="lg:text-5xl md: text-4xl text-xl font-bold mb-4  mt-10">
//             Elevate Your Financial Future
//           </h1>
//           <p className="text-lg mb-6 text-center">
//             Discover tailored solutions for your accounting needs. Partner with
//             us today!
//           </p>
//         </div>
//       </div> */}


// {/* <div
//       className="relative h-80 bg-contain bg-center" 
//       style={{
//         backgroundImage: `url(${service})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative flex flex-col items-center justify-center h-full text-white p-6">
//         <h1 className="lg:text-5xl md:text-4xl text-xl font-bold mb-4 mt-10">
//           Elevate Your Financial Future
//         </h1>
//         <p className="text-lg mb-6 text-center">
//           Discover tailored solutions for your accounting needs. Partner with
//           us today!
//         </p>
//       </div>
//     </div> */}
  



// <div className="relative h-[400px]"> 
//       <div
//         className="bg-cover bg-center h-full"
//         style={{
//           backgroundImage: `url(${blog})`, 
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         <div className="relative max-w-7xl mx-auto flex items-center justify-center h-full px-5 md:px-10 lg:px-20 text-center text-white">
//           <h1
//             data-aos="fade-up"
//             className="text-4xl
//              md:text-5xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent
//               bg-gradient-to-r from-green-500 to-blue-500 "
//           >
    
//           Elevate Your Financial Future
//           <p className="text-lg  text-white mt-4">
//           Discover tailored solutions for your accounting needs. Partner with
//           us today!
//         </p>
//           </h1>
       
//         </div>
//       </div>
//     </div>
//       <ImageSlider />

//       <section id="services" className="bg-gray-50 mt-10 mb-10 py-8">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Our Services
//           </h2>
//           <div className="text-center">
//             <p
//               className="text-gray-700 text-lg max-w-2xl mx-auto"
//               data-aos="zoom-in"
//             >
//               We offer a range of services designed to help your business thrive
//               in the modern digital landscape. From custom software development
//               and cloud computing to mobile app development and cybersecurity
//               solutions, our team provides tailored solutions to meet your
//               unique needs. Explore our comprehensive suite of services,
//               including web design, IT consulting, data analytics, and digital
//               transformation, all aimed at driving growth and efficiency for
//               your organization.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="services" className="bg-gray-50 mt-10 mb-10 cursor-pointer">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="service-card bg-white rounded-lg overflow-hidden shadow-md"
//                 data-aos="flip-left"
//                 data-aos-delay={index * 300}
//                 data-aos-offset="100"
//               >
//                 <div className="p-6 bg-[#a6c465]">
//                   <h3 className="text-2xl font-semibold text-white">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-700">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AnimatedTextOnScroll;






























import React, { useEffect, useState } from "react";
import blog from '../../../public/Images/blog-4.jpg';
import ImageSlider from "../Services/Imageslider";
import { NavLink } from 'react-router-dom';
import service from '../../../public/Images/service.jpg';

const services = [
  {
    title: "Campaign Strategy",
    description: "Develop custom marketing strategies tailored to brand goals.",
    link: "/serviceone", // NavLink path for the first service
  },
  {
    title: "Influencer Outreach",
    description: "Manage communication and contracts with influencers.",
  },
  {
    title: "Content Creation",
    description: "Collaborate with influencers to produce engaging branded content.",
  },
  {
    title: "Campaign Management",
    description: "Oversee the campaign from planning to execution.",
  },
  {
    title: "Cross-Platform Promotion",
    description: "Promote content across multiple social media platforms.",
  },
  {
    title: "Performance Tracking",
    description: "Monitor real-time metrics and campaign performance.",
  },
  {
    title: "Audience Targeting",
    description: "Reach the right audience using influencer demographic data.",
  },
  {
    title: "Compliance and Legal Support",
    description: "Ensure all legal and regulatory requirements are met.",
  },
  {
    title: "Relationship Management",
    description: "Build and manage long-term influencer partnerships.",
  },
];

const AnimatedTextOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setScrollTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${blog})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto flex items-center justify-center h-full px-5 md:px-10 lg:px-20 text-center text-white">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
            >
              Elevate Your Financial Future
              <p className="text-lg text-white mt-4">
                Discover tailored solutions for your accounting needs. Partner
                with us today!
              </p>
            </h1>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <ImageSlider />

      {/* Services Section */}
      <section id="services" className="bg-gray-50 mt-10 mb-10 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Our Services
          </h2>
          <div className="text-center">
            <p
              className="text-gray-700 text-lg max-w-2xl mx-auto"
              data-aos="zoom-in"
            >
            At SMBULL Influencer Marketing, we provide tailored services, including influencer partnerships, social media management, and content creation, designed to elevate your brand’s presence and foster meaningful audience connections.


            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="bg-gray-50 mt-10 mb-10 cursor-pointer">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-lg overflow-hidden shadow-md"
                data-aos="flip-left"
                data-aos-delay={index * 300}
                data-aos-offset="100"
              >
                <NavLink to={service.link || "#"}> {/* Conditional NavLink */}
                  <div className="p-6 bg-[#a6c465]">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedTextOnScroll;
