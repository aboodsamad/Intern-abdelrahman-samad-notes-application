import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { DeleteNotes } from "./DeleteNotes";
import { EditNotes } from "./EditNotes";

type Props = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function AddNotes({ notes, setNotes }: Props) {
  const [NotesText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  function AddNote(e: React.FormEvent) {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), text: NotesText, title: title, category: "story" },
    ]);
    setNoteText("");
    setTitle("");
  }

  return (
    <>
      <form onSubmit={AddNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(r) => setTitle(r.target.value)}
        />

        <input
          type="text"
          placeholder="Add Note"
          value={NotesText}
          onChange={(r) => setNoteText(r.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      <br />
      {show && (
        <ul>
          {notes.map((item) => (
            <>
              <li key={item.id}>
                <b>{item.title}</b>: {item.text}
              </li>
              <button onClick={() => DeleteNotes(item.id, { setNotes })}>
                Delete
              </button>
              <EditNotes note={item} setNotes={setNotes} />
            </>
          ))}
        </ul>
      )}
    </>
  );
}
