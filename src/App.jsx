import React from "react"
import Header from "./components/Header.jsx"
import SearchBar from "./components/SeachBar.jsx"
import NoteGrid from "./components/NoteGrid.jsx"

// ข้อมูลตัวอย่าง (ปกติจะดึงมาจาก API)
const mockNotes = [
  {
    id: 1,
    pinned: true,
    title: "Algorithm: Insertion Sort",
    content:
      "Insertion Sort processes the list from left to right, taking each element in turn and shifting it leftward through the already-sorted portion until it meets a smaller or...",
    tags: ["#DSA"],
    createdOn: "6/28/2025",
    isPublished: false,
  },
  {
    id: 2,
    pinned: true,
    title: "Prompt: Algorithms",
    content:
      "Explain how Bubble Sort algorithm works in two sentences in English. Explain how Bubble Sort algorithm works in two sentences in Thai whilst keepi...",
    tags: ["#prompt"],
    createdOn: "8/18/2025",
    isPublished: true,
  },
  {
    id: 3,
    pinned: true,
    title: "Algorithm: Bubble Sort",
    content:
      "Bubble Sort repeatedly steps through the list, comparing each adjacent pair of elements and swapping them when they are in the wrong order. With each pass t...",
    tags: ["#DSA"],
    createdOn: "6/28/2025",
    isPublished: false,
  },
  {
    id: 4,
    pinned: false,
    title: "Domain 4 - 4.2 Lesson 2",
    content:
      "Recognize the importance of Transparent and Explainable Models. Let's wrap up the second task statement from Domain 4, which is to recognize the importance of...",
    tags: ["#AIF-C01-English"],
    createdOn: "6/27/2025",
    isPublished: true,
  },
  {
    id: 5,
    pinned: false,
    title: "Domain 3 - 3.1 Lesson 4",
    content:
      "Describe Design Considerations for Applications that Use FMS. Let's continue with task statement 3.1 and pick up from the last lesson. RAG combines two...",
    tags: ["#AIF-C01-English"],
    createdOn: "6/27/2025",
    isPublished: true,
  },
  {
    id: 6,
    pinned: false,
    title: "Domain 4 - 4.2 Lesson 1",
    content:
      "Recognize the importance of Transparent and Explainable Models. Let's move on to the second task statement from Domain 4, which is to recognize the importance of...",
    tags: ["#AIF-C01-English"],
    createdOn: "6/27/2025",
    isPublished: true,
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Neetibuta Vasinondha" />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        <NoteGrid notes={mockNotes} />
      </main>
    </div>
  )
}

export default App
