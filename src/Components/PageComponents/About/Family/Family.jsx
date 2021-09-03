import React from "react";
import * as icons from "../../../CommonComponents/Icons/Icons";
import { Link } from "react-router-dom";
import styles from "./Family.module.scss";
const Family = () => {
  return (
    <div className={styles.container}>
      <h2 className="text-white py-3 text-center">Meet Our Family</h2>
      <div className="py-4 d-flex flex-wrap align-items-center justify-content-center">
        <Link className="mx-4 my-3">
          <icons.MicroSoft />
        </Link>
        <Link className="mx-4 my-3">
          <icons.Google />
        </Link>
        <Link className="mx-4 my-3">
          <icons.McDonald />
        </Link>
        <Link className="mx-4 my-3">
          <icons.Google />
        </Link>
        <Link className="mx-4 my-3">
          <icons.McDonald />
        </Link>
        <Link className="mx-4 my-3">
          <icons.MicroSoft />
        </Link>
      </div>
    </div>
  );
};

export default Family;
