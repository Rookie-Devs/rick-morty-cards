import { SocialIcon } from 'react-social-icons';
import './Authors.scss';

export const Authors = ({ linkedin, github, name, image }) => {
  return (
    <section className="container">
      <div className="profile-container">
        <img className="profile-picture" src={image}></img>
        <h2 className="profile-name">{name}</h2>
        <div className="social-icons-container">
          <SocialIcon
            url={linkedin}
            className="social-icon"
            target="_blank"
            title="Linkedin"
          />
          <SocialIcon
            url={github}
            className="social-icon"
            target="_blank"
            title="Github"
          />
        </div>
      </div>
    </section>
  );
};
