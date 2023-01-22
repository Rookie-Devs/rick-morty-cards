import { useNavigate } from 'react-router-dom';

import { Paginate } from './Pagination.styles';

export const Pagination = ({ pages = [] }) => {
  const navigate = useNavigate();

  const handlePageClick = event => {
    navigate(`/page/${event.selected + 1}`);
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
      renderOnZeroPageCount={null}
    />
  );
};
