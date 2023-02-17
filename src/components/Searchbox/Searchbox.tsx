import { Container, Search, Input } from './Searchbox.styles';

type SearchboxProps = {
  search: string;
  setSearch: (t: string) => void;
};

export const Searchbox = ({ search, setSearch }: SearchboxProps) => {
  const searchboxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        onChange={searchboxValue}
      ></Input>
    </Container>
  );
};
