import { Button } from './FilterButton.styles';

type FilterButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <>
      <Button onClick={onClick} className="toggle-filter-button">
        Filter
      </Button>
    </>
  );
};
