import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export const Pagination = ({ pages = [] }) => {
  const navigate = useNavigate();

  const handlePageClick = event => {
    scrollTo({
      top: 650,
      behavior: 'smooth',
    });
    navigate(`/page/${event.selected + 1}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pages}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      className="pagination-container"
    />
  );
};
