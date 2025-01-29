import React from "react";
import "./Contact.css";

const Contact = ({ goToHome }) => {
  return (
    <div className="contact-page">
      <button className="back-button" onClick={goToHome}>
        Back to Home
      </button>
      <h1>Contact Me</h1>
      <p>Feel free to reach out!</p>
      <div className="contact-info">
        <p>Email: iamvanaj@gmail.com</p>
        <p>Phone: +91 8825547951</p>
        <p>Address:Koodal Nagar, Madurai, Tamilnadu, India</p>
      </div>
    </div>
  );
};

export default Contact;
