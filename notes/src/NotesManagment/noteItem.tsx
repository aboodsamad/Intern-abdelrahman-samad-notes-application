import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { DeleteNotes } from "./DeleteNotes";
import { EditNotes } from "./EditNotes";

type Props = {
  note: Note;
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function NoteItem({ note, setNotes }: Props) {
  return (
    <li className="note-item">
      <b>{note.title}</b> ({note.category}): {note.text}
      <button onClick={() => DeleteNotes(note.id, { setNotes })}>Delete</button>
      <EditNotes note={note} setNotes={setNotes} />
    </li>
  );
}