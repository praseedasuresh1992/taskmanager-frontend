import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'


function Login() {
      const nav=useNavigate()
    let[data,setdata]=useState({email:"",username:"",password:""})

    const handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
     const submit=async (e)=>{
        e.preventDefault()
        try{
            const res=await api.post('/login',data)
            console.log(res.data.message)
            
            console.log(res.data.user)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            localStorage.setItem("token", res.data.token)        
            console.log("saved token",res.data.token)
            if(res.data.user.usertype==="admin"){
                nav("/admin")
            }
            else if(res.data.user.usertype==="user") {
                nav("/user")
            }
            else{
              console.log("you are not a valid user")
               nav("/login")  
            }   
        }catch(err){
          console.log("this is error");
          
            console.log(err.message)
        }
    }
  return (
    <div>
        <form onSubmit={submit}>
        <input type="email" name="email" placeholder='Enter email ' onChange={handleChange}/>
        <input type="text" name="username" placeholder='Enter Username' onChange={handleChange}/>
        <input type="password" name="password" placeholder='Enter password ' onChange={handleChange}/>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login