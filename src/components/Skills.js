import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      id: 1,
      title: 'Maîtrise du HTML',
      image: '/SkillHTML.jpg', 
      description: `HyperText Markup Language (HTML) est le langage de base qui permet de structurer le contenu d’une page web 
      (titres, paragraphes, images, formulaires, etc.).</br></br> 
      Le fait de bien maîtriser le HTML garantit la création de pages claires, accessibles et correctement interprétées par les navigateurs, 
      ce qui est essentiel pour poser les fondations d’un site web robuste.`,
    },
    {
      id: 2,
      title: 'Maîtrise du CSS',
      image: '/SkillCSS.png',
      description: `Cascading Style Sheets (CSS) est le langage qui gère l’aspect visuel des pages web 
      (mise en page, couleurs, animations, adaptabilité mobile, etc.).</br></br>  
      Savoir manipuler le CSS de manière efficace permet d’offrir une interface attractive et responsive, 
      améliorant significativement l’expérience utilisateur.`,
    },
    {
      id: 3,
      title: 'Maîtrise de JavaScript',
      image: '/SkillJS.png',
      description: `JavaScript est un langage de programmation qui apporte l’interactivité et la dynamique aux pages web 
      (animations, formulaires réactifs, gestion des événements, etc.).`,
    },
    {
      id: 4,
      title: 'Maîtrise de NodeJS',
      image: '/SkillNODE.png',
      description: `NodeJS permet d’exécuter du code JavaScript côté serveur et de créer des applications backend performantes.</br></br>  
      Cela facilite la création d’API, la gestion de bases de données, et l’implémentation de fonctionnalités en temps réel 
      (chat, notifications push, etc.).`,
    },
    {
      id: 5,
      title: 'Maîtrise de React',
      image: '/SkillREACT.png',
      description: `React est une librairie JavaScript, très populaire pour construire des interfaces utilisateur modernes, 
      réactives et performantes.</br></br>  
      Elle facilite la création de composants réutilisables et la mise à jour instantanée de l’interface en fonction des 
      interactions de l’utilisateur, ce qui améliore nettement l’expérience de navigation.`,
    },
    {
      id: 6,
      title: 'Optimisation & Débogage',
      image: '/SkillOPTI.png',
      description: `Savoir optimiser et déboguer un site web inclut plusieurs compétences :</br></br>  
      • Améliorer la vitesse de chargement, corriger les erreurs, assurer la compatibilité multi-navigateurs, etc.</br></br>  
      • Sur le plan du SEO (Search Engine Optimization), cela consiste à respecter les bonnes pratiques pour un meilleur 
      référencement dans les moteurs de recherche, et donc une meilleure visibilité du site.`,
    },
    {
      id: 7,
      title: 'Gestion de projet',
      image: '/SkillGESTION.png',
      description: `Au-delà de l’aspect purement technique, gérer un projet implique de savoir planifier les tâches, répartir le travail, 
      surveiller l’avancement et garantir la livraison dans les délais.<br/></br> 
      Ainsi, pour pouvoir assuré la gestion d'un projet je possède plusieurs compétences :</br></br>
      • la connaissance d’outils de gestion de projet (Trello, Jira, Asana, etc.)</br>
      • la mise en place d’une veille technique pour rester à jour</br>
      • la maîtrise de méthodes Agiles (Scrum, Kanban)</br>
      • la coordination avec les différentes équipes (UX, marketing, etc.)</br>`,
    },
    {
      id: 8,
      title: 'Soft skills',
      image: '/SkillSoft.jpg',
      description: `• Bonne maitrise de l'anglais</br> 
      • Je sais m'adapter</br> 
      • J'ai un bon sens de la communication que ce soit pour la gestions des équipes ou dans le dialogue avec le/les client(s)</br>
      • Maitrise Word</br>`,
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  // Ouvre la modal avec la compétence cliquée
  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  // Ferme la modal
  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <main>
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-card"
            onClick={() => openModal(skill)}
          >
            <h3>{skill.title}</h3>
            <hr />
            <img src={skill.image} alt={skill.title} />
          </div>
        ))}
      </div>
      {selectedSkill && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedSkill.title}</h3>
            <div className="skill-description" dangerouslySetInnerHTML={{ __html: selectedSkill.description }}/>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Skills;
