import type { NextPage } from "next";

// redux
import { getAllNotes } from "global/slices/notesSlice";
import { useAppSelector } from "global/hooks";

const Home: NextPage = () => {
  const notes = useAppSelector(getAllNotes);

  const renderNotes = notes.map((note) => (
    <article key={note.id} className="border px-4 py-8 rounded max-w-sm">
      <h1 className="text-2xl font-bold mb-4">{note.heading}</h1>
      <p>{note.content}</p>
    </article>
  ));

  return (
    <div className="container py-16">
      <div className="flex gap-4">{renderNotes}</div>
    </div>
  );
};

export default Home;
