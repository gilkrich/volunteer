import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './userpage.css'
import { useState } from 'react';
import TextField from '@mui/material/TextField';





const Loginpage = ({logout, setloggedout}) => {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [usePassword, setUserPassword] = useState()
    function checklogin() {
      const users = JSON.parse(localStorage.getItem('users'))
      const check = users.find(a => a.email == email && a.password == usePassword)
      if (check == undefined) {
        alert("The email or the password are incorrect")
      }
      else {
        localStorage.setItem('loggeduser', JSON.stringify(check))
        setloggedout(!logout)
        navigate(-1)
      }
  
    }
  return (
    <div className='Login-page'>
    <h2>Login</h2>
    <TextField id="outlined-basic" label="email" variant="outlined" className='user-inputs' type='email' onChange={(e) => setemail(e.target.value)} />
    <TextField id="outlined-basic" label="password" variant="outlined" className='user-inputs' type='password' onChange={(e) => setUserPassword(e.target.value)} />
    <div style={{ width: '100%', marginLeft: '113px' }}>

      <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>
    </div>
    <button className='user-buttons' onClick={() => checklogin()}>Login</button>
    <p>Not a member?<Link to='Signup'>Sign up here</Link></p>
  </div>
  )
}

export default Loginpage
