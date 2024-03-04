import { useEffect, useContext } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Stack } from '../components/Stack';
import { ProjectList } from '../components/ProjectList';
import { Loading } from '../components/Loading';
import { ReturnTopButton } from '../components/ReturnTopButton';
import { ProfileContext } from '../context/ProfileContext';

import axios from 'axios';

import '../styles/homePage.css';

export const HomePage = () => {
  const { profileData, setProfileData, scrollToTop, toggleVisibility } =
    useContext(ProfileContext);

  useEffect(() => {
    // Fetch a la informacion de GitHub
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/dgr92/repos',
          {
            headers: {
              Authorization: import.meta.env.VITE_GITHUB_APIKEY,
            },
          }
        );
        setProfileData(response.data.reverse());
      } catch (error) {
        console.error('Error buscando repositorios en GitHub:', error);
      }
    };

    fetchData();

    // Bajar automaticamente a la lista de proyectos al hacer scroll, y volver a la sección principal
    const scrollDown = (e) => {
      const projectList = document.querySelector('.project-list');
      if (!projectList) return;
      const projectListPosition =
        projectList.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY < projectListPosition && e.deltaY > 0) {
        window.scrollTo({ top: projectListPosition, behavior: 'smooth' });
      } else if (window.scrollY > 20 && e.deltaY < 0) {
        scrollToTop('smooth');
      }
    };

    //  Escuchar eventos de scroll y actualizar visibilidad del botón
    window.addEventListener('wheel', scrollDown);
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('wheel', scrollDown);
    };
  }, [setProfileData, scrollToTop, toggleVisibility]);

  return (
    <>
      {profileData.length === 0 ? (
        <Loading />
      ) : (
        <>
          <style>{`body { overflow: ${'hidden'}; }`}</style>
          <div className="main-screen">
            <AboutMe userData={profileData} />
            <Stack />
          </div>
          <ProjectList userData={profileData} />
          <ReturnTopButton />
        </>
      )}
    </>
  );
};
