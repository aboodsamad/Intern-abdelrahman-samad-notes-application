import type { Note } from "../models/Notes";

export function SearchNotes(notes: Note[], query: string) {
  return notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.text.toLowerCase().includes(query.toLowerCase()),
  );
}