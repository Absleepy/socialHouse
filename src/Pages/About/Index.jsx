import React from "react";
import Family from "../../Components/PageComponents/About/Family/Family";
import Hero from "../../Components/PageComponents/About/Hero/Hero";
import Mission from "../../Components/PageComponents/About/Mission/Mission";
import VIPClub from "../../Components/PageComponents/About/VIPClub/VIPClub";

const About = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Mission />
      <Family />
      <VIPClub />
    </div>
  );
};

export default About;
