import React, { useState } from "react"
import CreateNote from "./CreateNote.jsx"

const SearchBar = ({ notes, setNotes, fetchNotes, API }) => {
  // สร้าง state เพื่อควบคุมการแสดงผลของ modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ฟังก์ชันสำหรับเปิด modal
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  // ฟังก์ชันสำหรับปิด modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="my-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Search notes by title, content, or tags"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 hover:cursor-pointer font-semibold">
            Search
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={handleOpenModal}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 font-bold hover:cursor-pointer"
          >
            Create Note
          </button>
        </div>

        {/* แสดง Component CreateNote แบบมีเงื่อนไข
        - `isOpen` จะเป็น true เมื่อ isModalOpen เป็น true
        - `onClose` จะส่งฟังก์ชัน handleCloseModal ไปให้ componentลูก เพื่อให้มันเรียกกลับมาปิดตัวเองได้
      */}
      </div>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
        fetchNotes={fetchNotes}
        API={API}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default SearchBar
