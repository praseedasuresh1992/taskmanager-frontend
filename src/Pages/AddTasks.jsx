import React, { useState } from 'react'
import api from '../api' //  Axios instance configured for your backend

function AddTask() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
      
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
     e.preventDefault()
    const token = localStorage.getItem("token");
  
       if (!token) {
      setMessage("You must be logged in to add a task.")
      return
    }

    try {
      const res = await api.post('/addtask', task,{
        headers: {
          Authorization: `Bearer ${token}`, //  send token
        },
        withCredentials: true, //  include cookies if backend uses them
      })
      setMessage(' Task added successfully!')
      setTask({
        title: '',
        description: '',
        status: 'pending',
        dueDate: '',
          userId :""
      })
    } catch (err) {
      console.error(err)
      setMessage(' Failed to add task')
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-4 rounded-lg shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  )
}

export default AddTask
