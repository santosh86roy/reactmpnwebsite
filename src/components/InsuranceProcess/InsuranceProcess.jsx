import React from 'react'
import "./InsuranceProcess.css"




function InsuranceProcess() {
  return (
    <>
    <section className="vidSec">
      <div className="digitDot">
         <img src="images/digitalDots.png"/>
      </div>
      <div className="container">
         <div className="row flex_row">
            <div className="col-sm-6 secHead">
               <h2>A sneak peek into our effortless  <span>insurance process!</span> </h2>
               <p>As they say, let bygones be bygones. Seriously! Forget the days of intimidating jargons, complicated definitions and never-ending documentation. The future of insurance is here, and it’s simple.</p>
            </div>
            <div className="col-sm-6">
               <div className="video">
                  {/* <a href=""> <img src="images/playICO.png"/> </a> */}
                  {/* <img src="images/videoImg.png" className="img-fluid"/>  */}
               </div>
            </div>
         </div>
      </div>
   </section>
    
    
    
    
    </>
  )
}

export default InsuranceProcess