import React from "react";
import "./Portfolio.css";
import Myimg from "./MyImg.jpg";

const PortfolioBody = ({ goToContact }) => {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="portfolio-header">
        <h1><b>Vanaj Kalyan S R</b></h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li onClick={goToContact} style={{ cursor: "pointer" }}>
              Contact
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="portfolio-main">
        <div className="left-section">
          <img
            src={Myimg}
            alt="Vanaj Kalyan S R"
            className="main-photo"
          />
        </div>
        <div className="right-section">
          <h2>My Portfolio</h2>
          <p>
            I am Vanaj Kalyan S R. Pursuing my B.E in Computer Science (Artifical Intelligence and Machine Learning) at Sri Eshwar College Of Engineering.
          </p>
          <div className="actions">
            <button className="Achievement">Achievements</button>
            <button className="Contact">Contact Me</button>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default PortfolioBody;
