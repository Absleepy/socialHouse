import React from 'react'
import * as icons from '../Icons/Icons';
import mainLogo from '.././../../assets/images/logo.svg';
import styles from './Header.module.scss'; 
const Hamburger = ({open}) => {
    return(
        
        open ? <icons.Close /> : <icons.Hamburger />
        
    )
}
const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleHamburger = () =>{
        setOpen(!open)
    }
    return (
        <header className={styles.header} id="header">
            <div className="d-flex align-items-center position-fixed top-0 w-100 py-3">
          <div className={styles.blurOverley}></div>
            <div className={styles.hamburger}>
            <button className={styles.hamburgerBtn} onClick={handleHamburger}>
            <Hamburger open={open}/>
            </button>
            </div>
             <strong id="logo" className={styles.logo}>
                <a href="#">
                   <img src={mainLogo} alt="" />
                <span className={styles.house}>HOUSE</span>
                </a>
            </strong>
            {
            open && <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}><a href="#">ABOUT US</a></li>
                <li className={styles.navLink}><a href="#">RESOURSES</a></li>
                <li className={styles.navLink}><a href="#">OPPORTUNITIES</a></li>
                <li className={styles.navLink}><a href="#">SOCIAL CALENDAR</a></li>
                <li className={styles.navLink}><a href="#">MEMBERS ONLY CLUB</a></li>
                <li className={styles.navLink}><a href="#">VIP CLUB</a></li>
                <li className={styles.navLink}><a href="#">VIP CLUB PRICING</a></li>
            </ul>
        </nav>
        }
            </div>


        <div className={styles.text}>
       <h1 className="text-white text-center"> The ultimate members only club for content creators - Unlock your full potential!</h1>
        <button className="bg-transparent text-white border mt-4 d-block mx-auto py-2 px-4 border-white">PLAY VIDEO</button>
        </div>
        <div className="box-shadow"></div>
        </header>
    )
}

export default Header
