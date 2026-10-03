import { useState } from "react";

export function useNotes(){
    const [NotesText, useNoteText] = useState("");

    return {NotesText, useNoteText};
}