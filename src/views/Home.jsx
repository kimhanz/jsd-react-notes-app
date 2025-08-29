import React, { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar.jsx"
import NoteGrid from "../components/NoteGrid.jsx"
import axios from "axios"

const API = "http://localhost:3001/notes"

const Home = () => {
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API)
      console.log(res)
      setNotes(res.data.notes || [])
    } catch (error) {
      alert("Failed to fetch notes")
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <SearchBar
          notes={notes}
          setNotes={setNotes}
          fetchNotes={fetchNotes}
          API={API}
        />
        <NoteGrid notes={notes} />
      </main>
    </div>
  )
}

export default Home
