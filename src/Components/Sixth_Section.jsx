import React from 'react'
import videoSixth from '../assets/blaze videos/blaze-offramp.mp4'
import '../Css/Sixth.css'

const Sixth_Section = () => {
  return (
    <>
        <div className='main-sixth'>
       <div className='sixth'>
         <div className="left-sixth-sec-item">
            <video   autoPlay muted loop playsInline src={videoSixth}></video>
         </div>
         <div className="right-sixth-sec-item">
            <h1>Shop with your card or withdraw to your bank account</h1>
            <p>Seamlessly spend your balance anywhere Visa is accepted worldwide, pay with Apple Pay or Google Pay, or withdraw funds from Blaze to your bank account.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Sixth_Section