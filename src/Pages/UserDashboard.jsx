import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function UserDashboard() {
  return (
    <>
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {/* Add Task */}
        <Link
          to="addtask"
          className="bg-green-500 hover:bg-green-600 text-dark px-6 py-3 rounded-lg shadow-md text-center transition"
        >
           Add Task
        </Link>

        {/* View Tasks */}
        <Link
          to="gettask"
          className="bg-blue-500 hover:bg-blue-600 text-dark px-6 py-3 rounded-lg shadow-md text-center transition"
        >
          View Tasks
        </Link>

        {/* Update Task */}
        <Link
          to="updatetask"
          className="bg-yellow-500 hover:bg-yellow-600 text-dark px-6 py-3 rounded-lg shadow-md text-center transition"
        >
           Update Task
        </Link>

        {/* Delete Task */}
        <Link
          to="deletetask"
          className="bg-red-500 hover:bg-red-600 text-dark px-6 py-3 rounded-lg shadow-md text-center transition"
        >
           Delete Task
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default UserDashboard
