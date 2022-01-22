import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {

      const [User,setUser]=useState({
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            address:"",
            message:"",
      });
      
      let name,value;
      const postData = (e) => {
            name=e.target.name;
            value=e.target.value;
            setUser({...User,[name]:value});

      }

      const submitData = async (e) => {
      e.preventDefault();
      const {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            message
      }=User;

  if( firstName && lastName && phoneNumber && email && address && message){


      const res=await fetch('https://reactfirebase-website-c4fc3-default-rtdb.firebaseio.com/userDataRecord.json',
     { method:'POST',
      Headers:{
            "Content-Type": "application/json",
      },
      body:JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            message
      }),

}
      );

      if(res) alert("Data Stored");
      else alert("Please Fill the Data");
      setUser({
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            address:"",
            message:"",
      })}else alert("Please Fill the Data");

      }

      return (
            <>
             <section className="contact-us-section">
             <div className="container">
                   <div className="row">
                         <div className="col-12 col-lg-10 mx-auto">
                              <div className="row">

                              {/* //form leftside part */}
                              <div className="contact-left col-12 col-lg-5">
                                     <h1 className="title main-heading contact-heading">Connect With Us</h1>
                                     <p className="main-hero-para contact-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                                    <figure>
                                          <img src="contact.jpg" alt="contact-us" className="img-fluid contact-img" />
                                    </figure>
                                     </div>


                                {/* //form rightside part */}
                                     <div className="contact-right col-12 col-lg-7">
                                      
                                        <form method="POST">
                                          <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                className="form-control" value={User.firstName} onChange={postData}/>
                                                </div>

                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                name="lastName"
                                                placeholder="Last Name" 
                                                      className="form-control"
                                                      value={User.lastName} onChange={postData} />
                                                </div>
                                          </div>


                                          <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="number"
                                                name="phoneNumber"
                                                placeholder="Enter Phone Number"
                                                className="form-control"  value={User.phoneNumber} onChange={postData}/>
                                                </div>

                                                <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email"
                                                name="email"
                                                placeholder="Enter Email id" 
                                                      className="form-control"
                                                      value={User.email} onChange={postData} />
                                                </div>
                                          </div>
                                       
                                       <div className="col-12">
                                             <input type="text"
                                             name="address"
                                              placeholder="Enter Your Address"
                                              className="form-control contact-input-field"
                                              value={User.address} onChange={postData} />
                                       </div>

                                       <div className="col-12">
                                             <input type="text"
                                             name="message"
                                              placeholder="Enter Your Message"
                                              className="form-control contact-input-field"
                                              value={User.message} onChange={postData}  />
                                       </div>

                                       <div class="form-check">
  <input className="form-check-input" type="checkbox"  id="flexCheckChecked" />
  <label className="form-check-label main-hero-para" for="flexCheckChecked">
    I agreed To The terms and conditions of this page
  </label>
</div>

<button onClick={submitData} type="submit" className="btn btn-style w-100">Submit</button>
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
