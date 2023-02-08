import { useState, useEffect } from 'react';

import { Button } from './ButtonBackToTop.styles.jsx';

export const ButtonBackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [changePlace, setChangePlace] = useState(false);

  const handleScroll = () => {
    if (scrollY > 2800) {
      setShowButton(true);
    } else setShowButton(false);
  };

  const handleChangePlace = () => {
    if (scrollY >= 4700) {
      setChangePlace(true);
    } else setChangePlace(false);
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    addEventListener('scroll', handleChangePlace);

    return () => removeEventListener('scroll', handleChangePlace);
  }, []);

  const handleClick = () => {
    scrollTo({
      top: 650,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Button
        changePlace={changePlace}
        showButton={showButton}
        onClick={handleClick}
      />
    </>
  );
};
