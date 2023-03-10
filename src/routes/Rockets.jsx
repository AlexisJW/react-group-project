import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from '../components/RocketCard';
import { getRocketsFromApi } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsFromApi());
    }
  }, [rockets, dispatch]);

  return (
    <main className="rockets-main">
      <section className="rockets-section">
        {
          rockets
          && rockets.map((rocket) => <RocketCard key={rocket.id} rocket={rocket} />)
        }
      </section>
    </main>
  );
};

export default Rockets;
