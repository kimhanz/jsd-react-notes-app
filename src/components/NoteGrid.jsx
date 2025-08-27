import React from "react"
import NoteCard from "./NoteCard"

const NoteGrid = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}

export default NoteGrid
