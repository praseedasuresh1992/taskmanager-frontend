import React from 'react'
import { Link, useNavigate ,Outlet  } from 'react-router-dom'
import api from '../api';


function AdminDashboard() {
  const navigate = useNavigate();
    const handleLogout = async () => {
       
    try {
      const res = await api.post("/logoutuser");
      localStorage.clear();

      console.log(res.data.message);
      navigate("/login"); // Redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }
  return (
    <>
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex justify-center gap-4">
        <Link
          to="getuser"
          className="bg-blue-500 hover:bg-blue-600 text-dark px-4 py-2 rounded"
        >
          View Users
        </Link>

        <Link
          to="deleteuser"
          className="bg-red-500 hover:bg-red-600 text-dark px-4 py-2 rounded"
        >
          Delete User
        </Link>
          <button
            onClick={handleLogout}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default AdminDashboard
