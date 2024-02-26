import '../styles/stack.css';

export const Stack = () => {
  const stack = ['html', 'css', 'javascript', 'react', 'nodejs', 'express', 'mysql', 'firebase', 'git', 'vite', 'postman'];

  return (
    <div className="stack">
      <h2>Stack</h2>
      <ul className="techs">
        {stack.map((tech) => {
          return (
            <li key={tech}>
              <img className="logo" src={`/resources/images/logos/${tech}.svg`} alt={`Logo de ${tech}`} title={tech.toUpperCase()} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
