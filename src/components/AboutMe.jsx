import { Tooltip } from 'react-tooltip';

import '../styles/aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AboutMe = ({ userData }) => {
  return (
    <section className="about-me">
      <div className="photo-name">
        <img src={userData[0].owner.avatar_url} alt="Imagen David" />
      </div>
      <div className="description">
        <div className="name-job">
          <h1 className="animated-text">Hola, soy David Graciá</h1>
          <h2 className="animated-text">Desarrollador Full Stack</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
          tenetur rem! Assumenda minima, cumque corporis nulla delectus optio
          sit ipsa eligendi. Minus aliquam animi numquam doloremque ratione.
          Praesentium hic odit atque placeat velit tenetur ad adipisci
          voluptates! Repellat obcaecati blanditiis doloremque beatae recusandae
          suscipit ratione distinctio. Ipsum hic voluptates accusamus.
        </p>
        <div className="links">
          <a
            href="/resources/files/CV-David-Gracia-Requena.pdf"
            className="cv"
            download
          >
            Descargar CV
          </a>
          <div className="external-links">
            <a
              className="github"
              href="https://github.com/dgr92"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/resources/images/icons/github.svg" alt="Logo GitHub" />
            </a>
            <a
              className="email"
              href="mailto:davidgreq92@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/resources/images/icons/email.svg" alt="Logo Email" />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/david-gr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/resources/images/icons/linkedin.svg"
                alt="Logo LinkedIn"
              />
            </a>

            <Tooltip anchorSelect=".github" place="bottom">
              Perfil GitHub
            </Tooltip>
            <Tooltip anchorSelect=".email" place="bottom">
              Enviar e-mail
            </Tooltip>
            <Tooltip anchorSelect=".linkedin" place="bottom">
              Perfil LinkedIn
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};
