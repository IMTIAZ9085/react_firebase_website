import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aboutmain from "../About/About";


const About = () => {
      return (
            <>
            <Navbar/>
            <div className="abt" style={{marginTop:"-5rem"}}>
            <Aboutmain/></div>
            <Footer/>
            </>
      )
}

export default About;
