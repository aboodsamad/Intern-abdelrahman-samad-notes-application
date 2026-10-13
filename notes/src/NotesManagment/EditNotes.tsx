import { useState, type Dispatch, type SetStateAction } from "react";
import type { Note } from "../models/Notes";
import { categories } from "../models/Notes";

type Props = {
  note: Note;
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export function EditNotes({ note, setNotes }: Props) {
  return (
    <>
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
      <input
        className="input-edit"
        type="text"
        value={note.title}
        onChange={(e) =>
          setNotes((prev) =>
            prev.map((item) =>
              item.id === note.id ? { ...item, title: e.target.value } : item,
            ),
          )
        }
      />
      <select
        className="select-category"
        value={note.category}
        onChange={(e) =>
          setNotes((prev) =>
            prev.map((item) =>
              item.id === note.id
                ? { ...item, category: e.target.value }
                : item,
            ),
          )
        }
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </>
  );
}
