import React from 'react';
import Servicemain from '../Services/Services';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Service = () => {
      return (
            <>
            <Navbar/>
            <div className="abt" style={{marginTop:"-9rem"}}> <Servicemain/></div>
            <Footer/>
            </>
      )
}

export default Service;
