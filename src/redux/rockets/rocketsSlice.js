import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_MISSION_API = 'https://api.spacexdata.com/v3';

const initialState = {
  rockets: [],
  isLoading: true,
  error: false,
};

export const getRocketsFromApi = createAsyncThunk(
  'rockets/getRocketsFromApi',
  async (payload, thunkAPI) => {
    try {
      const resp = await axios.get(`${URL_MISSION_API}/rockets`, { });
      const { data } = resp;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsFromApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getRocketsFromApi.fulfilled, (state, { payload }) => {
        const rockets = payload.map((rocket) => ({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickr_images: [...rocket.flickr_images],
          description: rocket.description,
        }));

        return { ...state, isLoading: false, rockets };
      })
      .addCase(getRocketsFromApi.rejected,
        (state) => ({ ...state, isLoading: false, error: true }));
  },
});

const rocketsReducer = rocketsSlice.reducer;
export default rocketsReducer;
