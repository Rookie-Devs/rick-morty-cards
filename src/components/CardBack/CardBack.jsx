import './CardBack.scss';

//TODO: REFATORAR

export const CardBack = ({ data, openModal, setOpenModal, idToShow }) => {
  if (openModal) {
    console.log({ data });
    return (
      <>
        {data
          .filter(card => card.id === idToShow)
          .map(card => (
            <div
              className="card-modal-background"
              key={card.id}
              onClick={() => setOpenModal(!openModal)}
            >
              <div className="card-back" onClick={e => e.stopPropagation()}>
                <div className="card-info-container">
                  <h3
                    className={`card-username ${
                      card.name.length > 20 ? 'card-username-compact' : ''
                    }`}
                  >
                    {card.name}
                  </h3>
                  <div className="card-info">
                    <div className="card-info-block">
                      <span className="card-text">Status</span>
                      <span className="card-text-value">{card.status}</span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Species</span>
                      <span className="card-text-value">{card.species}</span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Origin</span>
                      <span className="card-text-value">
                        {card.origin.name}
                      </span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Type</span>
                      <span className="card-text-value">
                        {card.type === '' ? 'Unknown' : card.type}
                      </span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Gender</span>
                      <span className="card-text-value">{card.gender}</span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Location</span>
                      <span className="card-text-value">
                        {card.location.name}
                      </span>
                    </div>
                    <div className="card-info-block">
                      <span className="card-text">Have appeared at</span>
                      <span className="card-text-value">
                        {card.episode.length + ' episodes'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setOpenModal(!openModal);
                    }}
                    className="card-button-info"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  } else return null;
};
