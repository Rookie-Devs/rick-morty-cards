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
        <FilterButton
          isActive={status === 'alive'}
          onClick={() => setStatus('alive')}
        >
          Alive
        </FilterButton>
        <FilterButton
          isActive={status === 'dead'}
          onClick={() => setStatus('dead')}
        >
          Dead
        </FilterButton>
        <FilterButton
          isActive={status === 'unknown'}
          onClick={() => setStatus('unknown')}
        >
          Unknown
        </FilterButton>
        <FilterButton onClick={() => setStatus('')}>Clear</FilterButton>
      </ButtonContainer>
      <Value>Gender</Value>
      <ButtonContainer>
        <FilterButton
          isActive={gender === 'female'}
          onClick={() => setGender('female')}
        >
          Female
        </FilterButton>
        <FilterButton
          isActive={gender === 'male'}
          onClick={() => setGender('male')}
        >
          Male
        </FilterButton>
        <FilterButton
          isActive={gender === 'genderless'}
          onClick={() => setGender('genderless')}
        >
          Genderless
        </FilterButton>
        <FilterButton
          isActive={gender === 'unknown'}
          onClick={() => setGender('unknown')}
        >
          Unknown
        </FilterButton>
        <FilterButton onClick={() => setGender('')}>Clear</FilterButton>
      </ButtonContainer>
    </Container>
  );
};
