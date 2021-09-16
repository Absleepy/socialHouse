import React from "react";
import Family from "../../Components/PageComponents/About/Family/Family";
import Hero from "../../Components/CommonComponents/Hero/page-hero/Hero";
import Mission from "../../Components/PageComponents/About/Mission/Mission";
import VIPClub from "../../Components/PageComponents/About/VIPClub/VIPClub";
import img from "../../assets/images/about.png";
const About = () => {
  return (
    <div className="wrapper">
      <Hero img={img} title="ABOUT US" />
      <Mission />
      <Family />
      <VIPClub />
    </div>
  );
};

export default About;
