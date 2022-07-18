import React from 'react'

import "./css/bootstrap.min.css";
import "./css/component.css";
import "./css/demo_table.css";
import "./css/landing-style.css";
import "./css/font-awesome.min.css";
import "./css/landing.css";
import "./css/style.css";
import "./css/vertualclassroom.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import logo from "./images/logo1.png";
// import Quotation from "./component/quotation"
import logo from "../component/images/current/logo1.png"


function header() {
  return (
    <div>
        <nav role="navigation" className="navbar navbar-default navbar-fixed-top topnav " id="navbarMain">
          <div className="container topnav menu_topper"> 
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle" type="button"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <div className="logo_top"><a href="/"><img src={logo} alt="Cloven&Works" width="120px" height="80px"/></a></div>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
              <li>
                
                <a href="/">Home</a>          </li>
                <li>
                
                <a href="/Product">Our Product</a>          </li>
          
                  
                <li>
                  <a href="/Quotation">Quotation</a>
                  </li>
             
                <li>
                  <a href="/Contact">Contact Us</a>          </li>
                <li>
                    {/* <a data-fancybox data-src="#trueModal" data-modal="true" href="javascript:;" className="btn-theme">Start Free Trial</a> */}
                  <div style={{display: 'none', maxWidth: '600px'}} id="trueModal" className="popup_contnt download_list">
                    <button data-fancybox-close className="btn_closs"><i className="fa fa-times" aria-hidden="true" /></button>
                    <h2 className="widget-title">Try Cloven&Works ERP Software free for 14 days</h2>
                    <p>No Credit card details required</p>
                    <form id="enquiry-form" role="search" className="navbar-form" action="https://Cloven&Works.org/site/enquiry" method="post">                  <div className="form-group">
                        <input placeholder="Enter Your Email Address" id="enquiry_email" className="form-control" type="text" defaultValue name="enquiry_email" />                    
                      </div>                
                      <span className="iconInput iconInput_popup">
                        <input className="btn-theme" id="enquiry_submit" type="submit" name="yt1" defaultValue="Submit" />                   
                      </span>
                    </form> 
                    <div id="enquiry-error" style={{display: 'none'}} />
                  </div>
                </li>
                <li>
                  {/*<a href="/pricing" class="inner_buynow_but">Buy Now</a>*/} 
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */} 
          </div>
          {/* /.container */} 
        </nav>
    </div>
  )
}

export default header