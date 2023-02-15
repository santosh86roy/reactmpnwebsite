import React from "react";
import "./Navbar.css";
// import "./style.css"
// import Row from "react-bootstrap/Row"
// import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
  
  return (
    <>

<nav classNameName="grayBG" style={{backgroundColor:"#f2f2f2"}}>
   <div className="container">
      <div className="row navbar-header">
         <div className="col-sm-6 nav-left">
            <a href=""> <img src="images/mpn-logo.png" className="Nav-logo"/></a>
         </div>
         <div className="col-sm-6 text-right justify-content-end nav-right">
            <a href="" className="btn round-btn lightBluebtn"> Agent Login</a>
         </div>
      </div>
   </div>
</nav>








          
    </>
  );
}

export default Navbar;
