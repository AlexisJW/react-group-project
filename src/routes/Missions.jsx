import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissionFromApi());
    }, '1000');
  }

  return (
    <main className="mission-main">
      <section className="mission-section"> Mission </section>
    </main>
  );
};

export default Missions;
