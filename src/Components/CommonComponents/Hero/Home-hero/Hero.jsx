import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ img }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.text}>
        <h1 className="text-white text-center">
          {" "}
          The ultimate members only club for content creators - Unlock your full
          potential!
        </h1>
        <h6 className="mt-3 greyText text-center">
          Unlock Your Full Potential.
        </h6>
        <button className="bg-transparent text-white border mt-4 d-block mx-auto py-2 px-4 border-white">
          PLAY VIDEO
        </button>
      </div>
      <div className="box-shadow"></div>
    </div>
  );
};

export default Hero;
