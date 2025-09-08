import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";
import Logo2 from '../assets/images/Logo2.png'
function Footer()
 {
 
    return (
      <><footer className="foot">
        <div className="col">
          <img className="logo" src={Logo2} alt="" height="50px" width="100px" />

          <p>
            Creative & Digital Education for <br />Future-Ready Students.<br /> Empowering young minds through <br />innovative learning experiences.
          </p>

        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/labs">Labs</NavLink></li>
            <li><NavLink to="/whyitworks">Why it works</NavLink></li>
            <li><NavLink to="/Showcase">Showcase</NavLink></li>
            <li><NavLink to="/gamezone">Game Development</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="col">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
          </ul>
        </div>


        <div className="col">
          <h4>Contact Information</h4>
          <ul>
            <li>Location : Bangalore, Karnataka</li>
            <li>Phone : +91 9148876700</li>
            <li>Email: smartbraincreations@gmail.com</li>
          </ul>
        </div>
      </footer><div id="copy-right">
          <p>© 2025 Smart Brain Creations. All Rights Reserved.</p>
        </div></> 
    );
  }


export default Footer