import { Tooltip } from 'react-tooltip';

import '../styles/stack.css';

export const Stack = () => {
  const stack = [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'Python',
    'React',
    'React-Native',
    'NodeJS',
    'Express',
    'MySQL',
    'Firebase',
    'Git',
    'Vite',
    'Postman',
  ];

  return (
    <div className="stack">
      <h2>Stack</h2>
      <ul className="techs">
        {stack.map((tech) => {
          const techName = tech.replace('-', ' ');

          return (
            <li className="technology" key={tech}>
              <a className={tech}>
                <img
                  className="logo"
                  src={`/resources/images/logos/${tech.toLowerCase()}.svg`}
                  alt={`Logo de ${tech}`}
                />
              </a>
              <Tooltip anchorSelect={`.${tech}`} place="bottom">
                {techName}
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
