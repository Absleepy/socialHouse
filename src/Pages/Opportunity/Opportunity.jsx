import React from "react";
import Hero from "../../Components/PageComponents/Opportunities/Hero/Hero";
import Card from "../../Components/PageComponents/Opportunities/Card/Card";
import image1 from "../../assets/images/card1.png";
import image2 from "../../assets/images/card2.png";
import image3 from "../../assets/images/card3.png";
import { Link } from "react-router-dom";
import * as icons from "../../Components/CommonComponents/Icons/Icons";
import OpportunityDetails from "../../Components/PageComponents/Opportunity/OpportunityDetails/OpportunityDetails";
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
const Opportunity = () => {
  return (
    <div className="bg-blue">
      <Hero />
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span>
                <icons.ArrowLeft />
              </span>
              <span className="ms-2 text-white">Previous</span>
            </div>
            <div>
              <span className="me-2 text-white">Previous</span>
              <span>
                <icons.ArrowRight />
              </span>
            </div>
          </div>
          <div className="col-md-12">
            <OpportunityDetails />
          </div>
        </div>
        <div className="row">
          <div className="my-3">
            <h3 className="text-white text-center">You Might Also Like</h3>
          </div>
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

export default Opportunity;
