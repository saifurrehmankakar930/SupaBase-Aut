import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to our Todo App! This is a full-stack application built with React and Supabase.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Features:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                User Authentication (Login/Register)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Create, Read, Update, Delete Todos
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Real-time Database with Supabase
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Beautiful UI with Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About