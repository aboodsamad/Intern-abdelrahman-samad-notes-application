import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { NoteForm } from "./notesForm";
import { NoteItem } from "./noteItem";

type Props = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function AddNotes({ notes, setNotes }: Props) {
  const [NotesText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("story");
  const [show, setShow] = useState(false);
  

  function AddNote(e: React.FormEvent) {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), text: NotesText, title: title, category: category },
    ]);
    setNoteText("");
    setTitle("");
  }

  return (
    <div className="app">
      <NoteForm setNotes={setNotes}/>
      <button className="btn-toggle" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      <br />
      {show && (
        <ul className="note-list">
          {notes.map((item) => (
            <NoteItem key={item.id} note={item} setNotes={setNotes} />
            
          ))}
        </ul>
      )}
    </div>
  );
}
