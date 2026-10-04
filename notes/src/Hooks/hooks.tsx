import { useState } from "react";
import type { Note } from "../models/Notes";

export function useNotes(){
    const [notes , setNotes] = useState<Note[]>([]);

    return {notes, setNotes};
}