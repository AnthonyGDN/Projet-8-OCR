import React, { useState } from 'react';
import './Projects.css'; 

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Débogage et optimisation d'un site de photographe",
      description: `Ce projet avais pour objectif de m'enseigner les méthodes et les 
      techniques utilisés pour débuguer efficacement un site ainsi qu'optimisé les performances de celui-ci.</br></br> 
      En plus des performances purement "techniques" comme le temps de chargement du site, 
      le temps de chargement des images du site etc, ce projet ma aussi formé a l'amélioration du référencement 
      du site (le SEO).</br></br> 
      Lors de la production de ce projet j'ai ainsi appris à utiliser des outils tel que Lighthouse, Wave, 
      Rich Snippet ou encore le site validator.w3.</br></br> 
      Voici le lien GitHub du projet : https://github.com/AnthonyGDN/Projet-4-OCR`,
      images: ['/PROJECT1-1.png', '/PROJECT1-2.png', '/PROJECT1-3.png', '/PROJECT1-4.png'],
    },
    {
      id: 2,
      title: "Création d'une application web de location immobiliaire",
      description: `Ce projet fût particulièrement important pour moi, car il m'a fait découvrir React, 
      qui est une bibliothèque Javascript qui permet de construire de manière très efficace des 
      interfaces utilisateur et ce de manière modulaire et réactive.</br></br>
      Lors de ce projet j'ai ainsi découvert la méthode de développement de site avec l'utilisation de react 
      et des outils conçue autour de React comme React Router par exemple.</br></br>
      Voici le lien GitHub du projet : https://github.com/AnthonyGDN/Projet-5-OCR`,
      images: ['/PROJECT2-1.png', '/PROJECT2-2.png', '/PROJECT2-3.png'],
    },
    {
      id: 3,
      title: "Développer le back-end d'un site de notation de livre",
      description: `Ce projet ma enseigné les base du développement du back-end.</br></br>
      Je suis ainsi désormais mettre en place de mécanismes d’inscription, de connexion, 
      et de sécurisation (hashage des mots de passe, tokens JWT, etc.).</br></br>
      Je sais aussi comment crée une base de donné et maintenir celle-ci avec notamment 
      l'implémentation des opération CRUD (Create, Read, Update, Delete).</br></br>
      Enfin, je également sais implémenté une API (Application Programming Interface) 
      et vérifier les permissions pour utilisé les opérations CRUD.</br></br> 
      Voici le lien GitHub du projet : https://github.com/AnthonyGDN/Projet6-OCR`,
      images: ['/PROJECT3-1.png', '/PROJECT3-2.png', '/PROJECT3-3.png', '/PROJECT3-4.png'],
    },
  ];

  // Ouvrir/fermer un projet
  const toggleProject = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <main className="projects-page">
      <h2>Mes projets</h2>
      <p>Retrouvez ci-dessous quelques-uns de mes projets réalisé lors de ma formation :</p>

      {projects.map((project) => (
        <div key={project.id} className="project-container">
          <div 
          className="project-banner" 
          onClick={() => toggleProject(project.id)}>
          <h3>{project.title}</h3>
          <span className={`arrow-icon ${expandedProjectId === project.id ? 'open' : ''}`}>&#9660;</span>
        </div>

          {expandedProjectId === project.id && (
            <div className="project-details">
              <div className="project-details-content">
                <div className="project-text">
                <div className="project-text" dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
                <div className="project-image">
                  <img 
                    src={process.env.PUBLIC_URL + project.images[0]} 
                    alt={project.title} 
                    onClick={() => {
                      setCurrentImages(project.images);
                      setCurrentImageIndex(0);
                      setModalOpen(true);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalOpen(false)}>&times;</span>
            <img 
              src={process.env.PUBLIC_URL + currentImages[currentImageIndex]} 
              alt="Galerie projet" 
            />
            <div className="modal-nav">
              <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + currentImages.length) % currentImages.length)}>
                ‹
              </button>
              <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % currentImages.length)}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;