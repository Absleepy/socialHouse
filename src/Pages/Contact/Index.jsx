import React from "react";
import Hero from "../../Components/CommonComponents/Hero/page-hero/Hero";
import Form from "../../Components/PageComponents/ContactUs/Form/Form";
import img from "../../assets/images/contact.png";
const Contact = () => {
  return (
    <div className="wrapper">
      <Hero img={img} title="Contact Us" />
      <Form />
    </div>
  );
};

export default Contact;
