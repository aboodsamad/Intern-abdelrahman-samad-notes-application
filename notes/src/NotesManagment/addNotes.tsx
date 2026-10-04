import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { DeleteNotes } from "./DeleteNotes";

type Props = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function AddNotes({ notes, setNotes }: Props) {
  const [NotesText, setNoteText] = useState("");
  const [show, setShow] = useState(false);

  function AddNote(e: React.FormEvent) {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), text: NotesText, title: "here", category: "story" },
    ]);
    setNoteText("");
  }

  return (
    <>
      <form onSubmit={AddNote}>
        <input
          type="text"
          placeholder="Add Note"
          value={NotesText}
          onChange={(r) => setNoteText(r.target.value)}
        />
      </form>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      <br />
      {show && (
        <ul>
          {notes.map((item) => (
            <>
              <li key={item.id}>{item.text}</li>
              <button onClick={() => DeleteNotes(item.id, {setNotes})}>Delete</button>
            </>
          ))}
        </ul>
      )}
    </>
  );
}
