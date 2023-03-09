import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unReserveRocket } from '../redux/rockets/rocketsSlice';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReservation = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const cancelReservation = () => {
    dispatch(unReserveRocket(rocket.id));
  };
  const reserved = false;

  return (
    <article className="rocket-card">
      <img src={rocket.flickr_images[0]} alt="" />
      <div className="rocket-details">
        <h1>{rocket.name}</h1>
        <p className="rocket-description">
          { reserved ? <span className="badge badge-info">Reserved</span> : ''}
          {' '}
          {rocket.description}
        </p>
        {
          reserved
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
