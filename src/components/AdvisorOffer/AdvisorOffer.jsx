import React from 'react'
import "./AdvisorOffer.css"




function AdvisorOffer() {
  return (
    <>
    
    <section className="advisorOffer">
      <div className="container">
         <div className="row ">
            <div className="col-sm-10 secHead">
               <h2>What does our <span>Advisor offer?</span> </h2>
               <p style={{fontSize:"14px"}}>Insurance is serious business. It is, after all, an investment in prospects that affect life decisions. Every consumer who purchases a policy with half-baked information makes our belief in the remedy of simplicity only stronger. Facilitated by a digital model, supervised by a Point of Sale Person (POSP), makes your experience effortless, efficient and effective.</p>
            </div>
         </div>
         <div className="row">
            <div className="col-sm-3">
               <div className="offer">
                  <img src="images/ao1.svg"/>
                  <h5>Instant Policy</h5>
               </div>
            </div>
            <div className="col-sm-3">
               <div className="offer">
                  <img src="images/ao2.svg"/>
                  <h5>Full Claim Support</h5>
               </div>
            </div>
            <div className="col-sm-3">
               <div className="offer">
                  <img src="images/ao3.svg"/>
                  <h5>Free Customized Advice</h5>
               </div>
            </div>
            <div className="col-sm-3">
               <div className="offer">
                  <img src="images/ao4.svg"/>
                  <h5>Compare Premium Across 10+ Companies</h5>
               </div>
            </div>
         </div>
      </div>
   </section>
    
    
    </>
  )
}

export default AdvisorOffer