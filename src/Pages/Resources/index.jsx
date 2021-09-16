import React from "react";
import Hero from "../../Components/CommonComponents/Hero/page-hero/Hero";
import heroImg from "../../assets/images/opportunities.png";
import MostRecent from "../../Components/PageComponents/Resources/MostRecent/MostRecent";
import img from "../../assets/images/MostRecent.png";
import Card from "../../Components/CommonComponents/Cards/card-with-bottom-info/Card/Card";
import image1 from "../../assets/images/card1.png";
import image2 from "../../assets/images/card2.png";
import image3 from "../../assets/images/card3.png";
import { Link } from "react-router-dom";
const randomMostRecent = [
  {
    img,
    lable: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    date: "SEPTEMBER 4, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum",
  },
  {
    img,
    lable: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    date: "SEPTEMBER 4, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum",
  },
  {
    img,
    lable: "RESOURCES",
    title: "VIP MEMBER HOTSPOT: ZACK SMITH",
    date: "SEPTEMBER 4, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget viverra elementum",
  },
];

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
];

const Resources = () => {
  return (
    <div className="bg-blue">
      <Hero img={heroImg} title="Resources" />
      <div className="container">
        <h5 className="text-white">Most Recent</h5>
        <div className="row py-4">
          {randomMostRecent.map((item) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3 ">
              <Link to="#" className="d-inline-block">
                <MostRecent
                  label={item.lable}
                  img={item.img}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            </div>
          ))}
        </div>
        <hr className="bg-white" />
        <div className="row py-4">
          {[...randomData, ...randomData, ...randomData].map((data) => (
            <div className="col-lg-4 my-3 col-md-4 col-sm-6 col-12">
              <Link to="#" className="d-inline-block">
                <Card data={data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
