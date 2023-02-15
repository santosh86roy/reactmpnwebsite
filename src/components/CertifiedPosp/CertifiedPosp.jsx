import React from "react";
import "./CertifiedPosp.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function CertifiedPosp() {
  return (
    <>
      <section className="becomeAgent">
        <div className="container">
          <div className="row flex_row">
            <div className="col-sm-4">
              <img src="../images/licAgent.png" className="img-fluid" />
            </div>
            <div className="col-sm-5 becomeAgent_txt">
              <h2>
                Become a <span>Certified POSP</span>
              </h2>
              <h5>
                Our onboarding POS agents <br /> <span> 5,000+</span> and counting
              </h5>
              <a href="" className="btn round-btn whitebtn">
                Register
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="become_posp">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 secHead">
              <h2>
                Why Become a <span>mypolicynow POSP Advisor </span>{" "}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <p style={{fontSize:"24px", color:"#263F65", lineHeight:"1.8"}}>
                We make lives better by streamlining the insurance broking
                ecosystem. We take pride in our multiple cross sell platform,
                and by becoming a myPolicynow Advisor, you can too!{" "}
              </p>
              <ul>
                <li> Zero investment business opportunity </li>
                <li> Free POSP Certification under IRDAI guidelines</li>
                <li> Attractive Pay-outs </li>
                <li> Digital Passbook to track your business </li>
                <li> Dedicated Relationship manager support </li>
                <li> Attractive and scalable remuneration model </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="joinNetwork">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <h4>
                Join our exclusive network of expert POSP Advisors spread across
                500+ cities across India
              </h4>
              <a href="" className="round-btn btn orangebtn">
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertifiedPosp;
