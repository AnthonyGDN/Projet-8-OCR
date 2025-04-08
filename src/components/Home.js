import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home-section">
      <div className="home-content">
        <h1>Bienvenue sur mon portfolio !</h1>
        <p>Je suis <strong>Anthony GADON</strong> et ici, vous trouverez un aperçu de mon travail et de mes compétences&nbsp;!</p>

        <p>
          J'ai suivi une formation de <strong>développeur web</strong> via le site de formation très réputé
          "OpenClassrooms". Tout au long de cette formation, j'ai pu développer toutes les compétences
          nécessaires pour réaliser le travail d'un développeur web.
        </p>

        <p>J'ai notamment appris au cours de cette formation&nbsp;:</p>
        <ul>
          <li>A maîtriser les intégrations web avec le <strong>Html</strong> et le <strong>CSS</strong></li>
          <li>A rendre les pages web dynamiques grâce à l'utilisation de <strong>JavaScript</strong></li>
          <li>A rendre l'utilisation des sites fluide et instinctive avec l'utilisation de <strong>React</strong></li>
          <li>A m'assurer de la bonne gestion et protection des données du site et de ses utilisateurs avec la maîtrise de <strong>NodeJS</strong></li>
          <li>A savoir <strong>optimiser</strong> et <strong>débugger</strong> des sites web</li>
          <li>A <strong>mettre en ligne</strong> un site</li>
          <li>A gérer la <strong>gestion de projet</strong> pour la création d'un site web</li>
        </ul>

        <p>
          Pour résumé, je suis un <strong>jeune développeur web</strong> qui utilise en grande partit <strong>React</strong> dans la constrution de ses sites ! 
        </p>

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

