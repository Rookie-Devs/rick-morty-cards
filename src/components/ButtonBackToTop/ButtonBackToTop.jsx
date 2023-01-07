import React, { useState, useEffect } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import './ButtonBackToTop.scss';

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
        <ArrowUpCircleIcon
          className="button-back-to-top"
          onClick={handleClick}
        />
      )}
    </>
  );
};
