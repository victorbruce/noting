import type { NextPage } from "next";

// redux
import { getAllNotes } from "global/slices/notesSlice";
import { useAppSelector } from "global/hooks";

const Home: NextPage = () => {
  const notes = useAppSelector(getAllNotes);

  console.log("🔥", notes);

  const renderNotes = notes.map((note) => (
    <article key={note.id}>
      <h1>{note.heading}</h1>
      <p>{note.content}</p>
    </article>
  ));

  return (
    <>
      <h1>noting.</h1>
      {renderNotes}
    </>
  );
};

export default Home;
