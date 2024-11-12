 import React from 'react'
 import './App.css'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components import
import Header from './Components/Header'

// Screen
 import Business from './Screens/Business'
 import About from './Screens/About'
 import Contact  from './Screens/Contact'
import Home from './Screens/Home'
<<<<<<< HEAD
=======
import Careers from './Screens/Careers'
>>>>>>> 6809c92 (few more little changes)


 
 const App = () => {
<<<<<<< HEAD
=======
   
 
>>>>>>> 6809c92 (few more little changes)
   return (
     <div>
       {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='business' element={<Business/>}/>
        <Route path='about' element={<About/>}/>
<<<<<<< HEAD
=======
        <Route path='careers' element={<Careers/>}/>
>>>>>>> 6809c92 (few more little changes)
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
     </div>
   )
 }
 
 export default App