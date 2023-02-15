import React from "react";
import "./Footer.css";
// import "./style.css"
// import Row from "react-bootstrap/Row"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// import { Link,Router } from 'react-router-dom';




function Footer() {
  
  return (
    <>
        
        <footer>  
      <div className="container">
        <div className="row footer-main ">
         <div className="col-sm-4 sx-12">
          <img className="footer-img" src="images/mpn-logo-footer.png"/>
          <p className="phone mt-5"><i className="bi bi-telephone-fill"></i> &nbsp;+91-30303011</p>
          <p className="mt-3 mb-5"> Private Policy / Terms & Condition. © 2019</p>
          <ul className="social d-flex flex-row" >
           <li> <a href=""> <img src="images/twitter.svg"/> </a></li>
            <li> <a href=""> <img src="images/pinterest.svg"/> </a></li>
            <li> <a href=""> <img src="images/facebook.svg"/> </a></li>
            <li> <a href=""> <img src="images/instagram.svg"/> </a></li>
          </ul>

         </div>
           <div className="col-sm-2 links">
            <h3>Links</h3>
            <ul>
           
            <li>  <Link to='/'> HOME</Link></li>
            <li> <Link to='/about'> About</Link></li>
            <li> <Link to='/whyus'>WHY US </Link></li>
            <li> <Link to='/contact'>Contact </Link></li>
            <li> <Link to='/problems'>Problems </Link></li>
          </ul>
         </div>
           <div className="col-sm-3 contactDetails">
            <h3>Contact details</h3>
            <p>E: info@example.com </p>
            <p>P: +55 104 888 9012</p>
            <p>1018, 5th Floor, Summit-Business Bay, 
                Behind Gurunanak Petrol Pump, Off Andheri Kurla Road, Beside Magic Bricks WEH metro stn., Andheri (E), 
                Mumbai-400093, Maharashtra (India) .
            </p>
         </div>
           <div className="col-sm-3 subscribe ">
            <p>get all the updates of the <br/> lifeguard to your inbox</p>
            <div className="sbscrbForm">
              <form>
                <div className="form-group mb-3">
                 <input type="email" class="form-control" placeholder="Email Address"/>
                </div>
                <button className="btn"> Submit </button>
              </form>
            </div>

         </div>
        </div>
      </div>

      <div className="copyRight">
        <div className="container">
         <p> ©2021kesowa. All rights reserved.</p>
        </div>
      </div>
    

      </footer>








          
    </>
  );
}

export default Footer;
