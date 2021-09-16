import React from "react";
import styles from "./Hero.module.scss";
const Hero = ({ title, img }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-white text-center font-weight-700">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default Hero;
