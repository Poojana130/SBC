import React from "react";

import {Link, NavLink} from "react-router-dom";
import './GameZone.css';
import './Footer2.css';
import Game from '../assets/images/game.svg';
import Smart from '../assets/images/gamezonelogo.svg';
import Poly from '../assets/images/Poly.svg';
import Logo2 from '../assets/images/Logo2.png';
import R1 from '../assets/images/r1.svg';
import R2 from '../assets/images/r2.svg';
import R3 from '../assets/images/r3.svg';
import R4 from '../assets/images/r4.svg';
import G1 from '../assets/images/G1.jpg';
import Star from '../assets/images/Star.svg';
import G2 from '../assets/images/G2.jpg';
import G3 from '../assets/images/G3.jpg';
import G4 from '../assets/images/G4.jpg';
import G5 from '../assets/images/G5.jpg';


function GameZone()
{
     return(
      <><section className="navbar1">
               <ul>
                    <li className="card1">
                         <img className="game1" src={Game} alt="game" />
                         <span className="dev1"><Link to="/gamezone">Game Development</Link></span>
                    </li>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "a1"}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : "a1"}>About Us</NavLink></li>
                    <li><NavLink to="/gamezone" className={({ isActive }) => isActive ? "active" : "a1"}>Games</NavLink></li>
                    <li><NavLink to="/programs" className={({ isActive }) => isActive ? "active" : "a1"}>Programs</NavLink></li>
                    <li><Link to="/gamezone"><img src={Smart} alt="logo" /></Link></li>

               </ul>
            
          </section>
            <div className="gameb">
          <h3>Welcome to Game Zone!!</h3>
          <div className="play">
               <img  src={Poly} alt="" />
            <h2>Play Game   </h2>
          </div>
          </div>

          <section className="gamezone">
               <div className="gameee">
                    <div className="g1">
                         <h3>Level Up Your Creativity with Gaming!</h3>
                         <p>Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. At Smart Brain Creations, students don’t just play games, they design, build, and bring them to life. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation. These games represent more than just entertainment — they are a showcase of future-ready skills, collaboration, and the limitless potential of young creators.</p>
                    </div>

                    <div className="gg">
                   <p><img src={R1} alt="game1" className="r1"/></p>
                   <p><img src={R2} alt="game1" className="r2"/></p>
                    <p><img src={R3} alt="game1" className="r3"/></p>
                     <p><img src={R4} alt="game1" className="r4"/></p>
                    </div>

               </div>


          </section>

      <section className="gamezone2">
          <div className="gg2"> 
                    <h3>
                         About Our Game Development Division
                    </h3>
                    <p>We're pioneering a unique approach where education and game development intersect. Our students don't just learn about games — they actively participate in creating real games that get launched and played by thousands of users worldwide.</p>
               </div>

      </section>

      <section className="gamezone3">
  <div className="box">
                        
                         <p className="p1">12+</p>
                         <p className="p2">Real Game Launches</p>
                       </div>

                         <div className="box">
                        
                         <p className="p1">200+</p>
                         <p className="p2">Student Collaborators</p>
                       </div>
                         <div className="box">
                        
                         <p className="p1">10K+</p>
                         <p className="p2">Active Players</p>
                       </div>


      </section>
       <section className="gamezone4">
          <div className="gg3"> 
                    <h3>
                         Games We're Launching
                    </h3>
                    <p>Real games, real impact, created with student collaboration</p>
               </div>
               
            


      </section>
      

<section className="gameShowcase">
  {/* First Layout: Text Right */}
  <div className="gameShowcase-content">
    <div className="image-side">
      <img src={G1} alt="featured game" />
    </div>
    <div className="text-side">
      <h3>Level Up Your Creativity with Gaming!</h3>
      <p>
        Explore our first-ever student-powered games — unique creations where imagination 
        meets technology, and ideas transform into interactive adventures. At Smart Brain 
        Creations, students don’t just play games, they design, build, and bring them to life. 
        Every challenge, character, and storyline is crafted with creativity, shaped by design, 
        and powered by innovation. These games represent more than just entertainment — they are 
        a showcase of future-ready skills, collaboration, and the limitless potential of young creators.
      </p>

      <div className="stars">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>

      <button className="downloadBtn">Download</button>
    </div>
  </div>

  {/* Gallery Row */}
  <div className="gameShowcase-gallery">
    <img src={G2} alt="game" />
    <img src={G3} alt="game" />
    <img src={G4} alt="game" />
    <img src={G5} alt="game" />
  </div>

  {/* Second Layout: Text Left */}
  <div className="gameShowcase-content reverse">
    <div className="text-side">
      <h3>Level Up Your Creativity with Gaming!</h3>
      <p>
        Explore our first-ever student-powered games — unique creations where imagination 
        meets technology, and ideas transform into interactive adventures. At Smart Brain 
        Creations, students don’t just play games, they design, build, and bring them to life. 
        Every challenge, character, and storyline is crafted with creativity, shaped by design, 
        and powered by innovation. These games represent more than just entertainment — they are 
        a showcase of future-ready skills, collaboration, and the limitless potential of young creators.
      </p>

      <div className="stars">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>

      <button className="downloadBtn">Download</button>
    </div>
    <div className="image-side">
      <img src={G1} alt="featured game" />
    </div>
  </div>

  {/* Gallery Row */}
  <div className="gameShowcase-gallery">
    <img src={G2} alt="game" />
    <img src={G3} alt="game" />
    <img src={G4} alt="game" />
    <img src={G5} alt="game" />
  </div>
</section>





            


           <div className="foot11">

          <footer>
                  <div className="col1">
                    <img class="logo" src={Logo2} alt="" height="50px" width="100px" />
          
                    <p>
                      Creative & Digital Education for <br />Future-Ready Students.<br /> Empowering young minds through <br />innovative learning experiences.
                    </p>
          
                  </div>
          
                  <div className="col1">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Programs</li>
                      <li>Labs</li>
                      <li>Why it works</li>
                      <li>Showcase</li>
                      <li>Game Development</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
          
                  <div className="col1">
                    <h4>Follow Us</h4>
                    <ul>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>Youtube</li>
                      <li>LinkedIn</li>
                    </ul>
                  </div>
          
          
                  <div className="col1">
                    <h4>Contact Information</h4>
                    <ul>
                      <li>Location : Bangalore, Karnataka</li>
                      <li>Phone : +91 9148876700</li>
                      <li>Email: smartbraincreations@gmail.com</li>
                    </ul>
                  </div>
                </footer>
                <div id="copy-right1">
                    <p>© 2025 Smart Brain Creations. All Rights Reserved.</p>
                  </div>
                  </div>
          </>
     );
}

export default GameZone;