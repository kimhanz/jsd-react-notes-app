import React from "react"

const SearchBar = () => {
  return (
    <div className="my-6">
      <div className="flex">
        <input
          type="text"
          placeholder="Search notes by title, content, or tags"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 font-semibold">
          Search
        </button>
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 font-bold">
          Create Note
        </button>
      </div>
    </div>
  )
}

export default SearchBar
