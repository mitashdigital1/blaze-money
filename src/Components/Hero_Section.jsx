import React from 'react'
import '../Css/Hero.css'

const Hero_Section = () => {
    return (
        <>
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
                        <span>Backed by <i>Y</i> Combinator logo</span>
                        <h1>PAY ANYONE <br /> <i> ANYWHERE </i> INSTANTLY</h1>
                        <p>Blaze is the world's first payments app for modern nomads. Pay anyone for nearly free, across multiple currencies. It's fast, fun and easy.</p>
                        <div className='btn'>
                            <button>DOWNLOAD APP</button>
                        </div>
                    </div>

                    <div className="hero-right-item">
                        <video  autoPlay muted loop src='https://user2.kustom.io/main-banner.mp4'>
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_Section