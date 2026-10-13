import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { categories } from "../models/Notes";
type Props = {
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function NoteForm({ setNotes }: Props) {
  const [NotesText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("story");

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
    <form onSubmit={AddNote} className="note-form">
      <input
        className="input-title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(r) => setTitle(r.target.value)}
      />

      <input
        className="input-note"
        type="text"
        placeholder="Add Note"
        value={NotesText}
        onChange={(r) => setNoteText(r.target.value)}
      />
      <button type="submit">Add</button>
      <select
        className="select-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </form>
  );
}
