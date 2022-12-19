import './Filter.scss';

export const Filter = ({ setStatusFilter, setGenderFilter }) => {
  return (
    <div className="filter-container">
      <span className="span-filter">Status</span>
      <div className="filter-button-container">
        <button
          className="filter-button"
          onClick={() => setStatusFilter('alive')}
        >
          Alive
        </button>
        <button
          className="filter-button"
          onClick={() => setStatusFilter('dead')}
        >
          Dead
        </button>
        <button
          className="filter-button"
          onClick={() => setStatusFilter('unknown')}
        >
          Unknown
        </button>
        <button className="filter-button" onClick={() => setStatusFilter('')}>
          Clear
        </button>
      </div>
      <span className="span-filter">Gender</span>
      <div className="filter-button-container">
        <button
          className="filter-button"
          onClick={() => setGenderFilter('female')}
        >
          Female
        </button>
        <button
          className="filter-button"
          onClick={() => setGenderFilter('male')}
        >
          Male
        </button>
        <button
          className="filter-button"
          onClick={() => setGenderFilter('genderless')}
        >
          Genderless
        </button>
        <button
          className="filter-button"
          onClick={() => setGenderFilter('unknown')}
        >
          Unknown
        </button>
        <button className="filter-button" onClick={() => setGenderFilter('')}>
          Clear
        </button>
      </div>
    </div>
  );
};
