import React from 'react'
import "./css/bootstrap.min.css";
import "./css/component.css";
import "./css/demo_table.css";
import "./css/landing-style.css";
import "./css/font-awesome.min.css";
import "./css/landing.css";
import "./css/style.css";
import "./css/vertualclassroom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function price() {
  return (
    <div>
        <div className="container-fluid wrap_fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading clearfix heading-v1">   
                  <div className="heading-inner heading_p h2">                         
                    <h2>School Management made simple</h2> 
                  </div>                         
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <p>School is like a second home for the child. Hence, parents consider a lot before admitting their children into a school.  
                   <span className="orange_text"><strong>But in 2020, the lockdown imposed due to the Covid-19 pandemic affected millions of students and educational institutes worldwide. Students have been attending school from their homes virtually for over a year now. </strong></span> Classes are being held online via video conferencing and other software.
                </p>
              </div>
              <div className="col-sm-3 padding_topper mob_center">
                <div className="os_v">
                  {/* <p> <a className="btn-web" href="product.html">What's New</a></p>  */}
                  <h2>ERP</h2>
                  <h4>v2.4</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="os_left_content"> 
                  {/* <h2>10+</h2> */}
                  <h4>schools colleges Instution use Cloven&Works</h4>
                </div>
                {/* <div className="ul_flag">    
                  <ul>
                    <li><img src="images/india.jpg" className="img-responsive" /></li>
                    <li><img src="images/uk.jpg" className="img-responsive" /></li>
                    <li><img src="images/italy.jpg" className="img-responsive" /></li>
                    <li><img src="images/france.jpg" className="img-responsive" /></li>
                    <li><img src="images/usa.jpg" className="img-responsive" /></li>
                    <li><img src="images/Australia.jpg" className="img-responsive" /></li>
                    <li><img src="images/Saudi.jpg" className="img-responsive" /></li>
                    <li><img src="images/china.jpg" className="img-responsive" /></li>
                    <li><img src="images/uae.jpg" className="img-responsive" /></li>
                    <li><img src="images/Egypt.jpg" className="img-responsive" /></li>
                    <li><img src="images/Malaysia.jpg" className="img-responsive" /></li>
                    <li><img src="images/South_Africa.jpg" className="img-responsive" /></li>                        
                  </ul>
                </div>    */}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default price