import { Link, Outlet } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
  const backToMiddle = () => {
    window.scrollTo({
      top: 650,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <section className="banner">
        <nav className="navbarContainer">
          <Link to="/" className="navbarButtons" onClick={backToMiddle}>
            Home
          </Link>
          <Link to="/about" className="navbarButtons" onClick={backToMiddle}>
            About
          </Link>
        </nav>
        <h1 className="header">
          This application uses the{' '}
          <span className="rickMorty">Rick and Morty API</span>
        </h1>
        <button className="buttonBanner">
          <a
            href="https://rickandmortyapi.com/"
            className="apiLink"
            target="_blank"
            rel="noreferrer"
          >
            Check the API out
          </a>
        </button>
      </section>
      <Outlet />
    </>
  );
};
