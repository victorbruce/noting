import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState = {
  notes: [
    {
      id: "1",
      heading: "Friday September 30 2022",
      content: "What is on your mind.",
    },
  ],
};

const postsSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
	},
  extraReducers: {},
});

// actions

// selectors
export const getAllNotes = (state:RootState) => state.notes.notes

export default postsSlice.reducer;
