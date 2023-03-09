import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_MISSION_API = 'https://api.spacexdata.com/v3';

const initialState = {
  missions: [],
  isLoading: true,
};

export const getMissionFromApi = createAsyncThunk(
  'missions/getMissionFromApi',
  async (payload, thunkAPI) => {
    try {
      const resp = await axios.get(`${URL_MISSION_API}/missions`, { });
      const { data } = resp;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((where) => where.mission_id === action.payload);
      mission.joined = !mission.joined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionFromApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getMissionFromApi.fulfilled, (state, { payload }) => {
        const missions = Object.entries(payload).map(([missionId, missionItems]) => ({
          mission_id: missionId,
          mission_name: missionItems.mission_name,
          description: missionItems.description,
        }));

        return { ...state, isLoading: false, missions };
      })
      .addCase(getMissionFromApi.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const missionsReducer = missionsSlice.reducer;
export default missionsReducer;
export const { joinMission } = missionsSlice.actions;
