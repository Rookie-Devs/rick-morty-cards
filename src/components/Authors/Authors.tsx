import { SocialIcon } from 'react-social-icons';
import { ProfileContainer, Picture, Name, Icons } from './Authors.styles';

type AuthorsProps = {
  linkedin: string;
  github: string;
  name: string;
  image: string;
};

export const Authors = ({ linkedin, github, name, image }: AuthorsProps) => {
  return (
    <ProfileContainer>
      <Picture src={image}></Picture>
      <Name>{name}</Name>
      <Icons>
        <SocialIcon url={linkedin} target="_blank" title="Linkedin" />
        <SocialIcon url={github} target="_blank" title="Github" />
      </Icons>
    </ProfileContainer>
  );
};
