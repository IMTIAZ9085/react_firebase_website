import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Contactmain from "../Contact/Contact";


const Contact = () => {
      return (
            <>
            <Navbar/>
            <div className="abt" style={{marginTop:"-4rem"}}><Contactmain/></div>
            <Footer/>
            </>
      )
}

export default Contact;
