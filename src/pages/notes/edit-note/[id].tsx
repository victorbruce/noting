import { useState, useEffect, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "global/hooks";
import { getAllNotes, editNote } from "global/slices/notesSlice";

import { useRouter } from "next/router";

const EditNotePage = () => {
  const [title, setTitle] = useState<any>("");
  const [content, setContent] = useState<any>("");
  const [_note, setNote] = useState<any>();

  const notes = useAppSelector(getAllNotes);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const note = notes.find((note) => note.id === id);
    setNote(note);
    setTitle(note?.heading);
    setContent(note?.content);
  }, [id, notes]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title && content) {
      dispatch(editNote({ id: _note.id, heading: title, content }));
      router.push("/");
    }
  };

  return (
    <div className="w-full">
      <div className="container py-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg mx-auto"
        >
          <fieldset className="mb-8">
            <h1 className="text-xl">Edit Note</h1>
          </fieldset>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-xs font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="border border-black px-4 py-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="notes" className="text-xs font-bold mb-2">
              Notes
            </label>
            <textarea
              id="notes"
              className="border border-black rounded px-4 py-2 min-h-[100px]"
              cols={60}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-xs border border-black rounded px-4 py-2 bg-black text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNotePage;
