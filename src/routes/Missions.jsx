import React from 'react';
import { useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  dispatch(getMissionFromApi());

  return (
    <main className="mission-main">
      <section className="mission-section"> Mission </section>
    </main>
  );
};

export default Missions;
