// import React from "react";
// import { NavLink , Link} from "react-router-dom";
// import Logo from "../assets/images/logo.png";
// import Game from "../assets/images/g15.svg";
// import "./Header.css";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <ul>
//         <li><Link to="/"><img src={Logo} alt="logo" /></Link></li>
//           <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "a1"}>Home</NavLink></li>
//   <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : "a1"}>About Us</NavLink></li>
//   <li><NavLink to="/programs" className={({ isActive }) => isActive ? "active" : "a1"}>Programs</NavLink></li>
//   <li><NavLink to="/labs" className={({ isActive }) => isActive ? "active" : "a1"}>Labs</NavLink></li>
//   <li><NavLink to="/events" className={({ isActive }) => isActive ? "active" : "a1"}>Events</NavLink></li>
//   <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "a1"}>Contact Us</NavLink></li>
//         <li className="card">
//           <img className="game" src={Game} alt="game" />
//           <span className="dev"><Link to="/gamezone">Game Zone</Link></span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;





import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Game from "../assets/images/g15.svg";
import "./Header.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo + Hamburger */}
      <div className="nav-header">
       

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
           <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "a1")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "a1")}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/programs" className={({ isActive }) => (isActive ? "active" : "a1")}>
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/labs" className={({ isActive }) => (isActive ? "active" : "a1")}>
            Labs
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "a1")}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "a1")}>
            Contact Us
          </NavLink>
        </li>
        <li className="card">
          <img className="game" src={Game} alt="game" />
          <span className="dev">
            <Link to="/gamezone">Game Zone</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

