import type { Dispatch, SetStateAction } from "react";
import type { Note } from "../models/Notes";

type Props = {
  setNotes: Dispatch<SetStateAction<Note[]>>

}

export function DeleteNotes(id: number, {setNotes} : Props){
    setNotes((prev) => prev.filter((item) => item.id !==id));
}