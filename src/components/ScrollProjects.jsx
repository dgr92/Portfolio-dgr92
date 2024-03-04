import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import '../styles/scrollProjectsButton.css';

export const ScrollProjects = () => {
  const { scrollToProjects } = useContext(ProfileContext);

  return (
    <a className="scroll-projects" onClick={() => scrollToProjects()}>
      <img
        src="/resources/images/icons/arrow_upward.svg"
        alt="Ir a proyectos"
      />
      <>Últimos proyectos</>
    </a>
  );
};
