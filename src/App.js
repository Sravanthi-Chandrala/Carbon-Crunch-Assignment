import React from "react";
import Header from "./Components/Header";
import FeaturesSection from "./Components/FeaturesSection";
import StatsSection from "./Components/StatsSection";
// import ParallaxSlider from "./Components/ParallaxSlider";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <FeaturesSection />
      {/* <ParallaxSlider /> */}
      <StatsSection />
    </div>
  );
};

export default App;
