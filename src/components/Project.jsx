import Zoom from '@material-ui/core/Zoom';
import { Tooltip } from '@material-ui/core';
import { textFormat } from '../services/helpers';

import '../styles/project.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Project = ({ repo }) => {
  const projectName = textFormat(repo.name);
  const stack = repo.topics;

  return (
    <div className="project">
      <div className="project-content">
        {repo.homepage ? (
          <a href={repo.homepage} target="_blank" rel="noreferrer">
            <img src={`/resources/images/project-images/${repo.name.toLowerCase()}.png`} alt={`Imagen del proyecto ${projectName}`} />
          </a>
        ) : (
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <img src={`/resources/images/project-images/${repo.name.toLowerCase()}.png`} alt={`Imagen del proyecto ${projectName}`} />
          </a>
        )}

        <div className="description">
          <h3>{projectName}</h3>
          <p>{repo.description}</p>
        </div>

        <div className="buttons">
          <a className="github-button" href={repo.html_url} target="_blank" rel="noreferrer">
            <Tooltip TransitionComponent={Zoom} title="GitHub">
              <img src="/resources/images/icons/github.svg" alt="Logo GitHub" />
            </Tooltip>
          </a>

          <a className="readme-button" href={`${repo.html_url}?tab=readme-ov-file#readme`} target="_blank" rel="noreferrer">
            <Tooltip TransitionComponent={Zoom} title="Readme">
              <img src="/resources/images/icons/readme.svg" alt="Logo readme" />
            </Tooltip>
          </a>

          {repo.homepage ? (
            <a className="deploy-button" href={repo.homepage} target="_blank" rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} title="Deploy">
                <img src="/resources/images/icons/deploy.svg" alt="Logo deploy" />
              </Tooltip>
            </a>
          ) : null}
        </div>

        <div className="project-stack">
          {stack.reverse().map((tech) => {
            return (
              <p className="tech" key={tech}>
                <Tooltip TransitionComponent={Zoom} title={tech}>
                  <img src={`/resources/images/logos/${tech}.svg`} alt={`Logo de ${tech}`} />
                </Tooltip>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
