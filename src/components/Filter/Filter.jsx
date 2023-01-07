import './Filter.scss';

export const Filter = ({ status, setStatus, gender, setGender }) => {
  return (
    <div className="filter-container">
      <span className="span-filter">Status</span>
      <div className="filter-button-container">
        <button
          className={`filter-button ${status === 'alive' ? 'selected' : ''}`}
          onClick={() => setStatus('alive')}
        >
          Alive
        </button>
        <button
          className={`filter-button ${status === 'dead' ? 'selected' : ''}`}
          onClick={() => setStatus('dead')}
        >
          Dead
        </button>
        <button
          className={`filter-button ${status === 'unknown' ? 'selected' : ''}`}
          onClick={() => setStatus('unknown')}
        >
          Unknown
        </button>
        <button className="filter-button" onClick={() => setStatus('')}>
          Clear
        </button>
      </div>
      <span className="span-filter">Gender</span>
      <div className="filter-button-container">
        <button
          className={`filter-button ${gender === 'female' ? 'selected' : ''}`}
          onClick={() => setGender('female')}
        >
          Female
        </button>
        <button
          className={`filter-button ${gender === 'male' ? 'selected' : ''}`}
          onClick={() => setGender('male')}
        >
          Male
        </button>
        <button
          className={`filter-button ${
            gender === 'genderless' ? 'selected' : ''
          }`}
          onClick={() => setGender('genderless')}
        >
          Genderless
        </button>
        <button
          className={`filter-button ${gender === 'unknown' ? 'selected' : ''}`}
          onClick={() => setGender('unknown')}
        >
          Unknown
        </button>
        <button className="filter-button" onClick={() => setGender('')}>
          Clear
        </button>
      </div>
    </div>
  );
};
