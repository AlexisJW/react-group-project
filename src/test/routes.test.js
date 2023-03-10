import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/missions/missionsSlice';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import Missions from '../routes/Missions';
import Rockets from '../routes/Rockets';
import Profile from '../routes/Profile';

jest.mock('axios');
describe('Test for routes', () => {
  const store = configureStore({
    reducer: {
      missions: missionsReducer,
      rockets: rocketsReducer,
    },
  });

  it('Missions renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Profile renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rockets renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
