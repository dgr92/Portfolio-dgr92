import Zoom from '@material-ui/core/Zoom';
import { Tooltip } from '@material-ui/core';

import '../styles/aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AboutMe = ({ userData }) => {
  return (
    <section className="about-me">
      <div className="photo-name">
        <img src={userData[0].owner.avatar_url} alt="Imagen David" />
        <h1>Portfolio David Graciá</h1>
      </div>
      <div className="description">
        <p>Programador Web Full Stack</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, tenetur rem! Assumenda minima, cumque corporis nulla delectus optio sit ipsa eligendi. Minus aliquam animi numquam doloremque ratione. Praesentium hic odit atque placeat velit
          tenetur ad adipisci voluptates! Repellat obcaecati blanditiis doloremque beatae recusandae suscipit ratione distinctio. Ipsum hic voluptates accusamus.
        </p>
        <div className="links">
          <a href="" className="cv" download>
            Descargar CV
          </a>
          <div className="external-links">
            <a href="https://github.com/dgr92" target="_blank" rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} title="GitHub">
                <img src="/resources/images/icons/github.svg" alt="Logo GitHub" />
              </Tooltip>
            </a>
            <a href="mailto:davidgreq92@gmail.com" target="_blank" rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} title="Send e-mail">
                <img src="/resources/images/icons/email.svg" alt="Logo Email" />
              </Tooltip>
            </a>
            <a href="https://www.linkedin.com/in/david-gr/" target="_blank" rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} title="LinkedIn">
                <img src="/resources/images/icons/linkedin.svg" alt="Logo LinkedIn" />
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
