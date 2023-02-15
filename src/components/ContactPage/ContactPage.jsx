import React, { useEffect } from 'react'
import "./ContactPage.css"

function ContactPage() {

    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 19.112801;
        const lng = 72.862480;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
      });
    


  return (
    <>
      <section id="contact-page">
        
      </section>
      <section>
        <div className="container">
            <div className="contact-page">
          <div className="bg-white col-md-8">
            <h1 className="">Contact us</h1>
            <br />
            <p className="font-12">
              Even if there is something you have always wanted to experience
              and can't find it on Indicosmic, let us know and we promise we'll
              do our best to find it for you and send you there.
            </p>{" "}
            <br />
            <div className="col-md-12 nopadding">
              <form data-toggle="validator" role="form" novalidate="true" className="contact-form">
                <div className="form-group  col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                    data-error="Name is invalid"
                    required=""
                  />
                  
                </div>
                <br />
                
                <div className="form-group  col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    data-error="Email address is invalid"
                    required=""
                  />
                  
                </div>
                <br />
                <div className="form-group  col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputContact"
                    placeholder="Contact Number"
                    data-error="Contact is invalid"
                    required=""
                  />
                  
                </div>
                <br />
                <div className="form-group  col-md-12">
                  <textarea
                    className="form-control"
                    placeholder="Message.."
                  ></textarea>
                </div>
                <br />
                <div className="form-group col-md-12">
                  <button disabled="false" type="submit" className="btn btn-5">
                    Submit
                  </button>
                </div>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <div className="side-address col-md-4">
            <dl>
              <dt>Email</dt>
              <dd>
                <a
                  href="mailto:info@combadi.com"
                  title="Click to send us an email"
                >
                  info@indicosmic.com
                </a>
              </dd>
              <br />
              <dt>Telephone</dt>
              <dd>
                <a href="tel:00306977447033" title="Click to call us">
                  +91 22 26820489
                </a>
              </dd>
              <br />
              <dt>Company Website</dt>
              <dd>
                <a href="http://www.indicosmic.com/" title="Click to view site">
                  www.indicosmic.com
                </a>
              </dd>
              <br />
              <dd>
                <dt>Address</dt>
                <address>
                  <p className="font-12">
                    318, 3rd Floor, Summit-Business Bay,
                    <br />
                    Behind Gurunanak Petrol Pump,
                    <br />
                    Off Andheri Kurla Road,
                    <br />
                    Beside Magic Bricks WEH metro stn., Andheri (E),
                    <br />
                    Mumbai-400093, Maharashtra (India)
                    <br />
                  </p>
                </address>
              </dd>
            </dl>
          </div>
          </div>
          <div className="col-md-12">
            <br />
            <br />
            <div className="contact-map">
             <iframe id="iframeId" height="700px" width="100%"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
