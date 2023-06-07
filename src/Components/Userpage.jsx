import React from 'react'
import './userpage.css'
import { Outlet, Link, useParams } from 'react-router-dom'

const Userpage = () => {
  return (
    <div className='userpage'>
             <Outlet/>
    </div>
  )
}

export default Userpage
