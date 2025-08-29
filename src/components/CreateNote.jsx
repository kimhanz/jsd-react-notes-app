import axios from "axios"
import React, { useState } from "react"

const CreateNote = ({ isOpen, onClose, notes, setNotes, fetchNotes, API }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: [""],
  })

  // ถ้า isOpen เป็น false, ไม่ต้อง render อะไรเลย
  if (!isOpen) {
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(API, form)
      await fetchNotes()
    } catch (error) {
      console.error("Error create note: ", error)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    // Modal Overlay (พื้นหลังสีดำโปร่งแสง)
    <div className="fixed inset-0 bg-[#e7e8e7] bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6">Create a New Note</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-semibold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={form.content}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              value={form.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold"
          >
            Create Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNote
