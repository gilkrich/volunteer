import React, { useEffect, useState } from 'react'
import './myrequests.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';
   
const Mymassages = ({setloggedout,logout}) => {
    const [userlog2,setuserlog]=useState()

  useEffect(()=>{
    if (localStorage.getItem('loggeduser')) {
       const userlog = JSON.parse(localStorage.getItem('loggeduser'))
       setuserlog(userlog)
    }
  },[logout])

   function deletebutton(index) {
     const newuser = JSON.parse(localStorage.getItem('loggeduser'))
     newuser.massages.splice(index,1) 
     localStorage.setItem('loggeduser',JSON.stringify(newuser))
     setloggedout(!logout)
   }

  return (
    <div id='my-massages-cont'>
      <h1 className='title-page'>My massages</h1>
     {localStorage.getItem('loggeduser')&&<div>
       <div className='background-cont'>
      </div>
      <h1 className='title-second-page'>Welcome {userlog2?.username} would you like to send a request</h1>
      <h1 style={{textAlign:'center',marginBottom:'40px',marginTop:'40px'}}>My massages</h1>
      <div className='main-massage-div'>
        {userlog2?.massages?.map((item,index)=>{
          return(
            <div className='massage-template'>
         <div className='massage-cont' key={index}>
             <h4 style={{textAlign:'center',textDecoration:'line'}}>from {item.from.username}</h4>
              <h3>{item.text}</h3>
              <div className='user-info'><span>my email:{item.from.email}</span> <span>my phone {item.from.phone}</span></div>
         </div>
           <button className='delete-button' onClick={()=>deletebutton(index)}>X</button>
            </div>
          )

        })
        }
      </div>
      </div>
}

     {!localStorage.getItem('loggeduser')&&<div className='background-cont-two'>
                <h1 className='title-second-page'>To be able to get requests you need to be logged in first</h1>
              <Link to='/user/Signup'>
               <button className='new-sign'>Sign-Up</button>
              </Link> 
      </div>}
    </div>
  )
}

export default Mymassages;
