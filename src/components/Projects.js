import React, { useState } from 'react';
import './Projects.css'; 

function Projects() {
  // État pour connaître l'ID du projet actuellement "ouvert"
  const [expandedProjectId, setExpandedProjectId] = useState(null);
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
      image: '/PROJECT1.png',
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
      image: '/PROJECT2.png',
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
      image: '/PROJECT3.png',
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
          </div>

          {/* Contenu déployé si le projet est "expanded" */}
          {expandedProjectId === project.id && (
            <div className="project-details">
              <div className="project-details-content">
                <div className="project-text">
                <div className="project-text" dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default Projects;