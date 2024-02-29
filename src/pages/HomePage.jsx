import { useEffect, useContext } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Stack } from '../components/Stack';
import { ProjectList } from '../components/ProjectList';
import { Loading } from '../components/Loading';

import axios from 'axios';

import '../styles/homePage.css';
import { ProfileContext } from '../context/ProfileContext';
import { ReturnTopButton } from '../components/ReturnTopButton';

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

    const scrollDown = (e) => {
      if (window.scrollY < 20 && e.deltaY > 0) {
        scrollToProjects();
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

  // Ir a proyectos al hacer scroll
  const scrollToProjects = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

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
