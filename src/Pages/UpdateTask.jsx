import React, { useState } from 'react'
import api from '../api'

function UpdateTask() {
  const [taskId, setTaskId] = useState('')
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    if (!taskId) {
      setMessage('⚠️ Please enter Task ID to update')
      return
    }

    try {
      const res = await api.put(`/updatetask/${taskId}`, task)
      setMessage('✅ Task updated successfully!')
      setTask({
        title: '',
        description: '',
        status: 'pending',
        dueDate: ''
      })
      setTaskId('')
    } catch (err) {
      console.error(err)
      setMessage('❌ Failed to update task')
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Task</h1>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4 border p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Enter Task ID"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
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
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Update Task
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  )
}

export default UpdateTask
