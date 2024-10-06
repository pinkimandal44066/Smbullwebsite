import React, { useState } from "react";

import "./Career.css";

const CareerFair = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };
  return (
    <>
      {/* <div className="relative bg-purple-700 text-white font-sans mb-40 mt-52">

      <div className="relative">
      
        <div className="bg-purple-600 w-full lg:w-1/2 py-10 px-8 lg:px-16 lg:py-20">
          <h1 className="text-5xl font-bold mb-4">CAREER FAIR</h1>
          <p className="text-lg mb-8">
            Don’t miss your chance to connect with top employers and explore your career options at our upcoming career fair.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <span>Date: 05.05.2025</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-clock"></i>
              </span>
              <span>Time: 9:30 AM</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Location: 123 Anywhere St, Any City, ST 12345</span>
            </div>
          </div>
        </div>

      
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-purple-800 py-10 px-6 lg:py-20 lg:px-12 flex flex-wrap items-center justify-center">
          <div className="flex flex-wrap gap-4">
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/12454/12454021.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" 
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/12773/12773163.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" 
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/11803/11803105.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" 
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-white hexagon flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/happy-young-business-colleagues-using-laptop-computer-talking-with-each-other_171337-761.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" // Replace with actual image
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>

    



    
    </div> */}

      {/* DONE */}

      <div className="bg-[#8E9A4A] text-white font-sans ">
        <div className="relative flex flex-col lg:flex-row">
          <div
            className="
    
    bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */

    
    w-full lg:w-1/2 py-10 px-8 lg:px-16 lg:py-20"
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 mt-5">
              CAREER FAIR
            </h1>
            <p className="text-base lg:text-lg mb-8">
              Don’t miss your chance to connect with top employers and explore
              your career options at our upcoming career fair.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <span>Date: 05.05.2025</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-clock"></i>
                </span>
                <span>Time: 9:30 AM</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Location: 123 Anywhere St, Any City, ST 12345</span>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */
py-10 px-6 lg:py-20 lg:px-12 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
        <img
        
          src="https://cdn-icons-png.freepik.com/256/12454/12454021.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Career Fair"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://cdn-icons-png.freepik.com/256/12773/12773163.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Career Fair"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://cdn-icons-png.freepik.com/256/11803/11803105.png?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Career Fair"
          className="w-full h-full object-cover"
        />
      </div> */}
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/happy-young-business-colleagues-using-laptop-computer-talking-with-each-other_171337-761.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-r from-green-400 to-blue-500 mb-10 overflow-hidden">
        {/* Left Side: Image Area */}
        <div className="flex items-end justify-center w-full lg:w-1/2 relative">
          <div className="h-[400px] w-[400px] relative">
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "0", left: "0" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "100px", left: "100px" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "200px", left: "200px" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "300px", left: "300px" }}
            ></div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        {/* <div className="w-full lg:w-1/2 p-8 text-white shadow-lg rounded-lg bg-[#a6c40] flex flex-col justify-center">
    <h1 className="text-4xl font-bold mb-4">SMBULL IT Company</h1>
    <p className="text-lg mb-6">
      SMBULL IT Company is a leading provider of cutting-edge IT services. We specialize in web development, cloud computing, and
      cybersecurity. Our innovative solutions help businesses scale and secure their operations efficiently.
    </p>
    <ul className="list-disc ml-6">
      <li>Web Development</li>
      <li>Cloud Computing</li>
      <li>Cybersecurity</li>
      <li>Big Data Analytics</li>
      <li>Artificial Intelligence</li>
    </ul>
  </div> */}

        <div className="w-full lg:w-1/2 p-8 text-white shadow-lg rounded-lg bg-[#a6c40] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            SMBULL Influencer Marketing
          </h1>
          <p className="text-lg mb-6">
            SMBULL Influencer Marketing is dedicated to helping brands connect
            with their target audiences through strategic partnerships with
            influential figures. We specialize in crafting compelling campaigns
            that enhance brand visibility and drive engagement.
          </p>
          <ul className="list-disc ml-6">
            <li>Campaign Strategy Development</li>
            <li>Influencer Identification</li>
            <li>Content Creation and Distribution</li>
            <li>Performance Tracking and Analytics</li>
            <li>Brand Partnerships</li>
          </ul>
        </div>
      </div>

      <div
        className=" bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */
 mb-10"
      >
        <div className="flex items-center justify-center  ">
          <div
            className="w-full max-w-md p-4 text-gray-800 mt-10 shadow-lg rounded-lg bg-white flex flex-col
              mb-10"
          >
            <h1 className="text-2xl font-bold mb-3 text-center">
              Join Our Influencer Team
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="coverLetter">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#a6c465] text-white  p-2 rounded-lg hover:bg-black transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BG-[#a6c465] */}

      {/* <div className="flex flex-wrap justify-between  bg-[#a6c465] mb-20 text-black">

<div className="flex items-end justify-center w-1/2 h-full text-black">
  <div className="relative h-[400px] w-[400px]">

    <div className="absolute w-[100px] h-[100px] bg-black" style={{ bottom: '0', left: '0' }}></div>
    <div className="absolute w-[100px] h-[100px] bg-black" style={{ bottom: '100px', left: '100px' }}></div>
    <div className="absolute w-[100px] h-[100px] bg-black" style={{ bottom: '200px', left: '200px' }}></div>
    <div className="absolute w-[100px] h-[100px] bg-black" style={{ bottom: '300px', left: '300px' }}></div>


    <div className="absolute animate-walk" style={{ bottom: '300px', left: '300px' }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-walk">
        <path d="M19 14l-6 6-1.5-4.5L6 11H3v6h2.5M3 3l2.5 2.5"></path>
        <circle cx="12" cy="7" r="3"></circle>
      </svg>
    </div>

    
  </div>
</div>


<div className="w-1/2 p-8  text-black shadow-lg rounded-lg bg-[#a6c40] ">
  <h1 className="text-4xl font-bold mb-4">SMBULL IT Company</h1>
  <p className="text-lg mb-6">
    SMBULL IT Company is a leading provider of cutting-edge IT services. We specialize in web development, cloud computing, and
    cybersecurity. Our innovative solutions help businesses scale and secure their operations efficiently.
  </p>
  <ul className="list-disc ml-6">
    <li>Web Development</li>
    <li>Cloud Computing</li>
    <li>Cybersecurity</li>
    <li>Big Data Analytics</li>
    <li>Artificial Intelligence</li>
  </ul>
</div>
</div> */}
    </>
  );
};

