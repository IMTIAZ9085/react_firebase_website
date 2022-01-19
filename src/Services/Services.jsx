import React,{useState} from 'react';
import "./Services.css";
import ServiceAPI from "../API/ServiceAPI";

const Services = () => {
      const [Serv, setServ] = useState(ServiceAPI);
      return (
            <>
                 <section className="service-main-container">
                 <div className="container service-container">
                   <h1 className="main-heading text-center fw-bold">How To Send Money</h1>
                 
                       <div className="row">
                       { Serv.map((curr)=>{
                             const {id,logo,title,info} = curr;
                             return(
                                   <>
                                   <div className="col-12 col-lg-4 work-service-container-subdiv" key={id}>
                               <i className={`${logo} logo-style fontawsome-style`}></i>
                               <h2 className="text-center subheading">{title}</h2>
                               <p className="main-hero-para">
                                    {info}
                               </p>
                         </div>

                                   </>
                             )

                        })}
                         
                       </div>
                       </div>
                 </section>
            </>
      )
}

export default Services
