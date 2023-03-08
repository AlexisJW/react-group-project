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
  extraReducers: (builder) => {
    builder
      .addCase(getMissionFromApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getMissionFromApi.fulfilled, (state, { payload }) => {
        const missionItems = Object.entries(payload).map(([missionId, [missionItems]]) => ({
          mission_id: missionId,
          mission_name: missionItems.mission_id,
          description: missionItems.description,
          ...missionItems,
        }));

        return { ...state, isLoading: false, missionItems };
      })
      .addCase(getMissionFromApi.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const missionsReducer = missionsSlice.reducer;
export default missionsReducer;
