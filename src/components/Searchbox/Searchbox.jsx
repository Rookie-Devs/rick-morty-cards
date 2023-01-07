import './Searchbox.scss';

export const Searchbox = ({ search, setSearch }) => {
  const searchboxFilter = event => {
    const targetValue = event.target.value;
    setSearch(targetValue);
  };

  return (
    <div className="searchbox-container">
      <label htmlFor="search" className="label-search">
        Search
      </label>
      <input
        type="search"
        placeholder="Search here"
        className="input-search"
        id="search"
        value={search}
        onChange={searchboxFilter}
      ></input>
    </div>
  );
};
