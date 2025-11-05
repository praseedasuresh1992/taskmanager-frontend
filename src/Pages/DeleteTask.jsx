import React, { useState } from 'react'
import api from '../api'

function DeleteTask() {
  const [taskId, setTaskId] = useState('')
  const [message, setMessage] = useState('')

  const handleDelete = async () => {
    if (!taskId) {
      setMessage('⚠️ Please enter a Task ID')
      return
    }

    try {
      const res = await api.delete(`/deletetask/${taskId}`)
      setMessage('✅ Task deleted successfully!')
      setTaskId('')
    } catch (err) {
      console.error(err)
      setMessage('❌ Failed to delete task')
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Delete Task</h1>

      <input
        type="text"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
      />

      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
      >
        Delete Task
      </button>

      {message && <p className="text-center mt-4 text-gray-700">{message}</p>}
    </div>
  )
}

export default DeleteTask
