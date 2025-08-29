import { format } from "date-fns"
import { useState } from "react"
import { Link } from "react-router-dom"

const NoteCard = ({ note }) => {
  const { title, content, tags, createdOn } = note

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-200">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-auto">
        <div className="text-xs text-gray-500 mb-3">
          Created on: {format(new Date(createdOn), "dd/MM/yyyy")}
        </div>
        <div className="flex justify-start space-x-4 text-sm font-medium">
          <Link to="#" className="text-blue-600 hover:underline">
            View Details
          </Link>
          <button className="text-green-600 hover:underline hover:cursor-pointer">
            Edit
          </button>
          <button className="text-red-600 hover:underline hover:cursor-pointer">
            Delete
          </button>
          {/* <a href="#publish" className="text-red-500 hover:underline">
            Publish
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default NoteCard
