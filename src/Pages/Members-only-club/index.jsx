import React from "react";
import Hero from "../../Components/CommonComponents/Hero/Home-hero/Hero";
import img from "../../assets/images/membersonly.png";
import Form from "../../Components/PageComponents/Members-only-club/Form/Form";
const MembersOnlyClub = () => {
  return (
    <div>
      <Hero img={img} />
      <Form />
    </div>
  );
};

export default MembersOnlyClub;
