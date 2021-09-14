import React from "react";
import * as icons from "../Icons/Icons";
import mainLogo from ".././../../assets/images/logo.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Hamburger = ({ open }) => {
  return open ? <icons.Close /> : <icons.Hamburger />;
};
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleHamburger = () => {
    setOpen(!open);
  };
  return (
    <header
      id={styles.header}
      className="d-flex align-items-center position-fixed top-0 w-100 py-md-2 py-lg-3"
    >
      <div className={styles.blurOverley}></div>
      <div className={styles.hamburger}>
        <button className={styles.hamburgerBtn} onClick={handleHamburger}>
          <Hamburger open={open} />
        </button>
      </div>
      <strong id="logo" className={styles.logo}>
        <Link to="/">
          <img src={mainLogo} alt="" />
          <span className={styles.house}>HOUSE</span>
        </Link>
      </strong>
      {open && (
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/">MEMBERS ONLY CLUB</Link>
            </li>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/opportunities">OPPORTUNITIES</Link>
            </li>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li onClick={() => setOpen(false)} className={styles.navLink}>
              <Link to="/">LOGIN</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
