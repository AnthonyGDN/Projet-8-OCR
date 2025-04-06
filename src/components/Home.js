import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home-section">
      <div className="home-content">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Ici, vous trouverez un aperçu de mon travail et de mes compétences&nbsp;!</p>

        <p>
          J'ai suivi une formation de développeur web via le site de formation très réputé
          "OpenClassrooms". Tout au long de cette formation, j'ai pu développer toutes les compétences
          nécessaires pour réaliser le travail d'un développeur web.
        </p>

        <p>J'ai notamment appris au cours de cette formation&nbsp;:</p>
        <ul>
          <li>A maîtriser les intégrations web avec le Html et le CSS</li>
          <li>A rendre les pages web dynamiques grâce à l'utilisation de JavaScript</li>
          <li>A rendre l'utilisation des sites fluide et instinctive avec l'utilisation de React</li>
          <li>A m'assurer de la bonne gestion et protection des données du site et de ses utilisateurs avec la maîtrise de NodeJS</li>
          <li>A savoir optimiser et débugger des sites web</li>
          <li>A mettre en ligne un site</li>
          <li>A gérer la gestion de projet pour la création d'un site web</li>
        </ul>

        <p>
          Pour en savoir plus sur les différentes compétences que je viens de vous lister, je vous invite à vous rendre
          dans la section&nbsp;
          <strong>
            <Link to="/skills">Compétences</Link>
          </strong>
          &nbsp;de mon portfolio, ainsi que dans la section&nbsp;
          <strong>
            <Link to="/projects">Projets</Link>
          </strong>
          , afin que vous puissiez voir quels projets j'ai pu réaliser lors de ma formation&nbsp;!
        </p>

        <p>
          Si vous souhaitez en savoir plus sur moi, la section&nbsp;
          <strong>
            <Link to="/about">À propos</Link>
          </strong>
          &nbsp;devrait répondre à toutes vos questions et enfin si vous souhaitez me contacter, la section&nbsp;
          <strong>
            <Link to="/contact">Contact</Link>
          </strong>
          &nbsp;vous donnera tous les liens existants pour prendre contact avec moi&nbsp;!
        </p>
      </div>

      <div className="home-image">
        <img src={process.env.PUBLIC_URL + '/HomePic1.jpg'} alt="HomePic1" />
      </div>
    </main>
  );
}

export default Home;

