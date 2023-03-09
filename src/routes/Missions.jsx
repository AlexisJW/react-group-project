import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi, joinMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionFromApi());
    }
  }, [missions, dispatch]);

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <main className="mission-main">
      <section className="mission-section">
        <table>
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th scope="col" className="py-3 px-6 border">
                Mission
              </th>
              <th scope="col" className="py-3 px-6 border">
                Description
              </th>
              <th scope="col" className="py-3 px-6 border">
                Status
              </th>
              <th scope="col" className="py-3 border">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission, index) => (
              <tr className={`${index % 2 !== 0 ? 'white-color' : 'grey-color'}`} key={mission.mission_id}>
                <th scope="row">
                  {mission.mission_name}
                </th>
                <td className="description">
                  <p>
                    {mission.description}
                  </p>
                </td>
                <td className="status-td">
                  {mission.joined ? (
                    <span className="active-span-status">Active Member</span>
                  ) : (
                    <span className="not-active-span-status">NOT A MEMBER</span>
                  )}
                </td>
                <td className="status-td">
                  {mission.joined ? (
                    <button type="button" className="leave-btn" onClick={() => handleClick(mission.mission_id)}>Leave Mission</button>
                  ) : (
                    <button type="button" className="join-btn" onClick={() => handleClick(mission.mission_id)}>Join Mission</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Missions;
