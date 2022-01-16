import React from 'react';
import "./Header.css";

const Header = () => {
      return (
           <header>
                 <section className='container main-hero-container'>
                       <div className="row">
                             <div className="col-12 col-lg-6 left-header
                             d-flex flex-column justify-content-center
                             align-items-start">
                                  
                                   <h1 className="display-3">
                                     a single place to make all payments easy
                                     for you
                                   </h1>

                                   <p className="main-hero-para">
                                   lorem ipsum dolor sit amet, consectetur adip
                                         lorem ipsum dolor sit amet, consectetur adip
                                         lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet , consectetur adip
                                         lorem ips dolor sit amet lorem lorem ipsum dolor sit amet , con sect et
                                    lorem ipsum dolor sit amet lorem lorem  ipsum dolor sit amet ,
                                   </p>

                                    <h3>get early access for you</h3>

                                    <div className="input-group mt-3">
                                          <input type="text" className="w-75 rounded-pill me-3 p-2 form-control-text" placeholder="Enter Your Email"/>
                                          <div className="input-group-button">
                                                Get it now
                                          </div>
                                    </div>
                              </div>

                                    <div className="col-12 col-lg-6 right-header d-flex 
                                    justify-content-center align-items-center">
                                          <img className="img-fluid" src="project-i-1.jpg" alt="pay_img" />
                                    </div>
                            
                       </div>
                 </section>
           </header>
      )
}

export default Header;
