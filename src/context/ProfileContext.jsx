import { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProviderComponent = ({ children }) => {
  const [profileData, setProfileData] = useState([]);
  const [buttonReturnTopVisible, setButtonReturnTopVisible] = useState(false);
  

  useEffect(() => {
    setButtonReturnTopVisible(false);
  }, []);

  // Visibilidad del botón para volver al inicio de la página
  const toggleVisibility = () => {
    if (window.scrollY > 0 && window.scrollY) {
      setButtonReturnTopVisible(true);
    } else {
      setButtonReturnTopVisible(false);
    }
  };

  // Ir a lista de proyectos
  const scrollToProjects = () => {
    const projectList = document.querySelector('.project-list');
    if (!projectList) return;
    const projectListPosition =
      projectList.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: projectListPosition, behavior: 'smooth' });
  };

  // Volver arriba
  const scrollToTop = (behavior) => {
    window.scrollTo({ top: 0, behavior: behavior });
  };

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        buttonReturnTopVisible,
        setButtonReturnTopVisible,
        scrollToTop,
        toggleVisibility,
        scrollToProjects,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
