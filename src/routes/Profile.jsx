import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missionsSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionFromApi());
    }
  }, [missions, dispatch]);

  const filteringMission = missions.filter((mission) => mission.joined === true);

  return (
    <main className="profile-main">
      <section className="profile-mission">
        <h2> My Missions </h2>
        <table>
          <tbody>
            {filteringMission.length > 0 ? (
              <>
                {missions.filter((mission) => mission.joined).map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>
                      {mission.mission_name}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                {' '}
                <td> No joined missions </td>
                {' '}
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Profile;
