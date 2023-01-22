import { useState, useEffect } from 'react';

import { Button } from './ButtonBackToTop.styles.jsx';

export const ButtonBackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    addEventListener('scroll', () => {
      if (scrollY > 1500) {
        setBackToTopButton(true);
      } else setBackToTopButton(false);
    });
  }, []);

  const handleClick = event => {
    scrollTo({
      top: 650,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {backToTopButton && (
        <Button className="button-back-to-top" onClick={handleClick} />
      )}
    </>
  );
};
