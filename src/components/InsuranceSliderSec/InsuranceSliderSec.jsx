import React from "react";
import "./InsuranceSliderSec.css";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from "react-elastic-carousel"


const breakPoints = [
  {width:1200, itemsToShow:1}
]

function InsuranceSliderSec() {
  return (
    <>
      <section className="sliderSec grayBG">
        <div className="container">
          <Carousel breakPoints={breakPoints}>
            <Carousel.Item>
              <div className="row flex_row">
                <div className="col-sm-6">
                  <div className="banner_content secHead">
                    <h1>
                      Insurance <span>Made easy and simple</span>
                    </h1>
                    <p className="slider-description-text">
                      Buying and selling insurance has never been this simple!
                      Our state-of-the-art technology solutions, infused with
                      AI, make your experience integrated and user-friendly
                    </p>
                    <h5>Chat with us</h5>
                    <a href="" className="btn  round-btn greenbtn">
                      Agent
                    </a>
                    <a href="" className="btn round-btn orangebtn">
                      Buyer
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src="images/header-img.png" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row flex_row">
                <div className="col-sm-6">
                  <div className="banner_content secHead">
                    <h1>
                      Insurance <span>Made easy and simple</span>
                    </h1>
                    <p>
                      Buying and selling insurance has never been this simple!
                      Our state-of-the-art technology solutions, infused with
                      AI, make your experience integrated and user-friendly
                    </p>
                    <h5>Chat with us</h5>
                    <a href="" className="btn  round-btn greenbtn">
                      Agent
                    </a>
                    <a href="" className="btn round-btn orangebtn">
                      Buyer
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src="images/header-img.png" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row flex_row">
                <div className="col-sm-6">
                  <div className="banner_content secHead">
                    <h1>
                      Insurance <span>Made easy and simple</span>
                    </h1>
                    <p>
                      Buying and selling insurance has never been this simple!
                      Our state-of-the-art technology solutions, infused with
                      AI, make your experience integrated and user-friendly
                    </p>
                    <h5>Chat with us</h5>
                    <a href="" className="btn  round-btn greenbtn">
                      Agent
                    </a>
                    <a href="" className="btn round-btn orangebtn">
                      Buyer
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src="images/header-img.png" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default InsuranceSliderSec;
