import React, { useState, useEffect } from "react";
import "./About.css";

// import mission1 from "../assets/mission1.jpg"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  const handleScroll = () => {
    const scroll = window.scrollY;
    const newScrollDirection = scroll > 100 ? "down" : "up";

    if (newScrollDirection !== scrollDirection) {
        setScrollDirection(newScrollDirection);
      }
  
      setIsVisible(scroll > 100);
    };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Main-Div">
        <ul
          className={isVisible ? "text" : "text hidden"}
          style={{ top: "20%" }}
        >
          <li>V</li>
          <li className="ghost">O</li>
          <li className="ghost">R</li>
          <li className="ghost">T</li>
          <li className="ghost">E</li>
          <li>X</li>
        </ul>
        <ul className={isVisible ? "text" : "text hidden"}>
          <li className="spaced">D</li>
          <li className="ghost">I</li>
          <li className="ghost">S</li>
          <li className="ghost">C</li>
          <li className="ghost">O</li>
          <li className="ghost">V</li>
          <li className="ghost">E</li>
          <li className="ghost">R</li>

          <li>-C</li>
          <li className="ghost">O</li>
          <li className="ghost">N</li>
          <li className="ghost">N</li>
          <li className="ghost">E</li>
          <li className="ghost">C</li>
          <li className="ghost">T</li>

          <li>-E</li>
          <li className="ghost">X</li>
          <li className="ghost">P</li>
          <li className="ghost">L</li>
          <li className="ghost">O</li>
          <li className="ghost">R</li>
          <li className="ghost">E</li>
        </ul>
      </div>

      <div className={`second-header ${isVisible ? "visible" : "transition"}`}>
        <div className="story">Our Story</div>
        <span className="sub-story">
          Vortex was born out of a shared vision to revolutionize the way we
          discover and engage with visual content online. It all started with a
          simple idea: to create a platform that seamlessly aggregates the best
          visual content from across the web, making it easily accessible to
          everyone. What began as a passion project quickly evolved into a
          dynamic platform driven by innovation, creativity, and a commitment to
          empowering users worldwide.
        </span>
      </div>

     
      

    
      
    </>
  );
};

export default About;
