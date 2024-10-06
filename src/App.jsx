// import React from 'react'
// import Homeone from './Components/Homeone'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Homeone />
//       <Footer />
//     </div>
//   )
// }

// export default App






import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




import LayOut from "./Components/LayOut";
import Home from "./Components/Home";
import About from './Components/About/Aboutus';
// import Service from "./Componants/Service";
// import Product from "./Componants/Product";
// import Contact from "./Componants/Contact";
// import Faq from "./Componants/Faq";
// import Privacypolicy from "./Componants/Privacypolicy";
// import TermsOfService from "./Componants/Termsofservice";
// import Blog from "./Componants/Blog";
// import Careers from "./Componants/Careers";
// import Serviceone from "./Componants/Serviceone";
const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/service" element={<Service />} />
              <Route path="/Product" element={<Product />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/Privacypolicy" element={<Privacypolicy />} />
              <Route path="/Termsofservice" element={<TermsOfService />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/career" element={<Careers />} />
              <Route path="/serviceone" element={<Serviceone />} /> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
