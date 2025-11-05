import React, { useState } from 'react'
import api from "../api"

function UserRegistration() {
    const [data,setdata]=useState({
        name:"",email:"",username:"",password:"",usertype:"user"})

        const handleChange=(e)=>{
            setdata({...data,[e.target.name]:e.target.value})
        }

        const submitChange=async(e)=>{
            e.preventDefault()
            try {
                const res=await api.post("/adduser",data)
                 console.log(res.data.message)
                
            } catch (error) {
                console.log(error.message);
                
            }
            ;
            

        }
  return (
    <div>
        <h1>Register</h1> 
        <form onSubmit={submitChange}>
        <input type="text" placeholder='Enter the name ' name='name' onChange={handleChange}></input>
        <input type="email" placeholder='Enter the email ' name='email' onChange={handleChange}></input>       
        <input type="text" placeholder='Enter  User Name' name='username' onChange={handleChange}></input>
        <input type="password" placeholder='Enter Password' name='password' onChange={handleChange}></input>
        <select name="usertype"  value={data.usertype}  onChange={handleChange} required>
            <option value="">Select user type</option>
            <option value="admin" >UserManager</option>
            <option value="user">user</option>
        </select>
        <button type="submit">Register </button>
    </form>
    </div>
  )
}

export default UserRegistration