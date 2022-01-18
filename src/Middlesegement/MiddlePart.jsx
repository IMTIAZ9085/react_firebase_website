import React,{useState} from 'react';
import "./Middlepart.css";
import WorkAPI from '../API/Work.js';

const MiddlePart = () => {
      const [work,Setwork]=useState(WorkAPI);
      
      return (
            <>
            <section>

                  <div className="work-container container">
                    <h1 className="main-heading text-center">How To Start</h1>

                    {/* we can also do this using ES6
                          const {id,logo,title,info} = curr; */}

                    <div className="row">
                    {

                          work.map((curr)=>{
                                return (
                                      <>
                                      <div className="col-12 col-lg-4 text-center work-container-subdiv">
                          <i class={`logo-style  ${curr.logo}`}></i>
                          <h2 className="subheading">{curr.title}</h2>
                          <p className="main-hero-para">
                          {curr.info}
                          </p>
                          </div>
                                      </>
                                )
                          })
                    }
                    </div>

                    
                  
                  </div>


                  
            </section>
            </>
      )
}

export default MiddlePart;
