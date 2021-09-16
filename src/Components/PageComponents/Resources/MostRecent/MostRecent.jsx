import React from "react";
import styles from "./MostRecent.module.scss";
const MostRecent = ({ img, label, title, description, date }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="ms-3">
        <strong className="greyText my-3 d-inline-block">
          {label.toUpperCase()}
        </strong>
        <h5 className="text-white">{title.toUpperCase()}</h5>
        <span className="greyText">{date}</span>
        <p className="mt-4 greyText">{description?.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MostRecent;
