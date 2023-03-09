import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => {
  const handleReservation = () => {

  };

  const cancelReservation = () => {

  };

  return (
    <article className="rocket-card">
      <img src={rocket.flickr_images[0]} alt="" />
      <div className="rocket-details">
        <h1>{rocket.name}</h1>
        <p className="rocket-description">
          {rocket?.isReserved ? <span /> : ''}
          {' '}
          {rocket.description}
        </p>
        {
          rocket?.isReserved
            ? <button className="btn btn-secondary" type="button" onClick={cancelReservation}>Cancel Reservation</button>
            : <button className="btn btn-primary" type="button" onClick={handleReservation}>Reserve Rocket</button>
        }
      </div>
    </article>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    isReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
