import React, { useState } from 'react'
import api from '../api'

function ViewUsers() {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')

  const handleViewUsers = async () => {
    try {
      console.log("button working")
      const res = await api.get('/getuser')
      setUsers(res.data)
      setMessage('')
    } catch (err) {
      console.error(err)
      setMessage('Failed to fetch users')
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">View Users</h1>

      <button
        onClick={handleViewUsers}
        
      >
        Load Users
      </button>

      {message && <p className="text-red-500 mb-3">{message}</p>}

      {users.length > 0 && (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">User Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td className="border p-2">{u._id}</td>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.username}</td>
                <td className="border p-2">{u.usertype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ViewUsers
