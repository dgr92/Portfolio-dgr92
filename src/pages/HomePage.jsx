import { useEffect, useState } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Stack } from '../components/Stack';
import { ProjectList } from '../components/ProjectList';

import axios from 'axios';

import '../styles/homePage.css';

export const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [buttonReturnTopVisible, setButtonReturnTopVisible] = useState(false);

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
        setUserData(response.data.reverse());
      } catch (error) {
        console.error('Error buscando repositorios en GitHub:', error);
      }
    };

    fetchData();

    //  Escuchar eventos de scroll y actualizar visibilidad del botón
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [setUserData]);

  // Visibilidad del botón para volver arriba de la página
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setButtonReturnTopVisible(true);
    } else {
      setButtonReturnTopVisible(false);
    }
  };

  // Volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {userData.length === 0 ? (
        <p>cargando...</p>
      ) : (
        <>
          <div className='main-screen'>
            <AboutMe userData={userData} />
            <Stack />
          </div>
          <ProjectList userData={userData} />
          <div className="button-return-top">
            {buttonReturnTopVisible && (
              <a className="go-top" onClick={scrollToTop}>
                <img
                  src="/resources/images/icons/arrow_upward.svg"
                  alt="Volver arriba"
                />
              </a>
            )}
          </div>
        </>
      )}
    </>
  );
};
