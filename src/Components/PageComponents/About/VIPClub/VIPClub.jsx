import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/vipClub.png";
const btnStyle = {
  padding: "12px",
  border: "1px solid #fff",
  color: "#fff",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};
const VIPClub = () => {
  return (
    <div className="bg-blue py-5 position-relative">
      <img src={img} width="100%" alt="" />
      <Link to="/" style={btnStyle}>
        JOIN OUR VIP CLUB
      </Link>
    </div>
  );
};

export default VIPClub;
