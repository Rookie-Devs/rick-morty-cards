import { Container, Search, Input } from './Searchbox.styles';

export const Searchbox = ({ search, setSearch }) => {
  const searchboxFilter = event => {
    const targetValue = event.target.value;
    setSearch(targetValue);
  };

  return (
    <Container>
      <Search htmlFor="search">Search</Search>
      <Input
        type="search"
        placeholder="Search here"
        id="search"
        value={search}
        onChange={searchboxFilter}
      ></Input>
    </Container>
  );
};
