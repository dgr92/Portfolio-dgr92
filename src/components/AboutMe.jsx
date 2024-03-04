import { Tooltip } from 'react-tooltip';
import { ScrollProjects } from './ScrollProjects';

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
          <h1 className="name">David Graciá Requena</h1>
          <h2 className="job">Desarrollador Full Stack</h2>
        </div>
        <p>
          Apasionado de la tecnología, he trabajado con diversas tecnologías
          desarrollando tanto en el front-end como en el back-end lo que me
          permite tener una visión completa dentro de cualquier proyecto. Mi
          bagaje profesional ha hecho que pueda desarrollar habilidades
          comunicativas para trabajar con el resto del equipo y con el cliente.
          Habituado en el trabajo bajo plazos, poseo habilidades en la gestión
          de incidencias. Así como, la orientación a la satisfacción y atención
          al cliente. Actualmente estoy buscando una oportunidad profesional que
          me permita seguir creciendo, pudiendo perfeccionar mis aptitudes como
          full stack developer.
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
        <ScrollProjects />
      </div>
    </section>
  );
};
