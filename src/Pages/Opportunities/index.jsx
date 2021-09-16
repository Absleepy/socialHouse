import React from "react";
import Hero from "../../Components/CommonComponents/Hero/page-hero/Hero";
import Card from "../../Components/CommonComponents/Cards/card-with-bottom-info/Card/Card";
import image1 from "../../assets/images/card1.png";
import image2 from "../../assets/images/card2.png";
import image3 from "../../assets/images/card3.png";
import heroImg from "../../assets/images/opportunities.png";

import { Link } from "react-router-dom";
const randomData = [
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image1,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image2,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image3,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image2,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image2,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image3,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image1,
  },

  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image3,
  },
  {
    name: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum quis id enim sit et, pellentesque. Nunc.",
    img: image2,
  },
];
const Opportunities = () => {
  return (
    <div className="bg-blue">
      <Hero img={heroImg} title="The Opportunities" />
      <div className="container">
        <div className="row">
          {randomData.map((data, index) => (
            <div className="col-md-4 my-4 col-lg-4 col-sm-6 col-12">
              <Link to={`/opportunity/${index}`}>
                <Card data={data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
