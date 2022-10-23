import { useAppDispatch, useAppSelector } from "global/hooks";
import { getAllNotes, removeNote } from "global/slices/notesSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const NoteDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [noteDetails, setNoteDetails] = useState<any>();
  const dispatch = useAppDispatch();

  const notes = useAppSelector(getAllNotes);

  const deleteNote = (noteId: string) => {
    dispatch(removeNote(noteId));
    router.push("/");
  };

  useEffect(() => {
    const note = notes.find((note) => note.id === id);
    setNoteDetails(note);
  }, [id, notes]);

  return (
    <div className="w-full">
      <div className="container py-16">
        <div className="mb-4">
          <Link href="/">&larr; Go back</Link>
        </div>
        <h1 className="text-3xl mb-6">{noteDetails?.heading}</h1>
        <p>{noteDetails?.content}</p>
        <div className="mt-4 flex gap-4 items-center">
          <button
            onClick={() => deleteNote(noteDetails.id)}
            className="border border-black rounded px-4 py-2 text-xs hover:bg-black hover:text-white duration-200"
          >
            Delete
          </button>
          <Link href={`/notes/edit-note/${noteDetails?.id}`}>
            <a className="underline text-sm">Edit Note</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsPage;
