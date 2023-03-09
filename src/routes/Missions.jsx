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
                  <span className="span-status">Active Member</span>
                </td>
                <td className="status-td">
                  <button type="button" className="leave-join-btn">Leave Mission</button>
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
