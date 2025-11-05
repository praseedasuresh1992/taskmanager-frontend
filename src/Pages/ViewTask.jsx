import React, { useEffect, useState } from 'react'
import api from '../api' // ✅ your axios instance

function ViewTasks() {
  const [tasks, setTasks] = useState([])
  const [message, setMessage] = useState('')
  
  // 🔹 get logged-in user's ID (adjust based on how you store it)
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    const fetchTasks = async () => {
      if (!userId) {
        setMessage( 'Please log in to view your tasks')
        return
      }

      try {
        const res = await api.get(`/tasks/user/${userId}`)
        setTasks(res.data)
      } catch (err) {
        console.error(err)
        setMessage('Failed to fetch tasks')
      }
    }

    fetchTasks()
  }, [userId])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {message && <p className="mb-4 text-red-500">{message}</p>}

      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks found.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Due Date</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.description || '-'}</td>
                <td className="border p-2 capitalize">{task.status}</td>
                <td className="border p-2">
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}
                </td>
                <td className="border p-2">
                  {new Date(task.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ViewTasks
