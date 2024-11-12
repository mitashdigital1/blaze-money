import React, { useState } from 'react'
import '../Css/Header.css'
import Hero from './Hero_Section'
<<<<<<< HEAD
import Logo from  '../assets/blaze videos/logo.png'
=======
import Logo from  '../assets/Your paragraph text.png'
>>>>>>> 6809c92 (few more little changes)
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileItem, setMobileItem] = useState(false)
  const Clicked = () => {
    setMobileItem(!mobileItem)

  }

  return (
    <>
      <div className='nav'>
        <div className='navbar'>
          <div className="nav-left-logo">
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={mobileItem ? 'mobile-item mobile-items' : ' nav-center-item'}>
            <ul className=' dropdown mobile-items' >
              <li className="dropbtn"><Link to='/'>Payments</Link></li>
               
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/about">About</Link></li>
<<<<<<< HEAD
=======
              <li><Link to="/careers">Careers</Link></li>
>>>>>>> 6809c92 (few more little changes)
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>


          
          {/* nav mobile */}
          {/* <div className="nav-mobile">
            <ul className="mobile-items">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Business</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div> */}

          <div className="nav-right-item">
            <div className='figth-first-item'>
              <a href="#">En</a>
              <a href="#">Es</a>
            </div>
            <div className='btn'>
              <button>DOWNLOAD APP</button>
            </div>
            <i onClick={Clicked} id='hammenu' className="ri-menu-line"></i>
        {/* drop down */}
     
          </div>
        </div>
      </div>
      <div className={mobileItem ? 'hero-sec':''}>
         <Hero/>
      </div>
    </>
  )
}

export default Header
