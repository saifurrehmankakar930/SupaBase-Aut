import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              to={'/'} 
              className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to={'/about'} 
              className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to={'/todo'} 
              className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
            >
              Todo
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link 
              to={'/login'} 
              className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to={'/register'} 
              className="bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar