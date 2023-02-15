import React from 'react'
import "./OurPartners.css"

function OurPartners() {
  return (

    <>

    <section className="partners grayBG">
      <div className="container">
         <div className="row">
            <div className="col-sm-11 offset-sm-1 secHead">
               <h2>Our  <span>Partners: </span> </h2>
            </div>
         </div>
         <div className="row">
            <div className="col-sm-11 offset-sm-1">
               <ul>
                  <li className="partner"> <img src="images/p1.png"/>  </li>
                  <li className="partner"> <img src="images/p2.png"/>  </li>
                  <li className="partner"> <img src="images/p3.png"/>   </li>
                  <li className="partner"> <img src="images/p4.png"/>   </li>
                  <li className="partner"> <img src="images/p5.png"/>   </li>
               </ul>
            </div>
         </div>
      </div>
   </section>

    
    
    </>
  )
}

export default OurPartners