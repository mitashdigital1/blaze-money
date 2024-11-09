 import React from 'react'
 import './App.css'

// Components import
import Header from './Components/Header'
// import Hero_Section from './Components/Hero_Section'
import Second_Section from './Components/Second_Section'
import Thred_Section from './Components/Thred_Section'
import Four_Section from './Components/Four_Section'
import Video_Section from './Components/Video_Section'
import Footer from './Components/Footer'
import Fifth_Section from './Components/Fifth_Section'
import Sixth_Section from './Components/Sixth_Section'
import Seven_Section from './Components/Seven_Section'

 
 const App = () => {
   return (
     <div>
      <div  >
      <Header/>
      </div>
   
      {/* <Hero_Section/> */}
      <Second_Section/>
      <Thred_Section/>
      <div className='back-bg' >
       <Four_Section/>
       <Fifth_Section/>
       <Sixth_Section/>
       <Seven_Section/>
        </div>
      
      <Video_Section/> 
      <Footer/>
     </div>
   )
 }
 
 export default App