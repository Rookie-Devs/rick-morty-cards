import './CardFront.scss';

export const CardFront = ({ data, handleShowModal }) => {
  return (
    <div className="card-list">
      {data.map(card => (
        <div className="card-front" key={card.id}>
          <img className="card-image" alt="Cards" src={card.image} />
          <div className="card-info-container">
            <h3
              className={`card-username ${
                card.name.length > 20 ? 'card-username-compact' : ''
              }`}
            >
              {card.name}
            </h3>
            <button
              className="card-button-info"
              onClick={() => handleShowModal(card.id)}
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* <h3
className={`card-username ${
  name.length > 20 ? 'card-username-compact' : ''
}`}
> */
}
