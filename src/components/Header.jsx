import React from "react"
import { Link } from "react-router-dom"

const Header = ({ userName }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800">RAG Notes</h1>
      </Link>
      <div className="flex items-center space-x-6">
        <span className="text-gray-700">Welcome, 👋 {userName}</span>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-600">
            Profile
          </Link>
          <Link to="/logout" className="text-red-500 hover:text-red-700">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
