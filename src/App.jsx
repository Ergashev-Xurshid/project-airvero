import './App.css'

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from './components/Modal'

// components
import Banner from './components/Banner'
import Contact from './components/Contact'
import Discover from './components/Discover'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Plan from './components/Plan'
import Popular from './components/Popular'
import Services from './components/Services'
import Thegoal from './components/Thegoal'
import Vidio from './components/Vidio'


function App() {
  // animation
  useEffect(() => {
    document.cookie = "username=John; path=/; SameSite=Lax";
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);


  // opne modal 
  const [isOpen , setIsOpen]=useState(false)
  return (
    <>
     <Navbar/>
     <main>
        <Banner/>
        <Popular/>
        <Thegoal/>
        <Discover/>
        <Services/>
        <Plan/>
        <Vidio/>
        <Offer/>
        <Contact setIsOpen={setIsOpen}/>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
     </main>
     <Footer/>
    </>
  )
}

export default App
