import {
  Container,
  Value,
  ButtonContainer,
  FilterButton,
} from './Filter.styles';

export const Filter = ({ status, setStatus, gender, setGender }) => {
  return (
    <Container>
      <Value>Status</Value>
      <ButtonContainer>
        <FilterButton status={status} onClick={() => setStatus('alive')}>
          Alive
        </FilterButton>
        <FilterButton status={status} onClick={() => setStatus('dead')}>
          Dead
        </FilterButton>
        <FilterButton status={status} onClick={() => setStatus('unknown')}>
          Unknown
        </FilterButton>
        <FilterButton onClick={() => setStatus('')}>Clear</FilterButton>
      </ButtonContainer>
      <Value>Gender</Value>
      <ButtonContainer>
        <FilterButton gender={gender} onClick={() => setGender('female')}>
          Female
        </FilterButton>
        <FilterButton gender={gender} onClick={() => setGender('male')}>
          Male
        </FilterButton>
        <FilterButton gender={gender} onClick={() => setGender('genderless')}>
          Genderless
        </FilterButton>
        <FilterButton gender={gender} onClick={() => setGender('unknown')}>
          Unknown
        </FilterButton>
        <FilterButton onClick={() => setGender('')}>Clear</FilterButton>
      </ButtonContainer>
    </Container>
  );
};