export default CareerFair;





























// 2nd design


// import React from "react";
// import { Helmet } from "react-helmet";

// const CareerPage = () => {
//   return (
//     <div className="bg-gray-100 p-6">
//       {/* SEO Optimization */}
//       <Helmet>
//         <title>Careers at Influencer Marketing Company</title>
//         <meta name="description" content="Join our influencer marketing team and work with top brands and influencers. Explore job openings, company culture, and career growth opportunities." />
//       </Helmet>

//       {/* Company Culture and Values */}
//       <section className="text-center py-12">
//         <h1 className="text-4xl font-bold text-gray-800">Join Our Influencer Marketing Team</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           We believe in creativity, innovation, and bringing influencers and brands together for impactful campaigns.
//         </p>
//       </section>

//       {/* Job Listings */}
//       <section className="my-12">
//         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Current Job Openings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Job Card 1 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-800">Influencer Manager</h3>
//             <p className="mt-2 text-gray-600">Location: Remote</p>
//             <p className="mt-4 text-gray-600">We’re looking for a dynamic influencer manager to join our growing team.</p>
//             <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Apply Now</button>
//           </div>

//           {/* Job Card 2 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-800">Social Media Strategist</h3>
//             <p className="mt-2 text-gray-600">Location: New York, USA</p>
//             <p className="mt-4 text-gray-600">Join our marketing team to plan, create, and execute social media campaigns.</p>
//             <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Apply Now</button>
//           </div>

//           {/* Job Card 3 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-800">Campaign Manager</h3>
//             <p className="mt-2 text-gray-600">Location: Remote</p>
//             <p className="mt-4 text-gray-600">Oversee the end-to-end execution of influencer campaigns for leading brands.</p>
//             <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Apply Now</button>
//           </div>
//         </div>
//       </section>

//       {/* Company Values & Culture Section */}
//       <section className="bg-white py-12 px-6 rounded-lg shadow-lg my-12">
//         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Why Work With Us?</h2>
//         <ul className="text-gray-600 space-y-4 text-center">
//           <li>🌟 Work with top influencers and brands globally</li>
//           <li>🚀 Flexible working hours with remote opportunities</li>
//           <li>🌍 A diverse and inclusive work environment</li>
//           <li>📈 Career growth and development programs</li>
//         </ul>
//       </section>

//       {/* Social Proof (Testimonials Section) */}
//       <section className="py-12 bg-gray-50">
//         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Team Says</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Testimonial 1 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <p className="text-gray-600">
//               "Working at this company has been an incredible experience. I get to collaborate with some of the biggest influencers in the industry!"
//             </p>
//             <h4 className="mt-4 font-bold text-gray-800">- Sarah, Influencer Manager</h4>
//           </div>

//           {/* Testimonial 2 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <p className="text-gray-600">
//               "The flexibility and career growth opportunities are fantastic. It's great to be part of such an innovative team."
//             </p>
//             <h4 className="mt-4 font-bold text-gray-800">- John, Campaign Manager</h4>
//           </div>

//           {/* Testimonial 3 */}
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <p className="text-gray-600">
//               "I love the creative freedom and the chance to work with some of the most forward-thinking brands in the world."
//             </p>
//             <h4 className="mt-4 font-bold text-gray-800">- Emily, Social Media Strategist</h4>
//           </div>
//         </div>
//       </section>

//       {/* Search and Filter */}
//       <section className="py-12">
//         <div className="max-w-xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search for a job..."
//             className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none"
//           />
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-gray-200 py-12 px-6">
//         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-xl font-bold text-gray-800">What is the hiring process?</h3>
//             <p className="mt-2 text-gray-600">Our process includes an initial screening, followed by an interview and practical task evaluation.</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-xl font-bold text-gray-800">Do you offer remote positions?</h3>
//             <p className="mt-2 text-gray-600">Yes, most of our positions offer remote work flexibility.</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="text-center py-12">
//         <h2 className="text-3xl font-semibold text-gray-800">Ready to Join Us?</h2>
//         <p className="mt-4 text-lg text-gray-600">Apply now and be a part of an exciting journey in influencer marketing!</p>
//         <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500">
//           Explore Openings
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CareerPage;
