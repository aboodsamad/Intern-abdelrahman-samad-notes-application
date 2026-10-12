import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { NoteForm } from "./notesForm";
import { NoteItem } from "./noteItem";
import { SearchNotes } from "./searchNotes";

type Props = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function AddNotes({ notes, setNotes }: Props) {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <NoteForm setNotes={setNotes} />
      <button className="btn-toggle" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      <br />
      <input
        className="input-search"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {show && (
        <ul className="note-list">
          {SearchNotes(notes, query).map((item) => (
            <NoteItem key={item.id} note={item} setNotes={setNotes} />
          ))}
        </ul>
      )}
    </div>
  );
}
