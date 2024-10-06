import React from "react";
import Heropage from "../Components/Heropage/Heropage";
import Homeone from "./Homeone";
import Preloader from "./Preloader/Preloader";
const Home = () => {
  return (
    <div>
      <Heropage />
      <Preloader />

      <Homeone />
    </div>
  );
};

export default Home;
