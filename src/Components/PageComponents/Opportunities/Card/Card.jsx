import React from "react";
import styles from "./Card.module.scss";

const Card = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        img: data.img,
      }}
      className={styles.card}
    >
      <div className={styles.footer}>
        <p>{data.name}</p>
        <h4>{data.title}</h4>
        <h6>{data.description}</h6>
      </div>
    </div>
  );
};

export default Card;
