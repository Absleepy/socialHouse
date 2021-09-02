import React from 'react'
import styles from './Footer.module.scss';
import {FooterInsta} from '../Icons/Icons';
const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <nav>
                <ul className={styles.footerLinks}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MEMBERS ONLY CLUB</a></li>
                    <li><a href="#">OPPORTUNITIES</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </nav>
            <div className="my-4 text-center">
                <span className={styles.greyText}>Follow us: <a href="#"><FooterInsta /></a></span>
            </div>
            <div className="my-4 d-flex align-items-center justify-content-center" id={styles.lastInfo}>
                <span className={`${styles.greyText} mx-3`}>© 2021 SOCIALS HOUSE LTD</span>
                <span className={`${styles.greyText} mx-3`}>INFO@SOCIALSHOUSE.COM</span>
                <a href="#" className={`${styles.greyText} mx-3`}>TERMS</a>
            </div>
        </footer>
    )
}

export default Footer
