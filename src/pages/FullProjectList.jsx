import { useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Project } from '../components/Project';
import { ProfileContext } from '../context/ProfileContext';

import '../styles/fullProjectListStyles.css';
import { ReturnTopButton } from '../components/ReturnTopButton';

export const FullProjectList = () => {
  const { profileData, scrollToTop, setButtonReturnTopVisible } =
    useContext(ProfileContext);

  useEffect(() => {
    setButtonReturnTopVisible(false);
  }, [setButtonReturnTopVisible]);

  scrollToTop('auto');

  if (profileData.length === 0) {
    return <Navigate to="/" />;
  }

  const handleBack = () => {
    window.scrollTo(0, 0);
  };

  profileData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <section>
      <div className="full-project-list">
        <h2>Proyectos</h2>
        <ul>
          {profileData.map((repo) => {
            if (repo.name === 'dgr92') {
              return;
            }
            return (
              <li className="a" key={repo.id}>
                <Project repo={repo} />
              </li>
            );
          })}
        </ul>
      </div>
      <ReturnTopButton />
      <Link className="back" to="/" onClick={handleBack}>
        <img
          src="/resources/images/icons/arrow_upward.svg"
          alt="flecha volver"
        />
        <p>Volver</p>
      </Link>
    </section>
  );
};
