import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";

const initialState = {
  notes: [
    {
      id: "1",
      heading: "Friday September 30 2022",
      content: "What is on your mind?",
    },
    {
      id: "2",
      heading: "Saturday October 1 2022",
      content: "Learn, Practice, Work.",
    },
  ],
  status: "idle",
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchlNotes", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

const postsSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state, action) => {})
      .addCase(fetchNotes.fulfilled, (state, action) => {})
      .addCase(fetchNotes.rejected, (state, action) => {});
  },
});

// actions

// selectors
export const getAllNotes = (state: RootState) => state.notes.notes;

export default postsSlice.reducer;
