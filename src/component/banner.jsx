import React from 'react'
import "./css/bootstrap.min.css";
import "./css/component.css";
import "./css/demo_table.css";
import "./css/landing-style.css";
import "./css/font-awesome.min.css";
import "./css/landing.css";
import "./css/style.css";
import "./css/vertualclassroom.css";

function banner() {
  return (
    <div>
        <div className="container-fluid bg-fluid-b">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-body hero-text-left ">
                  <div className="row row-flex h-100">
                    <div className="col-md-7"><p>Get Cloven&Works premium edition for the lowest price ever !</p></div>
                    <div className="col-md-3">
                      <div className="b_price_holder srkout">
                        {/* <h4>    $799</h4>
                        <h2>$499 only</h2> */}
                      </div>
                    </div>
                    <div className="col-md-2"> <div className="btn-holder">
                        <a href="/Contact" arget="_blank" className="hero-btn btn-holder-sm">Buy Now</a>
                      </div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default banner