import React from 'react';
import "./Contact.css";

const Contact = () => {
      return (
            <>
             <section className="contact-us-section">
             <div className="container">
                   <div className="row">
                         <div className="col-12 col-lg-10 mx-auto">
                              <div className="row">

                              {/* //form leftside part */}
                              <div className="contact-left col-12 col-lg-5">
                                     <h1 className="title main-heading">Connect With Us</h1>
                                     <p className="main-hero-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                                    <figure>
                                          <img src="contact.jpg" alt="contact-us" className="img-fluid" />
                                    </figure>
                                     </div>


                                {/* //form rightside part */}
                                     <div className="contact-right col-12 col-lg-7">
                                      
                                        <form method="POST">
                                          <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                placeholder="First Name"
                                                className="form-control" />
                                                </div>

                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                placeholder="Last Name" 
                                                      className="form-control"
                                                />
                                                </div>
                                          </div>


                                          <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="number"
                                                placeholder="Enter Phone Number"
                                                className="form-control" />
                                                </div>

                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email"
                                                placeholder="Enter Email id" 
                                                      className="form-control"
                                                />
                                                </div>
                                          </div>
                                       
                                       <div className="col-12">
                                             <input type="text"
                                              placeholder="Enter Your Address"
                                              className="form-control contact-input-field" />
                                       </div>

                                       <div className="col-12">
                                             <input type="text"
                                              placeholder="Enter Your Message"
                                              className="form-control contact-input-field" />
                                       </div>

                                       <div class="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label main-hero-para" for="flexCheckChecked">
    I agreed To The terms and conditions of this page
  </label>
</div>

<button type="submit" className="btn btn-style w-100">Submit</button>
                                        </form>
                                    
                                    
                                     </div>
                              </div>
                         </div>
                   </div>
             </div>

             </section>   
            </>
      )
}

export default Contact
