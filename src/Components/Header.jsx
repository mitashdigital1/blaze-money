import React, { useState } from 'react'
import '../Css/Header.css'
import Hero from './Hero_Section'
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
            <a href="#">
              <span>BLAZE</span>
            </a>
          </div>
          <div className={mobileItem ? 'mobile-item mobile-items' : ' nav-center-item'}>
            <ul className=' dropdown mobile-items' >
              <li class="dropbtn"><a href="#">Payments</a></li>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <li><a href="#">Business</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
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
