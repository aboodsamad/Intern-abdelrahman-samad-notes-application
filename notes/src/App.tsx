import { useState } from 'react'
import { AddNotes } from './NotesManagment/addNotes'

import { useNotes } from './Hooks/hooks';

function App() {
    const { notes, setNotes } = useNotes();


  return (
    <AddNotes notes={notes} setNotes={setNotes}/>
  )
}

export default App
