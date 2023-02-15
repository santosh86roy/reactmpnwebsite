import React from "react";
import AdvisorOffer from "../AdvisorOffer/AdvisorOffer";
import CertifiedPosp from "../CertifiedPosp/CertifiedPosp";
import ClientTesti from "../ClientTesti/ClientTesti";
import FastestGrowing from "../FastestGrowing/FastestGrowing";
import InsuranceProcess from "../InsuranceProcess/InsuranceProcess";
import InsuranceSliderSec from "../InsuranceSliderSec/InsuranceSliderSec";
import OurPartners from "../OurPartners/OurPartners";
import Products from "../Products/Products";
import SimplifyInsurance from "../SimplifyInsurance/SimplifyInsurance";
import "./MainPage.css";



function MainPage() {
  
  return (
    <>
        
<InsuranceSliderSec/>
<InsuranceProcess/>
<SimplifyInsurance/>
<AdvisorOffer/>
<FastestGrowing/>
<Products/>
<OurPartners/>
<ClientTesti/>
<CertifiedPosp/>















          
    </>
  );
}

export default MainPage;