import React from "react";
import './Labs.css';
import lab1 from '../assets/images/Labfea1.png';
import star2 from '../assets/images/Star 21.png';
import lab2 from '../assets/images/Lab2.png';
import canva from  '../assets/images/canva.svg';
import figma from '../assets/images/figma.svg';
import adobe from '../assets/images/adobe.svg';
import html from '../assets/images/Html.svg';
import blender from '../assets/images/blender.svg';
import unity from '../assets/images/unity.svg';

function Labs()
{
     return(
         <section className="Labs">
          <div className="labsbg">
                 <h3>Our Creative Labs</h3>
               <p>State-of-the-art facilities designed to inspire creativity and provide hands-on learning experiences in both traditional and digital art forms.</p>
               <br />
               <br />
                    <div className="pbtns">
                     <button className="ex">Explore Programs →</button>

                         <button className="cu">Contact Us</button>
          </div>

          </div>

          <div className="labfeature">

               <div className="labfea">
                    <div className="labfeaimg">
                   <img src={lab1} alt="" />

                    </div>

                    <div className="labfeabox">
                     <h3>Creative Lab</h3>
                     <p>Traditional art meets modern creativity</p>
                    <br />
                    <br />
                     <h2>Activities & Projects</h2>

                     <div className="labfeaboxd">
                         <ul>
                             <li><button>Drawing & Sketching</button></li>
                             <li><button>Painting & Watercolors</button></li>
                             <li><button>Crafts & Paper Art</button></li>
                         </ul>

                          <ul>
                             <li><button>Clay Modeling</button></li>
                             <li><button>Collage & Mixed Media</button></li>
                             <li><button>Textile Arts</button></li>
                         </ul>

                     </div>

                                 <h2>Equipments & Tools</h2>
                                 <div className="stardiv">
                                   <ul>
                                        <li><img src={star2} alt="star2" />&nbsp;Art Supplies</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Drawing Tablets</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Easels</li>
                                   </ul>
                                   <ul>
                                        <li><img src={star2} alt="star2" />&nbsp;Pottery Wheels</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Craft Materials</li>
                                   </ul>

                                 </div>
                    </div>
               </div>





                              <div className="labfea">
                                   
                    <div className="labfeabox">
                     <h3>Digital Lab</h3>
                     <p>Cutting-edge digital creation space</p>
                    <br />
                    <br />
                     <h2>Activities & Projects</h2>

                     <div className="labfeaboxd">
                         <ul>
                             <li><button>Digital Animation</button></li>
                             <li><button>Photography and Editing</button></li>
                             <li><button>Video Production</button></li>
                         </ul>

                          <ul>
                             <li><button>UI/UX Design</button></li>
                             <li><button>Game Design</button></li>
                             <li><button>Graphic Design</button></li>
                         </ul>

                     </div>

                                 <h2>Equipments & Tools</h2>
                                 <div className="stardiv">
                                   <ul>
                                        <li><img src={star2} alt="star2" />&nbsp;High-end computers</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Graphic Tablets</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Professional Cameras</li>
                                   </ul>
                                   <ul>
                                        <li><img src={star2} alt="star2" />&nbsp;Green Screen</li>
                                        <li><img src={star2} alt="star2" />&nbsp;Editing Software</li>
                                   </ul>

                                 </div>
                    </div>
                    <div className="labfeaimg">
                   <img src={lab2} alt="" />

                    </div>

               </div>

          </div>

          <div className="labsend">
               <h3>Professional Software & Tools</h3>
               <p>Students learn using industry-standard software and tools</p>

          </div>

          <div className="softbox">
               <div className="tools">
                   <img src={canva} alt="canva" /> 
                   <h3>Canva</h3>
                   <p>Beginner-friendly design platform</p>

               </div>
                   <div className="tools">
                      <img src={figma} alt="figma" /> 
                   <h3>Figma</h3>
                   <p>Professional UI/UX design tool</p>

               </div>
                   <div className="tools">
                      <img src={adobe} alt="adobe" /> 
                   <h3>Adobe Creative Suite</h3>
                   <p>Industry-standard creative software</p>

               </div>

          </div>


          <div className="softbox">
               <div className="tools">
                   <img src={html} alt="html" /> 
                   <h3>HTML/CSS</h3>
                   <p>Web development fundamentals</p>

               </div>
                   <div className="tools">
                      <img src={blender} alt="blender" /> 
                   <h3>Blender</h3>
                   <p>3D modeling and animation</p>

               </div>
                   <div className="tools">
                      <img src={unity} alt="unity" /> 
                   <h3>Unity</h3>
                   <p>For game developemnts</p>

               </div>

          </div>


          <div className="labsetup">

               <h2>In-School Lab Benefits</h2>

               <div className="labset">
                    <div className="labset1">
                         <h3>Convenient Access</h3>
                         <p>Students learn in familiar environment during school hours</p>
                    </div>
                    <div className="labset1">
                         <h3>Expert Guidance</h3>
                         <p>Trained faculty provide personalized instruction and support</p>
                    </div>
               </div>

                          <div className="labset">
                    <div className="labset1">
                         <h3>Collaborative Learning</h3>
                         <p>Students work together on projects and share creative ideas</p>
                    </div>
                    <div className="labset1">
                         <h3>Portfolio Building</h3>
                         <p>Continuous project work builds impressive portfolios over time</p>
                    </div>
               </div>

          </div>
          <div className="setup">
                <button >
               Set Up Labs in your School
          </button>
          </div>

         


         </section>
     )
}
export default Labs;