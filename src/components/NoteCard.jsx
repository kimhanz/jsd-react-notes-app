import React from "react"

// ไอคอนรูปหมุด (SVG)
const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1.5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 9.586V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
    <path d="M2 12a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
  </svg>
)

const NoteCard = ({ note }) => {
  const { pinned, title, content, tags, createdOn, isPublished } = note

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-200">
      <div className="flex-grow">
        {pinned && (
          <div className="flex items-center text-sm text-red-500 font-semibold mb-2">
            <PinIcon />
            Pinned
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-auto">
        <div className="text-xs text-gray-500 mb-3">
          Created on: {createdOn}
        </div>
        <div className="flex justify-start space-x-4 text-sm font-medium">
          <a href="#view" className="text-blue-600 hover:underline">
            View Details
          </a>
          <a href="#edit" className="text-gray-600 hover:underline">
            Edit
          </a>
          <a href="#delete" className="text-gray-600 hover:underline">
            Delete
          </a>
          <a href="#publish" className="text-red-500 hover:underline">
            {isPublished ? "Unpublish" : "Publish"}
          </a>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
