  import React from "react";
  import "./History.css";
  import h1 from "../SubPage/History.png";
  import hist1 from "../SubPage/walk-unsplash.jpg";
  import hist2 from "../SubPage/cam.jpg";
  import hist3 from "../SubPage/dev.jpg";
  import hist4 from "../SubPage/mih.jpg";
  import hist5 from "../SubPage/jeetvo.jpg";
  import lap1 from "../SubPage/bglaptop.jpg";

  function History() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
      });
    };

    return (
      <>
        <div className="h-head">
          <span className="hello-u">hello users</span><br/>
          <span className="hello-u">Hello content users</span>
          <img className="head-image" src={h1} alt="" />
        </div>
        <div className="center-section">
          <div className="sec1">
            <span className="he1">Welcome to this Vortex'x History blog</span>
            <p className="he2">Founding Vision</p>
            <p className="he3">
              Founding Vision Vortex traces its origins back to when a group of
              visionary individuals came together with a shared vision: to create
              a revolutionary platform that would redefine the way people
              discover, curate, and share visual content online. Driven by a
              passion for innovation and a belief in the transformative power of
              imagery, the founding team embarked on a journey to build a dynamic
              hub where creativity knows no bounds.
            </p>
          </div>
          <div className="sec2">
            <p className="he4">Community Growth and Engagement</p>
            <p className="he5">
              With its launch, Vortex quickly gained traction among users from
              diverse backgrounds and interests. The platform's intuitive
              interface, curated content, and robust features resonated with
              users, driving rapid adoption and growth. As the Vortex community
              continued to expand, so too did the diversity of visual content
              shared and curated on the platform. From stunning photography to
              captivating artwork, Vortex became a vibrant ecosystem where
              creativity flourished.
            </p>
          </div>
          <div className="sec3">
            <div className="image-with-text">
              <img className="image" src={hist1} alt="" />
              <span className="image-text">VORTEX JOURNEY</span>
            </div>
          </div>
        </div>

        <div className="l1">
        <div className="laptop-with-text">
              <img className="laptopimg" src={lap1} alt="" />
              <span className="laptopp-text">VORTEX JOURNEY</span>
            </div>
        </div>

        {/* /////////// */}

        <div className="middle-section">
          <div className="middle-sec3">
            <div className="image-with-text1">
              <img className="image1" src={hist2} alt="" />
              <span className="image-text1">Vortex's Future scope</span>
            </div>
          </div>

          <div className="middle-sec1">
            <span className="e1">
              Vision for the Future: Advancing Vortex's Impact and Innovation
            </span>
            <p className="e2">Evolution and Innovation</p>
            <p className="e3">
              As Vortex continued to grow, so did our commitment to innovation and
              excellence. We listened to feedback from our users, constantly
              iterating and improving the platform to better meet their needs.
              From introducing new features like personalized recommendations and
              advanced search filters to optimizing performance and scalability,
              every update was guided by our mission to deliver the best possible
              experience for our community.
            </p>
          </div>
          <div className="middle-sec2">
            <p className="e4">Looking Ahead</p>
            <p className="e5">
              As we reflect on our journey so far, we are filled with gratitude
              for the incredible support and enthusiasm of our users. As we look
              to the future, our commitment to innovation, creativity, and
              community remains as strong as ever. With exciting new features,
              partnerships, and initiatives on the horizon, we are more determined
              than ever to continue pushing the boundaries of visual discovery and
              inspiring creativity around the world.
            </p>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <img className="img2-1" src={hist3} alt="Image Alt" />
            <div className="gbox">
              <p className="grid-cont1">Persistence and Precision</p>
            </div>
            <p className="gp1">
              In the world of coding and design, I found my canvas with Vortex.
              This project taught me the power of persistence and precision. From
              shaping the architecture to refining the UI, every line of code was
              a stroke on our collective masterpiece. Vortex is not just a
              platform; it's a reflection of our shared dedication and my journey
              of discovering the artistry in programming.

            </p>
            <br/>
            <span className="dev">BY DEV GAJJAR</span>

          </div>
          <div className="grid-item">
            <img className="img2-1" src={hist4} alt="Image Alt" />
            <div className="gbox">
              <p className="grid-cont2">Strength of Collaboration</p>
            </div>
            <p className="gp2">
              Vortex is more than a project; it's a testament to the strength of
              collaboration. Working on everything, I discovered the beauty of
              seamless teamwork. Each challenge was an opportunity to learn, and
              every success was a celebration of our combined efforts. Vortex
              taught me that true innovation arises when skills harmonize, and
              visions align.
            </p>
            <br/>

            <span className="mihir">BY MIHIR SOLANKI</span>
          </div>
          <div className="grid-item">
            <img className="img2-1" src={hist5} alt="Image Alt" />
            <div className="gbox">
              <p className="grid-cont3">Conceptualization to Execution</p>
            </div>
            <p className="gp3">
              Building Vortex was a transformative experience that extended far
              beyond lines of code. From conceptualization to execution, I dived
              into the intricacies of frontend and backend development, and the
              art of project management. Vortex is a story of adaptability and
              growth, where challenges became stepping stones, and our shared
              dedication forged an unforgettable chapter in my journey of learning
              and creating.
            </p>
            <br/>
            <span className="jeet">BY JEET SHAH</span>

          </div>
          {/* Add more grid items as needed */}
        </div>
        {/* Button to scroll to top */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          Scroll to Top
        </button>
      </>
    );
  }

  export default History;
