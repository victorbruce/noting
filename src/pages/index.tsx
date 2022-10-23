import type { NextPage } from "next";
import { useRouter } from "next/router";

// redux
import { getAllNotes } from "global/slices/notesSlice";
import { useAppSelector } from "global/hooks";
import Link from "next/link";

const Home: NextPage = () => {
  const notes = useAppSelector(getAllNotes);
  const router = useRouter();

  const renderNotes = notes.map((note) => (
    <article key={note.id} className="border px-4 py-8 rounded w-[300px]">
      <h1 className="text-2xl font-bold mb-4">{note.heading}</h1>
      <p className="mb-4">{note.content}</p>
      <Link href={`/notes/${note.id}`}>
        <a className="text-xs uppercase underline">View Details</a>
      </Link>
    </article>
  ));

  return (
    <div className="container py-16">
      <button
        onClick={() => router.push("/notes/add-note")}
        className="text-xs border border-black rounded px-4 py-2 mb-8 bg-black text-white hover:bg-white hover:text-black"
      >
        Add New Note
      </button>
      <div className="flex gap-6 flex-wrap justify-between">{renderNotes}</div>
    </div>
  );
};

export default Home;
