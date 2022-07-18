import React from 'react'
import "./css/bootstrap.min.css";
import "./css/component.css";
import "./css/demo_table.css";
import "./css/landing-style.css";
import "./css/font-awesome.min.css";
import "./css/landing.css";
import "./css/style.css";
import "./css/vertualclassroom.css";
import logo from "../component/images/current/logo1.png"

function footer() {
  return (
    <div>
          <section id="ut-sitebody">
          <footer className="ut-footer-custom ut-footer-has-widgets">
            <div className="container">
              <div className="ut-footer-area">
                <div className="row">
                  <div className="col-md-2">
                    <div className="textwidget">
                      <a href="#"><img src={logo} alt="Cloven&Works" width="220px" height="100px" /></a>
                      
                     
                    </div>
                  </div>
                  
                  
                  <div className="col-md-2">
                    <ul className="sidebar">
                      <li className="widget-container">
                        <h3 className="widget-title"><span>Company</span></h3>
                        <ul>
                          <li className="widget_nav_menu"><a href="about.html">About</a> </li>     
                          
                         
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-md-1">
                    <ul className="sidebar">
                      <li className="widget-container">
                        <h3 className="widget-title"><span>Follow</span></h3>
                        <ul>
                          
                          <li className="widget_nav_menu">
                            <a href="" target="_blank">Linkedin</a>
                          </li>
                          
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="footer-contact">
                <ul>
                  <h3 className="widget-title"><span>Talk to sales</span></h3>
                 
                  
                  <li className="mail">
                    <h4>project.cworks@gmail.com</h4>
                  </li>
                </ul>
              </div>
              <div className="clear" />
              <a href="#0" className="cd-top"><i className="fa fa-angle-double-up" aria-hidden="true" /></a>
              <div className="footer-content">
                <div className="row">
                  <div className="col-md-12">
                    <p>Copyright © 2022 | Cloven&Works. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
    </div>
  )
}

export default footer