import React from 'react';
import "./css/bootstrap.min.css";
import "./css/component.css";
import "./css/demo_table.css";
import "./css/landing-style.css";
import "./css/font-awesome.min.css";
import "./css/landing.css";
import "./css/style.css";
import "./css/vertualclassroom.css";
import image1 from "../component/images/osvc-banner/5.gif"; 
import image2 from "../component/images/osvc-banner/6.gif"; 
import image3 from "../component/images/osvc-banner/7.gif"; 
import image4 from "../component/images/osvc-banner/8.gif"; 
function body() {
  return (
    <div>
        <div>
       
        
       
       
        
        {/* menu ends*/} 
        {/* banner starts*/}
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t/*canvas#canvas-snow {position: absolute; top: 0;bottom: 0;left: 0;right: 0; z-index: 6; width:100% !important; height:1000px !important; }*/\n\n    .version-wrap-home{\n      background-color: #421976;\n      padding: 23px 27px;\n      display: inline-block;\n      border-radius: 8px;\n      margin-bottom: 31px;\n    }\n    .version-wrap-home a{\n     /* background-color:#fff  !important;*/\n        color: #fff;\n        margin: 0px 15px;\n        font-weight: 700;\n    }\n\n    .version-wrap-home a:hover{\n      background-color:#fff  !important;\n      color: #324e7c;w\n    }\n    .version-wrap-home p{\n      color: #fff;\n      line-height: 22px;\n      font-weight: 600;\n      font-size: 19px;\n      margin: 0px;\n      font-family: Poppins;\n    }\n    .mult-btn1 {\n        background-color: #E17A52 !important;\n    }\n\n" }} />
        {/* <canvas id="canvas-snow"></canvas> */}
       
        <section id="hero-15" className="bg-scroll hero-section division">
          <div className="container h-100">
            <div className="row row-flex h-100">
              <div className="col-md-7 col-lg-6 col-xl-6 offset-xl-1">
                <div className="hero-body hero-text-right ">
                  <div className="hero-head">
                    <h2>VIRTUAL CLASSROOMS Features</h2>
                    {/*<p>Teach online with Cloven&Works.</p>*/}
                  </div>   
                  <ul className="osvc_li-items">
                    <h3>move to interactive learning tools for online classes  using our ERP .</h3>
                    <li><img className="img-fluid img-responsive" src={image1} width="65px" height="64px"/></li>
                    <li><img className="img-fluid img-responsive" src={image2} /></li>
                    <li><img className="img-fluid img-responsive" src={image3} /></li>
                    <li><img className="img-fluid img-responsive" src={image4} /></li>
                    <li><a href="virtualclassroom.html" target="_blank" className="c_0">5+</a></li>
                  </ul>
                  <div className="btn-holder">
                    <a href="/Contact"  className="hero-btn">Know More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* <div className="hero-head headlogo">
                  <img className="img-fluid img-responsive" src="images/osvc-banner/h4-img-1.png" alt="Cloven&Works" />
                </div> */}
              </div>
            </div>
          </div>
        </section>
        

       
  
         
        {/* <div className="container-fluid wrap_fluid_app">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 hidden-xs">
                <div className="mobile-app-image wow inner fadeInLeft">
                  <img src="images/mobileapp.png" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="heading clearfix heading-v1">   
                  <div className="heading-inner">                         
                    <h2>The convenience of Mobility</h2> 
                    <small className="subheading wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>Available in both Android and IOS</small>  
                  </div>                         
                </div>
                <div className="mobile-app-description  ptb-80">
                  <p className="wow inner fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>Easily launch a custom Android or iOS App branded in your school’s name and logo. Mobile apps reinforce your brand as it’s always visible on the phone’s screen.</p>
                  <ul className="mobile_ftrList">
                    <li className="wow inner fadeInLeft tooltip tooltip-effect-1" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                      <div className="mobile-app_item tooltip-item">
                        <h3 className="mb-10"><i className="icon-documents"><img src="images/faster_mob.png" className="img-responsive" /></i>Faster than mobile Website</h3>
                      </div>
                      <span className="tooltip-content clearfix">
                        <span className="tooltip-text"> Applications are usually 1.5 times faster than mobile websites and they perform actions much faster too</span>
                      </span>
                    </li>
                    <li className="wow inner fadeInLeft tooltip tooltip-effect-1" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                      <div className="mobile-app_item tooltip-item">
                        <h3 className="mb-10"><i className="icon-documents"><img src="images/Push%20Notifications.png" className="img-responsive" /></i>Push Notifications</h3>
                      </div>
                      <span className="tooltip-content clearfix">
                        <span className="tooltip-text"> Push notifications are received on devices in spite of a user opening the App</span>
                      </span>
                    </li> 
                    <li className="wow inner fadeInLeft tooltip tooltip-effect-1" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                      <div className="mobile-app_item tooltip-item">
                        <h3 className="mb-10"><i className="icon-documents"><img src="images/offline_access.png" className="img-responsive" /></i>Instant updates</h3>
                      </div>
                      <span className="tooltip-content clearfix">
                        <span className="tooltip-text"> Applications are usually 1.5 times faster than mobile websites and they perform actions much faster too</span>
                      </span>
                    </li>
                    <li className="wow inner fadeInLeft tooltip tooltip-effect-1" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                      <div className="mobile-app_item tooltip-item">
                        <h3 className="mb-10"><i className="icon-documents"><img src="images/Icon18.png" className="img-responsive" /></i>Branding and Design</h3>
                      </div>
                      <span className="tooltip-content clearfix">
                        <span className="tooltip-text">Your Mobile Application becomes your Brand Ambassador</span>
                      </span>
                    </li> 
                    <li className="wow inner fadeInLeft tooltip tooltip-effect-1" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                      <div className="mobile-app_item tooltip-item">
                        <h3 className="mb-10"><i className="icon-documents"><img src="images/ui_ux.png" className="img-responsive" /></i>Interactive Engagement</h3>
                      </div>
                      <span className="tooltip-content clearfix">
                        <span className="tooltip-text">Our Mobile apps have their own interfaces that allow users to experience two-way immersive experience</span>
                      </span>
                    </li>
                  </ul>
                  <ul className="mob_li">
                    <li>
                      <p className="pt-30 wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                        <a className="btn btn-appstore" target="_blank" href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1160403508&mt=8" role="button" />
                        <a className="btn btn-googleplay" target="_blank" href="https://play.google.com/store/apps/details?id=com.wiwo.openschool" role="button" />
                      </p>
                    </li>
                    <li>
                      <div className="video_sec">
                        <div className="video_sec_btn">
                          <div className="inline_blk"> <img src="images/video_but.png" className="img-responsive" /></div>
                          <div className="inline_blk"> <button className="md-trigger" data-modal="image_library">watch video</button></div>
                        </div>
                        <div className="md-modal md-effect-1" id="image_library">
                          <div className="md-content" style={{paddingBottom: '10px', boxShadow: '1px 2px 8px #000', background: 'none repeat scroll 0 0 #414c5a'}}>
                            <div className="videowrapper">
                              <iframe src="https://www.youtube.com/embed/NpAjx_-PduA" frameBorder={0} allowFullScreen />
                            </div>
                            <div className="you_close">
                              <button className="md-close fancybox-close">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div> 
          </div> 
        </div>  */}
        {/* <div className="container-fluid innerbannermask">
          <div className="container">
            <div className="col-lg-12">
              <div className="partnertxt_con">
                <h5 style={{textAlign: 'center'}}>We have special plans for OEM Partners</h5>
                <h3 style={{textAlign: 'center'}}>Are you ready to increase your revenues?</h3>
                <div className="partnr-ul">
                  <ul>
                    <li> <a className="btn-theme" href="user/partners.html">Partner with us</a> </li>
                  </ul>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="md-overlay" />
       
      
        {/*new--footer*/}
        {/*<div id="cookie-bar">
  <p>This website uses cookies to ensure you get the best experience on our website<a class="learnmr" href="/privacy">Learn More</a> <a class="cb-enable" href="#">Got It!</a>
</div>*/}
        <style dangerouslySetInnerHTML={{__html: "\n  #cookie-bar {\n    background: #111111;\n    height: auto;\n    line-height: 24px;\n    color: #eeeeee;\n    text-align: center;\n    padding: 17px 0;\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 9999;\n  }\n  #cookie-bar .cb-enable {\n    background: #007700;\n}\n#cookie-bar p{\n  padding: 0px;\n  margin: 0px;\n}\n#cookie-bar a {\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 3px;\n    text-decoration: none;\n    padding: 0 6px;\n    margin-left: 8px;\n}\n#cookie-bar a.learnmr {\n   text-decoration: underline\n}\n\n" }} />
        {/*footer section ends*/} 
        {/* Include all compiled plugins (below), or include individual files as needed */} 
        {/*   */}
        {/**/}
        {/*   */}
        {/* Start of HubSpot Embed Code */} 
        {/* End of HubSpot Embed Code */}
        <link rel="stylesheet" type="text/css" href="fancy_box/css/jquery.fancybox.css" />
      </div>
    </div>
  )
}

export default body