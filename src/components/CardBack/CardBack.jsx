import {
  ModalBackground,
  Cardback,
  InfoContainer,
  Name,
  Info,
  Block,
  Text,
  Value,
  ModalButton,
} from './CardBack.styles';

export const CardBack = ({
  showBack,
  name,
  status,
  species,
  origin,
  type,
  location,
  episodes,
  gender,
  id,
  setShowBack,
}) => {
  if (showBack) {
    return (
      <ModalBackground key={id} onClick={() => setShowBack(!showBack)}>
        <Cardback onClick={e => e.stopPropagation()}>
          <InfoContainer>
            <Name name={name}>{name}</Name>
            <Info>
              <Block>
                <Text>Status</Text>
                <Value>{status}</Value>
              </Block>
              <Block>
                <Text>Species</Text>
                <Value>{species}</Value>
              </Block>
              <Block>
                <Text>Origin</Text>
                <Value>{origin === 'unknown' ? 'Unknown' : origin}</Value>
              </Block>
              <Block>
                <Text>Type</Text>
                <Value>{type === '' ? 'Unknown' : type}</Value>
              </Block>
              <Block>
                <Text>Gender</Text>
                <Value>{gender}</Value>
              </Block>
              <Block>
                <Text>Location</Text>
                <Value>{location}</Value>
              </Block>
              <Block>
                <Text>Have appeared at</Text>
                <Value>{episodes.length + ' episodes'}</Value>
              </Block>
            </Info>
            <ModalButton
              onClick={() => {
                setShowBack(!showBack);
              }}
            >
              Close Modal
            </ModalButton>
          </InfoContainer>
        </Cardback>
      </ModalBackground>
    );
  } else return null;
};
