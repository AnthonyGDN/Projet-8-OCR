import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <main className="contact-page">
      <h2>Contact</h2>
      <p>Vous pouvez me contacter par e‑mail ou via mes réseaux :</p>

      <ul className="contact-list">
        <li>
          <a href="anthony.gdn0@gmail.com">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img 
              src="/EMAILLOGO.png" 
              alt="Email" 
              className="icon-img"
            />
          </a>

          <a href="https://www.linkedin.com/in/anthony-gdn-0a05b235a/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img 
              src="/LINDEDINLOGO.png" 
              alt="LinkedIn" 
              className="icon-img"
            />
          </a>

          <a href="https://github.com/AnthonyGDN">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img 
              src="/GITLOGO.png" 
              alt="GitHub" 
              className="icon-img"
            />
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Contact;
