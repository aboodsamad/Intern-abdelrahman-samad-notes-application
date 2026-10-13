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
      <div className="note-header">
        <b className="note-title">{note.title}</b>
        <span className="note-category">{note.category}</span>
        <button
          className="btn-delete"
          onClick={() => DeleteNotes(note.id, { setNotes })}
        >
          Delete
        </button>
      </div>
      <p className="note-text">{note.text}</p>
      <div className="note-edit">
        <EditNotes note={note} setNotes={setNotes} />
      </div>
      <br />
    </li>
    
  );
}
