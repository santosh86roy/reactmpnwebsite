import React from "react";
import "./ClientTesti.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function ClientTesti() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="client_testi">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 secHead">
              <h2>
                What <span>Our Client Says </span>{" "}
              </h2>
            </div>
          </div>
          <Slider {...settings}>
            
          <div>
                
                <div className="clientSpeaks slick-active slick-center">
                  <img src="images/testi1.png" />
                  <h6> Mr. Puran Singh Rajawat </h6>
                  <p>
                    My Policy Now gave a new direction to my career as an
                    Insurance advisor. With MPN, I got an option to sell the
                    insurance policies of multiple companies associated with My
                    Policy Now & it gave me a platform to earn more money
                  </p>
                  <p className="speaker">
                    Insurance Head <span>K S Motor Jaipur </span>
                  </p>
                </div>
                
            </div>
            <div>
                <div className="clientSpeaks slick-center">
                  <img src="images/testi1.png" />
                  <h6> Mr. Puran Singh Rajawat </h6>
                  <p>
                    My Policy Now gave a new direction to my career as an
                    Insurance advisor. With MPN, I got an option to sell the
                    insurance policies of multiple companies associated with My
                    Policy Now & it gave me a platform to earn more money
                  </p>
                  <p className="speaker">
                    Insurance Head <span>K S Motor Jaipur </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="clientSpeaks slick-center">
                  <img src="images/testi1.png" />
                  <h6> Mr. Puran Singh Rajawat </h6>
                  <p>
                    My Policy Now gave a new direction to my career as an
                    Insurance advisor. With MPN, I got an option to sell the
                    insurance policies of multiple companies associated with My
                    Policy Now & it gave me a platform to earn more money
                  </p>
                  <p className="speaker">
                    Insurance Head <span>K S Motor Jaipur </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="clientSpeaks slick-center">
                  <img src="images/testi1.png" />
                  <h6> Mr. Puran Singh Rajawat </h6>
                  <p>
                    My Policy Now gave a new direction to my career as an
                    Insurance advisor. With MPN, I got an option to sell the
                    insurance policies of multiple companies associated with My
                    Policy Now & it gave me a platform to earn more money
                  </p>
                  <p className="speaker">
                    Insurance Head <span>K S Motor Jaipur </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="clientSpeaks slick-center">
                  <img src="images/testi1.png" />
                  <h6> Mr. Puran Singh Rajawat </h6>
                  <p>
                    My Policy Now gave a new direction to my career as an
                    Insurance advisor. With MPN, I got an option to sell the
                    insurance policies of multiple companies associated with My
                    Policy Now & it gave me a platform to earn more money
                  </p>
                  <p className="speaker">
                    Insurance Head <span>K S Motor Jaipur </span>
                  </p>
                </div>
              </div>
            <div>
              <div className="clientSpeaks slick-center">
                <img src="images/testi1.png" />
                <h6> Mr. Puran Singh Rajawat </h6>
                <p>
                  My Policy Now gave a new direction to my career as an
                  Insurance advisor. With MPN, I got an option to sell the
                  insurance policies of multiple companies associated with My
                  Policy Now & it gave me a platform to earn more money
                </p>
                <p className="speaker">
                  Insurance Head <span>K S Motor Jaipur </span>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default ClientTesti;
