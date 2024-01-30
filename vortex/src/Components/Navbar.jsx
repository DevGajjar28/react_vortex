import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hambar from '../assets/burger.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';


function Navbar() {
  const location = useLocation();

  
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Conditionally render the Navbar based on the current route
  if (location.pathname === "/Register" || location.pathname === "/Register") {
    return null;
  }
  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'responsive' : ''}`}>
        <div className="logo">Vortex</div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          <img src={hambar} alt="menu icon" />
        </div>


        <div className={`links ${isMenuOpen ? 'responsive' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/Inspiration">Inspiration</Link>
          <Link to="/advertise">Advertise</Link>
          <Link to="/premium">Premium</Link>
          <Link to="/login">Login</Link>

          <div className="more-link">
            <Link to="/More">More</Link>
            <div className="sub-bar">
              <div className="sections">
                <div className="sub-section">
                  <div className="sub-header">Company</div>
                  <Link to="/about">About us</Link>
                  <Link to="/history">History</Link>
                  <Link to="/contact">Contact us</Link>
                </div>
                <div className="sub-section">
                  <div className="sub-header">Contributor</div>
                  <Link to="/become-contributor">Become-One</Link>
                  <Link to="/collection">Collection</Link>
                </div>
              </div>
              <div className="social-links">
                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter}alt="twitter" />
                </Link>
                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instgram" />
                </Link>
              </div>
            </div>
          </div>
          
          

          {/* <Link to="#"><img src={hembar} alt="menu baar" ></img></Link> */}
        </div>
        
      </div>
      

    </>
  );
}
export default Navbar;
