import { Button } from './FilterButton.styles';

export const FilterButton = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick} className="toggle-filter-button">
        Filter
      </Button>
    </>
  );
};
