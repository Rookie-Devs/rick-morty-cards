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
        <nav className="navbar-container">
          <Link to="/" className="navbar-buttons" onClick={backToMiddle}>
            Home
          </Link>
          <Link to="/about" className="navbar-buttons" onClick={backToMiddle}>
            About
          </Link>
        </nav>
        <h1 className="header">
          This application uses the{' '}
          <span className="rick-morty">Rick and Morty API</span>
        </h1>
        <button className="button-banner">
          <a
            href="https://rickandmortyapi.com/"
            className="api-button"
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
