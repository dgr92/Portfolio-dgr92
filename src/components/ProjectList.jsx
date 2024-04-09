import { Link } from 'react-router-dom';
import { Project } from './Project';

import '../styles/projectList.css';

export const ProjectList = ({ userData }) => {
  userData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  let showingProjects = 3;

  return (
    <section className="project-list">
      <h2>Últimos proyectos</h2>
      <div>
        <ul>
          {userData.map((repo) => {
            if (repo.name === 'dgr92') {
              return;
            }
            if (showingProjects > 0) {
              showingProjects--;
              return (
                <li className="a" key={repo.id}>
                  <Project repo={repo} />
                </li>
              );
            }
          })}
        </ul>
        <Link className="all-projects" to="/projects">
          Ver proyectos
        </Link>
      </div>
    </section>
  );
};
