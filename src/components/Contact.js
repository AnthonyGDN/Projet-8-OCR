import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Ouvre la modal et empêche la navigation vers le lien
  const openEmailModal = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  // Ferme la modal
  const closeEmailModal = (e) => {
    e.stopPropagation(); // Évite la fermeture immédiate si on clique dans la modal
    setShowEmailModal(false);
  };

  return (
    <main className="contact-page">
      <h2>Contact</h2>
      <p>Vous pouvez me contacter par e‑mail ou via mes réseaux :</p>

      <ul className="contact-list">
        <li>
          <a href="mailto:anthony.gdn0@gmail.com" onClick={openEmailModal}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img 
              src={process.env.PUBLIC_URL + "/EMAILLOGO.png"} 
              alt="Email" 
              className="icon-img"
            />
          </a>

          <a href="https://www.linkedin.com/in/anthony-gdn/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img 
              src={process.env.PUBLIC_URL + "/LINDEDINLOGO.png"} 
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
              src={process.env.PUBLIC_URL + "/GITLOGO.png"} 
              alt="GitHub" 
              className="icon-img"
            />
          </a>
        </li>
      </ul>

      {showEmailModal && (
        <div className="modal" onClick={closeEmailModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Adresse e‑mail</h3>
            <p>anthony.gdn0@gmail.com</p>
            <button onClick={() => setShowEmailModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;