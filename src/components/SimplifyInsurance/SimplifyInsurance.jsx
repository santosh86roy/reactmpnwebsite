import React from 'react'
import "./SimplifyInsurance.css"


function SimplifyInsurance() {
  return (
    <>
    
    <section className="simplify_Insurance">
      <div className="digitDot">
         <img src="images/digitalDots.png"/>
      </div>
      <div className="container">
         <div className="row flex_row">
            <div className="col-sm-4 secHead">
               <h2>How we Simplify <span>Insurance?</span> </h2>
               <p>The world of insurance comes with Jargons and complex definitions - making it confusing, complex, and intimidating for both the buyers and sellers. We aim to change this and simplify insurance for both the buyers and sellers by:</p>
            </div>
            <div className="col-sm-6">
               <div className="timeLine">
                  <ul>
                     <li>
                        <div className="icons"> <img src="images/s1.svg"/>  </div>
                        <div className="txt">
                           <h6>Technology takes <br/> center-stage </h6>
                           <p> Driven by AI based technological innovations, we are your go-to insurance platform for simplified processes, risk-free transactions and convenient exchange. You are our priority, and technology helps us serve you better!</p>
                        </div>
                     </li>
                     <li>
                        <div className="icons"> <img src="images/s2.svg"/>   </div>
                        <div className="txt">
                           <h6>Seamless and <br/> effortless insurance </h6>
                           <p> Consumer-awareness is key to our services! This means that you will know every aspect of the transaction with the help of our user-friendly interface and obstacle-free processes.</p>
                        </div>
                     </li>
                     <li>
                        <div className="icons"> <img src="images/s3.svg"/>   </div>
                        <div className="txt">
                           <h6>Jargons, what’s <br/> that? </h6>
                           <p> We promise to make every word count, so that you are well-versed with your decisions. All the plans are free of long and complicated definitions, so that you understand every bit of it before you make a final choice.</p>
                        </div>
                     </li>
                     <li>
                        <div className="icons"> <img src="images/s4.svg"/>   </div>
                        <div className="txt">
                           <h6>Round the clock <br/> assistance </h6>
                           <p>Problems, questions and doubts arrive unannounced. That’s why we have decided to never take a break from our help desk. You can count on us to solve your problem. We have a team of expert insurance advisors at your disposal.</p>
                        </div>
                     </li>
                     <li>
                        <div className="icons"> <img src="images/s5.svg"/>   </div>
                        <div className="txt">
                           <h6>Always with you, <br/> and for you! </h6>
                           <p> With physical presence in over 3000 pin codes, we are always round the curb! Additionally, our multilingual platforms ensure that we understand you in every language.</p>
                        </div>
                     </li>
                     <li>
                        <div className="icons"> <img src="images/s6.svg"/>   </div>
                        <div className="txt">
                           <h6>Not only are we light on our documentation, but also on your pocket! </h6>
                           <p>We offer a comprehensive range of products to meet every budget and every consumer. It has never been this affordable to avail insurance.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
    
    
    </>
  )
}

export default SimplifyInsurance