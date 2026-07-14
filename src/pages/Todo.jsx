import { useEffect, useState } from 'react'
import { supabase } from '../config/supabase/supabase'

function Todo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todo, setTodo] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");

    // Add Todo
    const addTodo = async (e) => {
        e.preventDefault()
        console.log(title, description);

        const { data, error } = await supabase
            .from("Todos")
            .insert([{ Title: title, Desc: description }])
            .select()
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            setTitle("");
            setDescription("");
            fetchTodos();
        }
    }

    // Read Todo
    const fetchTodos = async () => {
        const { data, error } = await supabase
            .from("Todos")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            console.log(error)
        } else {
            console.log(data);
            setTodo(data)
        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    // Delete Todo
    const deleteTodo = async (id) => {
        const { error } = await supabase
            .from("Todos")
            .delete()
            .eq("id", id)

        if (error) {
            console.log(error)
        } else {
            fetchTodos()
        }
    }

    // Update Todo
    const startEdit = (item) => {
        setEditingId(item.id);
        setEditTitle(item.Title);
        setEditDescription(item.Desc);
    }

    const updateTodo = async (id) => {
        const { error } = await supabase
            .from("Todos")
            .update({ Title: editTitle, Desc: editDescription })
            .eq("id", id)

        if (error) {
            console.log(error)
        } else {
            setEditingId(null);
            fetchTodos();
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>
                    <form onSubmit={addTodo} className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Enter Todo Title" 
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200"
                            required
                        />
                        <textarea 
                            placeholder="Enter Todo Description" 
                            onChange={(e) => setDescription(e.target.value)} 
                            value={description}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200 resize-none"
                            rows="3"
                            required
                        />
                        <button 
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                        >
                            Add Todo
                        </button>
                    </form>
                </div>

                <div className="space-y-4">
                    {
                        todo.length > 0 ? todo.map((item) => {
                            return (
                                <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                                    {editingId === item.id ? (
                                        // Edit mode
                                        <div className="space-y-4">
                                            <input 
                                                type="text" 
                                                value={editTitle} 
                                                onChange={(e) => setEditTitle(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                            />
                                            <textarea 
                                                value={editDescription} 
                                                onChange={(e) => setEditDescription(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                                                rows="2"
                                            />
                                            <div className="flex space-x-2">
                                                <button 
                                                    onClick={() => updateTodo(item.id)}
                                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={() => setEditingId(null)}
                                                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        // View mode
                                        <>
                                            <div className="mb-4">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.Title}</h3>
                                                <p className="text-gray-600">{item.Desc}</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button 
                                                    onClick={() => startEdit(item)}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => deleteTodo(item.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        }) : (
                            <div className="bg-white rounded-xl shadow-md p-12 text-center">
                                <p className="text-gray-500 text-lg">No todos yet. Create your first todo!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo