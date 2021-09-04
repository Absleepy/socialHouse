import React from "react";
import { Link } from "react-router-dom";
import * as icons from "../../../CommonComponents/Icons/Icons";
import styles from "./Form.module.scss";
const Form = () => {
  return (
    <div className="bg-blue">
      <div className={styles.boxes}>
        <a href="tel: 120394" className={`${styles.box} bg-blue`}>
          <icons.Phone />
          <span className={styles.phoneNumber}>+1 0987654321</span>
        </a>
        <a
          href="mailto:max.info@socialshouse.com"
          className={`${styles.box} bg-blue`}
        >
          <icons.Envelope />
          <span className={styles.envelopeId}>info@socialshouse.com</span>
        </a>
      </div>

      <form>
        <div className="d-flex align-items-center my-4">
          <div className={styles.inpContainer}>
            <input
              type="text"
              autoComplete="on"
              className="auto-fill-bg"
              name="Full Name"
              placeholder="* First Name"
              id="firstName"
            />
          </div>
          <div className={styles.inpContainer}>
            <input
              autoComplete="on"
              type="email"
              name="email"
              className="auto-fill-bg"
              id="email"
              placeholder="* Email"
            />
          </div>
        </div>
        <div className="d-flex align-items-center my-4">
          <div className={styles.inpContainer}>
            <input
              type="number"
              autoComplete="on"
              name="phoneNumber"
              className="auto-fill-bg input-type-number"
              id="phoneNumber"
              placeholder="* Phone Number"
            />
          </div>
          <div className={styles.inpContainer}>
            <input
              type="text"
              name="subject"
              className="auto-fill-bg"
              id="subject"
              autoComplete="on"
              placeholder="* Subject"
            />
          </div>
        </div>
        <div className="d-flex align-items-center my-4">
          <div className={styles.inpContainer}>
            <textarea
              type="text"
              name="Message"
              id="Message"
              placeholder="* Message"
              cols="30"
              rows="3"
            />
          </div>
        </div>

        <button className="bg-black border-0 text-white py-2 mt-4 px-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
