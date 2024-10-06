// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// import "./Imageslider";

// import { Pagination } from "swiper/modules";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper mt-10"
//       >
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?t=st=1726034740~exp=1726035340~hmac=e3cd6d3a4597a60f0ac3e61282d67e7da5985b53eebcbe8f9cfc76bad99ce8f2&w=826"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?t=st=1726034740~exp=1726035340~hmac=3fd7efe79cf69ca4ac87bb98b44def5c35e48688de7741dd00f0d4957db661eb"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?t=st=1726034740~exp=1726035340~hmac=73e9f0039212bfb2d0df7fd24f7c1c96c2bccaf952ebcc3f952ebf8b45307998"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img
//             src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }














// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true} // Enable looping
//         autoplay={{
//           delay: 2500, // Time delay for autoplay
//           disableOnInteraction: false, // Autoplay even after user interaction
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]} // Add Autoplay module
//         className="mySwiper mt-10"
//       >
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?t=st=1726034740~exp=1726035340~hmac=e3cd6d3a4597a60f0ac3e61282d67e7da5985b53eebcbe8f9cfc76bad99ce8f2&w=826"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?t=st=1726034740~exp=1726035340~hmac=3fd7efe79cf69ca4ac87bb98b44def5c35e48688de7741dd00f0d4957db661eb"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?t=st=1726034740~exp=1726035340~hmac=73e9f0039212bfb2d0df7fd24f7c1c96c2bccaf952ebcc3f952ebf8b45307998"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//             alt=""
//           />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }










































import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import './Imageslider.css';
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, 
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, 
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img
          src="https://img.freepik.com/free-photo/majestic-mountain-range-tranquil-waterfall-drop-beauty-generated-by-ai_188544-28214.jpg?ga=GA1.1.2000051094.1716005427"
          
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794690.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794690.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"

         
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794729.jpg?ga=GA1.1.2000051094.1716005427"
         
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          src="https://img.freepik.com/free-photo/view-natural-waterfall-landscape_23-2150763584.jpg?ga=GA1.1.2000051094.1716005427"
            
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"

           
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


















