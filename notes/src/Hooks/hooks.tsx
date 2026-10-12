import { useEffect, useState } from "react";
import type { Note } from "../models/Notes";

export function useNotes(){
    const [notes , setNotes] = useState<Note[]>(() =>{
        const saved = localStorage.getItem("notes");
            return saved ? JSON.parse(saved) : [];
        
    });

    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return {notes, setNotes};
}