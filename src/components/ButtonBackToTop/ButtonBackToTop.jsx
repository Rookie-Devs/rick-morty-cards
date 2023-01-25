import { useState, useEffect } from 'react';

import { Button } from './ButtonBackToTop.styles.jsx';

export const ButtonBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (scrollY > 1500) {
      setShowButton(true);
    } else setShowButton(false);
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scrollTo({
      top: 650,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && <Button showButton={showButton} onClick={handleClick} />}
    </>
  );
};
