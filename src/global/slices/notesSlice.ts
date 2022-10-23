import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
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
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    removeNote: (state, action) => {
      const id = action.payload;
      const notes = state.notes.filter((note) => note.id !== id);
      state.notes = notes;
    },
    addNote: (state, action) => {
      const note = action.payload;
      note.id = nanoid();

      state.notes.push(note);
    },
    editNote: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((n) => n.id === note.id);

      state.notes[index].heading = note.heading;
      state.notes[index].content = note.content;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state, action) => {})
      .addCase(fetchNotes.fulfilled, (state, action) => {})
      .addCase(fetchNotes.rejected, (state, action) => {});
  },
});

// actions
export const { removeNote, addNote, editNote } = notesSlice.actions;

// selectors
export const getAllNotes = (state: RootState) => state.notes.notes;
export const selectNoteById = (state: RootState, noteId: string) => {
  state.notes.notes.find((note) => {
    return note.id === noteId;
  });
};

export default notesSlice.reducer;
