import React from "react";
import Hero from "../../Components/CommonComponents/Hero/Home-hero/Hero";
import Form from "../../Components/PageComponents/Home/Form/Form";
import Header from "../../Components/CommonComponents/Header/Header";
import img from "../../assets/images/hero.jpg";
const Home = () => {
  return (
    <>
      <Hero img={img} /> <Form />
    </>
  );
};
export default Home;
