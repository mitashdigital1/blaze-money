import React from 'react'
import '../Css/Hero.css'
<<<<<<< HEAD
=======
import Video  from '../assets/blaze videos/video.mp4'
 
 
>>>>>>> 6809c92 (few more little changes)

const Hero_Section = () => {
    return (
        <>
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
<<<<<<< HEAD
                        <span>Backed by <i>Y</i> Combinator logo</span>
=======
                        <span>Backed by <i>Y</i> Combinator</span>
>>>>>>> 6809c92 (few more little changes)
                        <h1>PAY ANYONE <br /> <i> ANYWHERE </i> INSTANTLY</h1>
                        <p>Blaze is the world's first payments app for modern nomads. Pay anyone for nearly free, across multiple currencies. It's fast, fun and easy.</p>
                        <div className='btn-1'>
                            <button>DOWNLOAD APP</button>
                        </div>
                    </div>

                    <div className="hero-right-item">
<<<<<<< HEAD
                        <video  autoPlay muted loop src='https://user2.kustom.io/main-banner.mp4'>
=======
                        <video  autoPlay muted loop src={Video}>
>>>>>>> 6809c92 (few more little changes)
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_Section