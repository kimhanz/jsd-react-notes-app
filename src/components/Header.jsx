import React from "react"

const Header = ({ userName }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">RAG Notes</h1>
      <div className="flex items-center space-x-6">
        <span className="text-gray-700">Welcome, {userName} 👋</span>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <a href="#dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#profile" className="text-gray-600 hover:text-blue-600">
            Profile
          </a>
          <a href="#logout" className="text-red-500 hover:text-red-700">
            Logout
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
