import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import '../styles/returnTopButton.css';

export const ReturnTopButton = () => {
  const { buttonReturnTopVisible, scrollToTop } = useContext(ProfileContext);

  return (
    <>
      <a
        className={`go-top ${buttonReturnTopVisible ? '' : 'hidden'}`}
        onClick={() => scrollToTop('smooth')}
      >
        <img
          src="/resources/images/icons/arrow_upward.svg"
          alt="Volver arriba"
        />
      </a>
    </>
  );
};
