import React,{useState} from 'react';
import "./About.css";
import AboutAPI from "../API/AboutAPI.js"

const About = () => {
      const [About, setAbout] = useState(AboutAPI);

      return (
            <>
                  <section className="common-section our-services">

                  <div className="container mt-5 mb-5">
                    <div className="row">

                    {/* //1st section left side */}
                          <div className="col-12 col-lg-5 text-center leftside-img order-lg-first order-last">
                            <img className="img-fluid"   style={{height: '32rem', width: '46rem'}} src="abt.jpg" alt="aboutimg" />
                          </div>

                     {/* 1st section right side data */}
                     <div className="col-12 col-lg-7 rightside">
                           <h4>--Available @ Google Play Store and Apple App Store</h4>
                           <h1 className="main-title">How to Use The App</h1>
                           {
                                 About.map((currElem)=>{
                                    const {id,title,info}=currElem;

                                       return(<>
                                    <div className="row our-services-info" key={id}>
                               <div className="col-1 our-services-no">{id}</div>
                               <div className="col-11 our-services-data">
                                     <h2>{title}</h2>
                                     <p>{info}</p>
                               </div>
                           </div></>);
                                 })
                           }
                         
                           <br />
                           <button className="btn btn-primary learn">Learn More</button>
                     </div>
                    </div>
                  </div>

                  </section>


                  
                  
                  {/* //support section */}
                  <section className="common-section our-services">

<div className="container mt-5 mb-5">
  <div className="row">

   {/* 1st section right side data */}
   <div className="col-12 col-lg-7 rightside">
         <h4>--Support in Any Language</h4>
         <h1 className="main-title">We are Here To Support You <br/>
         24/7</h1>
         {
               About.map((currElem)=>{
                  const {id,title,info}=currElem;

                     return(<>
                  <div className="row our-services-info" key={id}>
             <div className="col-1 our-services-no">{id}</div>
             <div className="col-11 our-services-data">
                   <h2>{title}</h2>
                   <p>{info}</p>
             </div>
         </div></>);
               })
         }
       
         <br />
         <button className="btn btn-primary learn">Learn More</button>
   </div>

    {/* //1st section left side */}
    <div className="col-12 col-lg-5 text-center leftside-img  order-lg-first order-last">
          <img className="img-fluid"  style={{height: '32rem', width: '46rem'}} src="support.jpg" alt="aboutimg" />
        </div>
  </div>
</div>

</section>
            </>
      )
}

export default About
