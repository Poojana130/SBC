import React from "react";
import './Aboutus.css';
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import b from '../assets/images/b.svg';
import book from '../assets/images/book.svg';
import student from '../assets/images/student.svg';
import badge from '../assets/images/badge.svg';



function Aboutus()
{
     return(
          <section className="about">
               <div className="bg">
                    <h3>About SmartBrain Creations</h3>
                    <p>Digital Media. Design. Innovation. All from inside your school.</p>


                    <br />
                    <br />
                    <div className="btns">
                         <button className="ex">Explore Programs →</button>

                         <button className="cu">Contact Us</button>

                    </div>
               </div>


               <div className="about1">
                    <h3>About SmartBrain Creations</h3>
                    <p>We believe every student has unique creative potential waiting to be unlocked. Our mission is to provide innovative, hands-on learning experiences that prepare students for the digital future while fostering creativity and critical thinking.</p>
               </div>

               <div className="aboutfeature">
                    <div className="box1">
                         <h3>Our Vision</h3>
                         <p>To create a generation of confident, creative, and digitally literate students who are equipped with 21st-century skills and ready to innovate in an increasingly digital world.</p>
                    </div>
                 <div className="featureimg">
                  <img src={f1} alt="about feature"></img>
                 </div>

               </div>

                   <div className="aboutfeature">
                     <div className="featureimg">
                  <img src={f2} alt="about feature"></img>
                 </div>
                    <div className="box1">
                         <h3>Our Mission</h3>
                         <p>To revolutionize education by integrating creative and digital learning into traditional curricula, making quality creative education accessible to every student through school-integrated programs that align with NEP 2020 guidelines.</p>
                    </div>
                

               </div>
               <div className="aboutfeature2">
  <div className="boxb">
                 <img src={b} alt="qoutes" />
                 <h3>"You were born with ideas no one else has — my job is to give you the tools to bring them to life."</h3>
                    <p>— Founder, SmartBrain Creations</p>
               </div>

               </div>

                <div className="about1">
                    <h3>What Sets Us Apart</h3>
                    <p>Our unique approach to creative education</p>
               </div>

               <div className="aboutfeature3">
                    <div className="apartbox">
                         <img src={book} alt="book" />
                         <h3>School-Integrated Programs</h3>
                         <p>Seamlessly integrated into your existing curriculum with NEP 2020 alignment</p>
                    </div>

                    <div className="apartbox">
                         <img src={student} alt="student" />
                         <h3>Trained Faculty</h3>
                         <p>Expert educators provided and trained to deliver high-quality creative education</p>
                    </div>
                    <div className="apartbox">
                         <img src={badge} alt="badge" />
                         <h3>Proven Results</h3>
                         <p>Track record of improving student confidence, creativity, and school reputation
                              <br></br>
               
                         </p>
                    </div>

               </div>

               <div className="about1">
                    <h3>Ready to Bring Creative Education to Your School?</h3>
                    <p>Let's discuss how we can tailor our programs to meet your school's unique needs.</p>
               </div>

               <div className="btns2">
                 <button className="cous">Contact Us</button>
                 <button className="view">View  Programs</button>
               </div>

             

          </section>
     )
}

export default Aboutus;