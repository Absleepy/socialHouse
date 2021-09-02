import React from 'react'
import styles from './Form.module.scss';
const Form = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h3 className="text-white text-center">
            There is currently a waiting list for Socials House membership.
            </h3>
            <h5 className="text-center">
            To join the waiting list, please leave your details below.
            </h5>
            <form>
                <div className="d-flex align-items-center my-4">
                <div className={styles.inpContainer}>
                <input type="text" name="firstName" placeholder="* First Name" id="firstName" />
                </div>
                <div className={styles.inpContainer}>
                <input type="text" name="lastName" id="lastName" placeholder="* Last Name" />
                </div>
                </div>
                <div className="d-flex align-items-center my-4">
                <div className={styles.inpContainer}>
                <input type="email" name="email" id="email" placeholder="* Email" />
                </div>
                <div className={styles.inpContainer}>
                <input type="number" name="phoneNumber" id="phoneNumber" placeholder="* Phone Number"/>
                </div>
                </div>
                <div className="d-flex align-items-center my-4">
                <div className={styles.inpContainer}>
                <input type="text" name="instagramHandle" id="instagramHandle" placeholder="* Instagram Handle"/>
                </div>
                <div className={styles.inpContainer}>
                <input type="text" name="tiktakHandle" id="tiktakHandle" placeholder="* Tiktak Handle"/>
                </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input  type="checkbox" className={styles.check} name="  " id="check" />
                    <label htmlFor="check" className="c-pointer font-size-1rem mb-0 text-white">I, hereby, acknowledged and agreed to the Terms & Conditions applied!</label>
                </div>
                <button className="bg-black border-0 text-white py-2 mt-4 px-5">
                    Sign me up
                </button>
            </form>
        <div className="text-center">
            <p className={styles.greyText}>
                Already a member? <a href="#" className="text-white">Sign In</a>
            </p>
        </div>
            </div>
        </div>
    )
}

export default Form
