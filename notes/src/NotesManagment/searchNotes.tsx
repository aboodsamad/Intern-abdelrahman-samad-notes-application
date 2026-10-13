import type { Note } from "../models/Notes";

export function SearchNotes(notes: Note[], query: string, category: string) {
  return notes.filter(
    (n) =>
    (category === 'all' || n.category === category) && 
      (n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.text.toLowerCase().includes(query.toLowerCase())),
  );
}