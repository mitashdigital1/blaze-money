import React from 'react'
import '../Css/Footer.css'
import {IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
<<<<<<< HEAD
import LogoFoter from "../assets/blaze videos/logo.png"
=======
import LogoFoter from "../assets/Your paragraph text.png"
>>>>>>> 6809c92 (few more little changes)


const Footer = () => {
    return (
        <>
            <div className='main-footer'>
                <div className='footer'>
                    <div className="footer-left-logo">
                        <a href="#">
                           <img src={LogoFoter} alt="" />
                        </a>
                    </div>

                    <div className="footer-center-item">
                      <a href="#">Payments</a>
                      <a href="#">Business</a>
                      <a href="#">About</a>
                      <a href="#">Contact</a>
                    </div>

                    <div className="nav-right-item">

                        <div className='btn1'>
                            <button>DOWNLOAD APP</button>
                        </div>
                    </div>
                </div>


                <div className='footer-second'>
<<<<<<< HEAD
                    <a href="#">Terms of use Privacy</a>
=======
                    
>>>>>>> 6809c92 (few more little changes)
                    <div className='icons'>
                    <FaXTwitter />
                    <IoLogoInstagram />
                    <IoLogoLinkedin/>
                    </div>
                </div>

                <div className='footer-thred'>
                    <span>©2024 Blaze Payments Inc.</span>
<<<<<<< HEAD
                    <span className='span-two'>All rights reserved.</span>
=======
                    <span className='span-two'>Terms of use   Privacy policy</span>
                    
>>>>>>> 6809c92 (few more little changes)
                    <div className='footer-end'>
                    <span>We use cookies to optimise our services. Read our privacy policy.</span>
                    <button id='btn1'>DENY</button>
                    <button>ACCEPT</button>
                </div>
                </div>
               
            </div>
        </>
    )
}

export default Footer