/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';

import { Paginate } from './Pagination.styles';

type PaginationProps = {
  pages: number;
};

export const Pagination = ({ pages }: PaginationProps) => {
  const navigate = useNavigate();
  const handlePageClick = (selectedItem: any) => {
    navigate(`/page/${selectedItem.selected + 1}`);
    scrollTo({
      top: 650,
    });
  };

  return (
    <Paginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pages}
      previousLabel="previous"
      renderOnZeroPageCount={() => null}
    />
  );
};
