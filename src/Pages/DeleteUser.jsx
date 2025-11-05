import React, { useState } from 'react'
import api from '../api'

function DeleteUser() {
  const [userId, setUserId] = useState('')
  const [message, setMessage] = useState('')

  const handleDeleteUser = async () => {
    if (!userId) {
      setMessage('Please enter a User ID')
      return
    }
    try {
      const res = await api.delete(`/deleteuser/${userId}`)
      setMessage(res.data.message || 'User deleted successfully!')
      setUserId('')
    } catch (err) {
      console.error(err)
      setMessage('Error deleting user')
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Delete User</h1>

      <input
        type="text"
        placeholder="Enter User ID to delete"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
      />

      <button
        onClick={handleDeleteUser}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
      >
        Delete User
      </button>

      {message && <p className="text-gray-700 mt-4">{message}</p>}
    </div>
  )
}

export default DeleteUser
