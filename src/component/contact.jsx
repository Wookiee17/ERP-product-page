import React from 'react'
import Header from "./header" 
import Footer from "./footer"

function contact() {
  return (
    <div>
   <Header/>
   
    
    
    
   
    <div className="container-fluid  "style={{marginTop:"80px"}}>
      <div className="container">
        <div className="row row_colm-revers">
          <div className="col-md-4">
            <div className="contct_left_cnt contct_bg_left">
              <div className="contct_cnt_dtls">
                <div className="cmbny_qk_dtls contact_dtls">
                  <h4>Quick Contact</h4>
                  
                  <p>Email: <a href="">@</a></p>
                </div>
                <div className="contact_dtls ">
                  <h4>Talk to sales</h4>
                  <div className="contact_dtls contact_left_brd">
                   
                    <div className="key-contact-details">
                      <h3>Atul G OR Vipul G</h3>
                      
                      <p><a href="" target="_blank">@</a></p>
                    </div>
                    
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-8 contct_bg_right_row colmd-8_cntct">
            <div className="contct_right_cnt_bg contct_bg_right">
              <div className="contct_right_cnt">
                <div className="download_list">
                  <h3 className="widget-title"><span>Contact our team</span></h3>
                </div>
              </div>
              <form id="contact-form"  >    
                <input className="form-control" name="SalesEmail[email_to]" id="SalesEmail_email_to" type="hidden" />                                       
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="SalesEmail_first_name">Your Full Name</label><span className="mnd_fld">*</span><input className="form-control" placeholder="Enter your full name" name="SalesEmail[first_name]" id="SalesEmail_first_name" type="text" />                          
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="SalesEmail_email">Email</label><span className="mnd_fld">*</span><input className="form-control" placeholder="yourname@company.com" name="SalesEmail[email]" id="SalesEmail_email" type="text" />                         
                    </div>
                  </div>
                </div>
                <div className="row">
                 
                  
                </div>
                
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="SalesEmail_details">Message</label> <span className="mnd_fld" /><textarea className="form-control" rows={6} placeholder="Provide us details about your enquiry so that it can help you better" name="SalesEmail[details]" id="SalesEmail_details" defaultValue={""} />                    
                    </div>
                  </div>
                  <div className="col-md-12">
                   
                  </div>
                  <div className="col-sm-12"> 
                    <input className="btn-theme" type="submit" name="yt0" defaultValue="Submit" />
                    <span className="iconInput" data-fancybox data-animation-duration={700} data-src="#animatedModal" href="javascript:;">
                      <div id="success-msg-btn" />
                    </span> 
                    <div style={{display: 'none'}} id="animatedModal" className="animated-modal animated-modal_success">
                      <h2>Thank you for your interest in cloven&works.</h2>
                      <p>You will be shortly contacted by our Happiness team.</p>
                      <img src="../images/checked.svg" width className="img-responsive" />
                    </div>
                  </div>  
                </div>  
                <input className="form-control" name="SalesEmail[country_code]" id="SalesEmail_country_code" type="hidden" /><input className="form-control" name="SalesEmail[ip_address]" id="SalesEmail_ip_address" type="hidden" defaultValue="49.207.213.121" />                    <input type="hidden" name="session_id" defaultValue="624bee02276f9" />        
              </form>   
            </div>
          </div>
        </div>
        <br/>
       
        
        
      </div>
    </div>
    <Footer/>
   
  </div>
  )
}

export default contact