import { useEffect } from 'react'
import { supabase } from '../config/supabase/supabase'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate()

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.log(error.message)
        navigate('/login')
        return
      }

      console.log('User:', data.user)
    }

    getCurrentUser()
  }, [])


  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700">You are successfully logged in!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home