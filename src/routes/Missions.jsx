import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionFromApi());
    }
  }, [missions, dispatch]);

  return (
    <main className="mission-main">
      <section className="mission-section"> Mission </section>
    </main>
  );
};

export default Missions;
