import React from 'react'
import click from './images/current/click.gif'
import connect from './images/current/connect.gif'
import loop from './images/current/loop.gif'
import security from './images/current/security.gif'
import smartboy from './images/current/smartboy.gif'
import users from './images/current/users.gif'
import vip from './images/current/vip-icon.gif'
import scalability from './images/current/scalability.gif'
import work from './images/current/work.gif'
import admin from './images/current/men.gif'
import student from './images/current/student.gif'
import teacher from './images/current/teacher.gif'

function whyus() {
  return (
    <div>
       <div className="container-fluid wrap_fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="wow inner fadeInLeft image_1">
                  <img src="images/bg-infobox-1.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading clearfix heading-v1">   
                      <div className="heading-inner">                         
                        <h2>Why School ERP?</h2> 
                      </div>                         
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="blog_content">   
                      <p>Cloven&Works is a school management software. It’s an SIS, Timetable manager, Fees manager, bookstore... all in one bundle. So your people, academics, admissions, billing, scheduling, and communications all work together. Your whole school can use it— Staff, faculty, parents and students. And your information is more accessible and useful than ever.
                      </p>                   
                    </div>
                  </div>
                </div> 
                <ul className="mobile_ftrList">
                  <li className="wow inner fadeInLeft animated" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                    <div className="mobile-app_item">
                      <h3 className="mb-10"><i className="icon-documents"><img src={admin} className="img-responsive" /></i>Admin Portal</h3>
                    </div>
                  </li>
                  <li className="wow inner fadeInLeft animated" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                    <div className="mobile-app_item">
                      <h3 className="mb-10"><i className="icon-documents"><img src={student} className="img-responsive" /></i>Teacher Portal</h3>
                    </div>
                  </li> 
                 
                  <li className="wow inner fadeInLeft animated" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                    <div className="mobile-app_item">
                      <h3 className="mb-10"><i className="icon-documents"><img src={teacher} className="img-responsive" /></i>Student Portal</h3>
                    </div>
                  </li> 
                  
                </ul>                            
              </div>            
            </div>        
          </div>
        </div> 
       
        <div className="container-fluid container_grayBg">
          <div className="container">
            <div className="heading_p">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading clearfix heading-v1">   
                    <div className="heading-inner  h2">                         
                      <h2>Why Choose Cloven&Works?</h2> 
                    </div>                         
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_content">   
                    <p>Cloven&Works has everything you need to keep things running smoothly all in one place.</p>                   
                  </div>
                </div>
              </div>
            </div> 
            <div className="row">
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={click} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Easy to Use</h3>
                      <p>Better UI will result in more engagement from students, teachers and parents. More engagement leads to more loyalty. </p>
                    </div>  
                  </div>
                </div> 
              </div>  
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={connect} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Always Connected</h3>
                      <p>Emails, SMS, Internal messages and Push notifications from Cloven&Works make sure that everyone stays in the loop.</p>
                    </div>  
                  </div>
                </div>
              </div>   
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={security} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Serious Security</h3>
                      <p>Industry leading security keeps your valuable data secure. Additional security measures can be added to meet your needs.</p>
                    </div>  
                  </div>
                </div>
              </div>  
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={work} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Customizable</h3>
                      <p>Cloven&Works is flexible enough to perform almost any kind of school management function. We can modify and alter 
                        Cloven&Works according to meet your special  needs.
                      </p>
                    </div>  
                  </div>
                </div>
              </div>         
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={scalability} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Scalable</h3>
                      <p>Cloven&Works is built to handle the growing amount of data in an institution with almost zero impact on the performance.</p>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={smartboy} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Smart</h3>
                      <p>Our graphical charts aggregates your school’s data, and turns it into useful information. So that you can take more informed decisions, faster.</p>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={users} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Unlimited Users</h3>
                      <p>All our plans support unlimited users. This way your institution can continue to grows without rising subscription costs.</p>
                    </div>  
                  </div>
                </div>
              </div>   
              <div className="col-md-3">
                <div className=" wow inner fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                  <div className="wrap_iconBox wrap_icon_center">
                    <div className="iconimg"><img src={vip} className="img-responsive" /></div> 
                    <div className="icon_content">
                      <h3>Premium Support</h3>
                      <p>We feel highly privileged to attend to all of our customer’s support needs. Got questions or need some training? We’ve got your back. To get started, go to our <a href="help.html">
                          Help page</a></p>
                    </div>  
                  </div>
                </div> 
              </div>          
            </div>    
          </div> 
        </div>
    </div>
  )
}

export default whyus