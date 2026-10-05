import { useState, type Dispatch, type SetStateAction } from "react";
import type { Note } from "../models/Notes";

type Props = {
  note: Note;
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function EditNotes({ note, setNotes }: Props) {
  return (
    <input
      type="text"
      value={note.text}
      onChange={(e) =>
        setNotes((prev) =>
          prev.map((item) =>
            item.id === note.id ? { ...item, text: e.target.value } : item,
          ),
        )
      }
    />
  );
}
