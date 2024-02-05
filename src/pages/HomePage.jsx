import { useEffect, useState } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Stack } from '../components/Stack';
import { ProjectList } from '../components/ProjectList';

import axios from 'axios';

export const HomePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/dgr92/repos', {
          headers: {
            Authorization: import.meta.env.VITE_GITHUB_APIKEY,
          },
        });
        setUserData(response.data.reverse());
      } catch (error) {
        console.error('Error buscando repositorios en GitHub:', error);
      }
    };

    fetchData();
  }, [setUserData]);

  return (
    <>
      {userData.length === 0 ? (
        <p>cargando...</p>
      ) : (
        <>
          <AboutMe userData={userData} />
          <Stack />
          <ProjectList userData={userData} />
        </>
      )}
    </>
  );
};
