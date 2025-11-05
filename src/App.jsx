import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import api from './api';
import UserRegistration from  './Pages/UserRegistration'
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';
import UserDashboard from './Pages/UserDashboard';
import ViewUsers from './Pages/Viewusers';
import DeleteUser from './Pages/DeleteUser';
import AddTask from './Pages/AddTasks';
import ViewTasks from './Pages/ViewTask';
import UpdateTask from './Pages/UpdateTask';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />,
      children: [
        { path: "login", element: <Login /> },
        { path: "adduser", element: <UserRegistration /> },
       ]
    },
  { path: "admin", element: <AdminDashboard/>,
     children:[  
  { path: "getuser", element: <ViewUsers /> },
  { path: "deleteuser", element: <DeleteUser/> }
  ]},
  { path: "user", element: <UserDashboard /> ,
    children:[
      {path: "addtask", element: <AddTask/>},
      {path: "gettask", element: <ViewTasks/>},
      {path: "updatetask", element: <UpdateTask/>},
      {path: "deletetask", element: <AddTask/>}

    ]
  },
  { path: "logout", element: <DeleteUser/> }

  ]);
  return (
    <>
     <RouterProvider router={router} />
       
    </>
  )
}

export default App
