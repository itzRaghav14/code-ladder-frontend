import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    startRating: 800,
    endRating: 3500,
  },
  reducers: {
    setRatingRange(state, action) {
      state.startRating = action.payload.startRating;
      state.endRating = action.payload.endRating;
      return state;
    },
  },
});

export const {setRatingRange} = searchSlice.actions
export default searchSlice.reducer
