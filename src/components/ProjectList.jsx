import { Project } from './Project';

import '../styles/projectList.css';

export const ProjectList = ({ userData }) => {
  return (
    <section className="project-list">
      <h2>Mis proyectos</h2>

      <ul>
        {userData.map((repo) => (
          <li className="a" key={repo.id}>
            <Project repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
};
