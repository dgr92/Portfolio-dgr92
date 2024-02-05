import '../styles/stack.css';

export const Stack = () => {
  const stack = ['html', 'css', 'javascript', 'mysql', 'nodejs', 'express', 'react', 'git', 'vite', 'postman'];

  return (
    <div className="stack">
      <h2>Stack</h2>
      <ul className="techs">
        {stack.map((tech) => {
          return (
            <li key={tech}>
              <img className="logo" src={`/resources/images/logos/${tech}.svg`} alt={`Logo de ${tech}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
