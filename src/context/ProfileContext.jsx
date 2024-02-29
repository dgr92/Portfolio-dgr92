import { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProviderComponent = ({ children }) => {
  const [profileData, setProfileData] = useState([]);
  const [buttonReturnTopVisible, setButtonReturnTopVisible] = useState(false);

  useEffect(() => {
    setButtonReturnTopVisible(false);
  }, []);

  // Visibilidad del botón para volver arriba de la página
  const toggleVisibility = () => {
    if (window.scrollY > 20 && window.scrollY) {
      setButtonReturnTopVisible(true);
    } else {
      setButtonReturnTopVisible(false);
    }
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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
