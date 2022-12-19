import { Link } from 'react-router-dom';
import { AboutInfo } from '../../components/AboutInfo/AboutInfo';
import emerson from '../../assets/emerson.jpg';
import joao from '../../assets/joao.jpg';
import './About.scss';

export const About = () => {
  return (
    <>
      <h2 className="introduction">Project developed by</h2>
      <section className="profiles">
        <AboutInfo
          name="João Vitor"
          image={joao}
          linkedin="https://www.linkedin.com/in/joao-vitor-felix/"
          github="https://github.com/joao-vitor-felix/"
        />
        <AboutInfo
          name="Emerson Paiva"
          image={emerson}
          linkedin="https://www.linkedin.com/in/emerson-paiva/"
          github="https://github.com/emerson-paiva/"
        />
      </section>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </>
  );
};
