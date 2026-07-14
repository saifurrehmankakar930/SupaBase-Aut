import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello World</h1>
        <p className="text-gray-600">Welcome to your React app with Tailwind CSS!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">Tailwind</span>
          <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">React</span>
          <span className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">Vite</span>
        </div>
      </div>
    </div>
  )
}

export default App