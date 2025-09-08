import React from "react";
import "./Header.css";
import F1 from "../assets/images/feature1.jpg";
import F2 from "../assets/images/feature2.jpg";
import F3 from "../assets/images/feature3.jpg";
import F4 from "../assets/images/feature4.png";
import F5 from "../assets/images/Feature5.png";
import F6 from "../assets/images/feature6.png";

function Home() {
  return (
    <>
    <section  className="bd">
      <div>
        <h1>Creative & Digital Education <br /> for Future-Ready Students</h1>
        <p>Digital Media. Design. Innovation. All from inside your school.</p>
      </div>

      <div className="land1">
        <div className="explore">Explore Programs →</div>
        <div className="cu1">Contact Us</div>
      </div>
      </section>

      <section className="header2">
        <p className="disc">Discover What Makes Us Different</p>
        <p className="disc2">
          Explore our comprehensive approach to creative education and see how
          we're <br /> preparing students for the digital future.
        </p>
      </section>

      <section className="feature-section">
        <div className="featurediv">
          <div>
            
          </div>
        </div>
        
      </section>

      <section className="header2">
        <p className="disc">Ready to Transform Education at Your School?</p>
        <p className="disc2">
          Join hundreds of schools already providing cutting-edge creative
          education<br /> to their students.
        </p>

        <div className="land2">
          <div className="explore2">Explore Programs →</div>
          <div className="cu2">Contact Us</div>
        </div>
      </section>
    </>
  );
}

export default Home;
