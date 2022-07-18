import React from 'react'
import Footer from "./footer"
import Header from "./header" 
import image1 from "../component/images/current/price/course.png"; 
import image2 from "../component/images/current/price/live.png"; 
import image3 from "../component/images/current/price/ssl.png"; 
import image4 from "../component/images/current/price/students.png"; 
import image5 from "../component/images/current/price/team.png"; 
import image6 from "../component/images/current/price/video.png"; 
import image7 from "../component/images/current/price/messages.png"; 
import image8 from "../component/images/current/price/phone-call.png"; 
export default function quotation() {
  return (
    <div>
          <Header/>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .first_price{ border-right:1px solid #c2c9d2;}\n    .second_box{ border-left:0px solid #c2c9d2;}\n    .plan_bx{ min-height: 928px;}\n    .multibnr{\n        padding: 13px 35px !important;\n    }\n" }} />
          <div className="container-fluid partnertxt_con pricingbg_img innerbannermask">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="partnertxt_con">
                    <h5>Excellent Features, Excellent Price</h5>
                    <p>Know the Key Features and Choose the Right Plan for your Need.</p> 
                    <div className="row">
                      <div className="col-md-6 pricing_colm6">	
                        <div className="row">
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image4} width={40} height={40} /></div>
                            <h2> Students</h2>
                          </div>
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image2} width={40} height={40} /></div>
                            <h2>Live Demo</h2>
                          </div>                      
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image6} width={40} height={40} /></div>
                            <h2>Video Call(Zoom or Meet)</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pricing_colm6">
                        <div className="row">
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image3} width={40} height={40} /></div>
                            <h2>SSL Certificate</h2>
                          </div>                   
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image5} width={40} height={40} /></div>
                            <h2> Users</h2>
                            <p className="product_fp">( Teachers, Parents, Admins )</p>
                          </div> 
                          <div className="col-md-4 pricing_colm4"> 
                            <div align="center"><img src={image1} width={40} height={40} /></div>
                            <h2>Courses </h2>
                          </div>    
                          
                        </div> 
                      </div>                      
                    </div>                                              
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="multibnr multibaner">
                    <div>
                      <h5>Limited time offer! </h5>
                    </div>
                    <div>
                      <a className="btn-theme mult-btn" target="_blank" href="sale2020.html">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content section starting*/}
         
          
         
         
          <div className="container-fluid demo_btm container-fluid innerbannermask dark">
            <div className="container">
            <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="pc_btm_txt pc_btm_txt_p">For custom pricing, Enterprise Services <a href="site/contact.html">Contact Sales</a></div>
                </div>
              </div>
            </div>
          </div>
              <div className="col-lg-12">
                <div className="col-lg-6 recell">
                  <div align="center"><img src={image8} width={57} height={57} />
                    <h2 align="center">Talk to Sales</h2>
                    <p align="center">Interested in seeing how cloven&works can transform your institution?</p>
                    <a className="btn-theme" style={{margin: '0 auto'}} href="site/contact.html">Schedule a Demo</a>            
                  </div>
                </div>
                <div className="col-lg-6 recell">
                  <div align="center"><img src={image7} width={57} height={57} />
                    <h2 align="center">Drop A Message</h2>
                    <p align="center">It takes a minute to get started.</p> 
                    <a data-fancybox data-src="#trueModal" data-modal="true" href="javascript:;" className="btn-theme">Drop a Message</a>
                    <div style={{display: 'none', maxWidth: '600px'}} id="trueModal" className="popup_contnt download_list">
                      <button data-fancybox-close className="btn_closs"><i className="fa fa-times" aria-hidden="true" /></button>
                      <h2 className="widget-title">Try cloven&works ERP Software free for 14 days</h2>
                      <p>No Credit card details required</p>         
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid wrap_fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading clearfix heading-v1">   
                    <div className="heading-inner">                         
                      <h2>FREQUENTLY ASKED QUESTIONS</h2> 
                      <small className="subheading">Make it your own</small>  
                    </div>                         
                  </div>
                </div>
              </div>
              <div className="p-faq-con clearfix">
                <div className="row">
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>How do I pay for cloven&works?</h3>
                    <p>You can purchase a selected plan with your Visa, MasterCard or AMEX Card. SSL encryption ensures that your data remains secure. If your country does not support PayPal please Contact Happiness team for more information regarding alternative payment methods.</p>
                  </div>
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Do I have to sign a contract?</h3>
                    <p>No. <b>You pay the license cost only once</b>, and you pay the support cost yearly, you can cancel or change your support plan at any time.</p>
                  </div>
                </div>
               
                
                <div className="row">     
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Is right for me?</h3>
                    <p>We have plans that cover most School sizes and situations. Select the plan that suits your current size, people and data demands and adjust plans as your needs change.</p>
                  </div>
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Will cloven&works work on my device?</h3>
                    <p>cloven&works will work on both Mac and PC computers . All you need is an internet connection and the latest version of Chrome, Firefox or Safari. </p>
                  </div>
                </div> 
                <div className="row">  
                  
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Have more questions?</h3>
                    <p>Our Happiness Officers are available to help you! Visit our Help Center</p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <Footer/>
          
        </div>
  )
}
