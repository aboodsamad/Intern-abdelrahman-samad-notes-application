import { useState } from 'react'
import { AddNotes } from './NotesManagment/addNotes'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AddNotes/>
  )
}

export default App
