import { Authors } from '../../components/Authors/Authors';
import emerson from '../../assets/emerson.jpg';
import joao from '../../assets/joao.jpg';
import { Introduction, Profiles, Button } from './About.styles';

export const About = () => {
  return (
    <>
      <Introduction>Project developed by</Introduction>
      <Profiles>
        <Authors
          name="João Vitor"
          image={joao}
          linkedin="https://www.linkedin.com/in/joao-vitor-felix/"
          github="https://github.com/joao-vitor-felix/"
        />
        <Authors
          name="Emerson Paiva"
          image={emerson}
          linkedin="https://www.linkedin.com/in/emerson-paiva/"
          github="https://github.com/emerson-paiva/"
        />
      </Profiles>
      <Button to="/">Back to Home</Button>
    </>
  );
};
