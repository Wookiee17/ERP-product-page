import React from 'react'
import Header from "./header" 
import Footer from "./footer"
import loop from "../component/images/current/loop.gif"; 
import fees from "./images/current/fees.gif"; 
import story from "./images/current/story.gif"; 
import student1 from "./images/current/student.gif"; 
import usercard from "./images/current/usercard.gif"; 
import dashboard from "./images/current/dashboard.gif"; 
import news from "./images/current/news.gif"; 
import books from "./images/current/books.gif"; 
import exam from "./images/current/exam.gif"; 
import users from "./images/current/users.gif"; 
import lib from "./images/current/product/lib.gif"; 
import bus from "./images/current/product/bus.gif"; 
import hostel from "./images/current/product/hostel.gif"; 
import men from "./images/current/men.gif"; 
import admin from "./images/current/erp-admin.png" 
import teacher from "./images/current/erp-teacher.png" 
import student from "./images/current/erp-student.png" 
export default function product() {
  return (
    <div>
<div>
            <Header/>       
          <div className="container-fluid partnertxt_con product_img innerbannermask">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="partnertxt_con">
                    <div className="banner-details">
                      <h5>A fine choice among web-based school ERP software.</h5>
                      <p>cloven&works offers a user friendly way to nurture students, save staff hours, support teachers and satisfy stakeholders.</p>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={loop} className="img-responsive" />
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="container-fluid container_grayBg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  
                  <p className="p_center">From streamlining processes, automating tasks, and empowering teachers to boosting parental involvement and engaging students, cloven&works has been helping schools to improve performance at all levels for the past 8 years.</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  <div className="heading clearfix heading-v1">   
                    <div className="heading-inner">                         
                      <h2>Main Modules</h2> 
                      <small className="subheading">10 modules</small> 
                    </div>                         
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="modul_list">   
                    <ul>
                      <li><a href="javascript:void(0)">Dashboard Module<span className="mdl_listImg"><img src={dashboard} width={40} className="img-responsive" /></span></a></li>
                      <li><a href="javascript:void(0)">News and Events-Calendar<span className="mdl_listImg"><img src={news} width={40} className="img-responsive" /></span></a></li>
                      <li><a href="javascript:void(0)">Student Module<span className="mdl_listImg"><img src={usercard} width={40} className="img-responsive" /></span></a></li>                        
                      <li><a href="javascript:void(0)">Admin Module<span className="mdl_listImg"><img src={men} width={40} className="img-responsive" /></span></a></li>                        
                      <li><a href="javascript:void(0)">Examination Module<span className="mdl_listImg"><img src={exam} width={  40} className="img-responsive" /></span></a></li>                        
                      
                      <li><a href="javascript:void(0)">Teacher Module<span className="mdl_listImg"><img src={usercard} width={40} className="img-responsive" /></span></a></li> 
                      <li><a href="javascript:void(0)">Course Module<span className="mdl_listImg"><img src={books} width={40} className="img-responsive" /></span></a></li> 
                      <li><a href="javascript:void(0)">User Role Management<span className="mdl_listImg"><img src={users} width={40} className="img-responsive" /></span></a></li>                        
                      </ul>                         
                  </div>
                </div>        
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  <div className="heading clearfix heading-v1 heading-v13">   
                    <div className="heading-inner">                         
                      <h2>Upcoming Modules</h2> 
                      <small className="subheading">8 modules</small> 
                    </div>                         
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="modul_list">   
                    <ul>
                      <li><a href="javascript:void(0)">Hostel Module<span className="mdl_listImg"><img src={hostel} width={40} className="img-responsive" /></span></a></li>
                      <li><a href="javascript:void(0)">Transport Module<span className="mdl_listImg"><img src={bus} width={40} className="img-responsive" /></span></a></li>                        
                      <li><a href="javascript:void(0)">Library Module<span className="mdl_listImg"><img src={lib} width={40} className="img-responsive" /></span></a></li> 
                      
                    </ul>                         
                  </div>
                </div>        
              </div> 
            </div>        
          </div> 
         
         
          <div className="container-fluid wrap_fluid">
            <div className="container">
              <div className="p-faq-con clearfix">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading clearfix heading-v1">   
                      <div className="heading-inner module_block ">                         
                        <h2><span className="core_m">Detail about Modules</span></h2>  
                      </div>                         
                    </div>
                  </div>
                </div>
               
                {/*-----*/}
                <div className="row">
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Admin Dashboard</h3>
                    <div className="iconimg"><img src={admin} className="img-responsive"  style={{width:"100%", height:"280px"}}/></div> 
                    
                    <p>Create exams and set various grading levels batchwise and observe the progress of each student.</p>
                  </div>
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Student Dashboard</h3>
                    <div className="iconimg"><img src={student} className="img-responsive" style={{width:"100%", height:"280px"}} /></div> 
                    <p>Create and monitor various employee and student attendance records. Get the details of availed and available leaves.</p>
                  </div>
                </div>
                <div className="row"> 
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Teacher Dashboard</h3>
                    <div className="iconimg"><img src={teacher} className="img-responsive"style={{width:"100%", height:"280px"}} /></div> 
                    <p>The comprehensive timetable Feature in cloven&works, allows generating, maintaining and monitoring timetables with speed and ease.</p>
                  </div>
                  <div className="col-sm-6 pricing_btm_org">
                    <h3>Fees Module (PayPal Integration)</h3>
                    <div className="iconimg"><img src={fees} className="img-responsive" style={{width:"100%", height:"280px"}}/></div> 
                    <p>A flexible Fee management system to Create, monitor and manage paid and payable fees.</p>
                  </div>
                </div> 
               
               
              </div>
            </div>
          </div>
         
          <div className="container-fluid partnertxt_con what_see_img custm_size innerbannermask">
            <div className="container">
              <div className="col-lg-12">
                <div className="partnertxt_con" style={{padding: '40px 0'}}>
                  <h5>Like what you see ?</h5>
                  <p>Please submit your questions and a Happiness Officer will contact you shortly!</p>
                  <ul className="help-ul">
                    
                    <li><a href="/Contact" className="btn-theme btn-theme_red">Talk to Sales</a></li> 
                  </ul>                    
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          </div>  

    </div>
  )
}
