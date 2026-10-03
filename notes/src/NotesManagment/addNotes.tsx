
import { useState } from "react";
export function AddNotes(){
    const [NotesText, useNoteText] = useState("");
    return (
        <>
            <input type="text" placeholder="Add Note" value={NotesText} onChange={(r) => useNoteText(r.target.value)} />
        </>
    )
}