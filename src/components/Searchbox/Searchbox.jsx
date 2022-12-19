import './Searchbox.scss';

export const Searchbox = ({ search, setSearch }) => {
  const searchboxFilter = (e) => {
    const targetValue = e.target.value;
    setSearch(targetValue);
  };

  return (
    <div className="searchboxContainer">
      <label htmlFor="search" className="labelSearch">
        Search
      </label>
      <input
        type="search"
        placeholder="Search here"
        className="searchInput"
        id="search"
        value={search}
        onChange={searchboxFilter}
      ></input>
    </div>
  );
};

export default Searchbox;
