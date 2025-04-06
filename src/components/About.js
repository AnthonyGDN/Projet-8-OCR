import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; 

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-image">
          <img 
            src={process.env.PUBLIC_URL + "/HMMM.png"} 
            alt="Portrait de GADON Anthony" 
          />
        </div>
        <div className="about-text">
          <h2>À propos de moi</h2>
          <p>
            Bonjour !<br/>
            Je m'appelle <strong>GADON Anthony</strong>, j'ai actuellement 24 ans et je suis en fin de formation de Développeur Web !
          </p>

          <p>
            Avant de réaliser cette formation, j'ai en 2018 obtenu mon baccalauréat série Économique et social.
            J'ai par la suite réalisé des études de droit ainsi que des études d'histoire, bien que je n'aie jamais 
            été au bout de ces formations.
          </p>

          <p>
            Je suis quelqu'un d'assez sportif, qui a pratiqué du judo pendant plus de 10 ans, 
            et d'autres sports de combat (jujitsu, boxe anglaise et française, lutte, etc.) pour découvrir leurs bases.
          </p>

          <p>
            Depuis mes 10 ans, je suis très souvent devant un ordinateur, étant passionné de jeux vidéo. 
            C'est donc tout naturellement qu'au fil du temps, je me suis intéressé à la création de jeux vidéo. 
            C'est comme ça que j'ai décidé de commencer par une formation de développeur web afin de me faire 
            une introduction au milieu de l'informatique et du développement.
          </p>

          <p>
            Je suis quelqu'un de très calme, qui sait toujours comment rebondir et qui ne se laisse jamais abattre, 
            en plus d'être globalement chanceux. 
            J'aime me poser en médiateur pour régler des conflits et j'aime diriger des projets 
            (quand ces projets m'intéressent).
          </p>

          <p>
            J'ai donc un caractère très marqué mais qui sais s'adapter à ces interlocuteurs. 
          </p>

          <p>
          ... J'en ai déjà dit pas mal, donc si vous voulez en savoir plus, je vous invite à directement 
          me  <Link to="/contact">contacter</Link> !
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
