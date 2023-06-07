import React from 'react'
import { useState } from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'
import "./layout.css"
import Logo from "../Components/images/logo.png"



const Layout = () => {
  return (
    <div className='main-container'>
      <nav id='navbar'>
        <div style={{ display: 'flex' }}>
          <div>
            {/* <Link to='/'><h2 style={{ color: 'white', fontSize: 'xxx-large', fontFamily: 'system-ui' }}>GymFlow</h2></Link> */}
            {/* <Link to='/' className='nav-link'> </Link> */}
          </div>
          <div id='nav-links-side'>
            <img id='logo' src={Logo} alt="" />
            <Link to='/' className='nav-link'>Home</Link>
            <Link  className='nav-link'>My requests</Link>
          </div>
        </div>
        {/* <Hamburger color="white" className='menu-icon' onToggle={setnavbar} />
        {localStorage.getItem('loggeduser') && <div className='signout-container'>
          <h4 className='user-name-style'>{JSON.parse(localStorage.getItem('loggeduser')).username}</h4>
          <AccountCircleIcon style={{ fontSize: 'xx-large' }} id='user-icon' onClick={() => showout()} />
          {signbutton && <button className='signout-button' onClick={() => signout()}><Link>signout</Link></button>}
        </div>
        // } */}
        {/* // {!localStorage.getItem('loggeduser') &&  */}
        <div className='nav-login-side'>
        //   <Link className='login-button-link' to='user'><button className='login-button'>Login</button></Link>
        //   <Link className='signup-button-link' to='user/signup'> <button className='signup-button'>Signup</button></Link>
        // </div>
        {/* } */}
      </nav>

      {/* {navbar && <nav id='navbar-mobile'>
        <div id='nav-links-side-mobile'>
          <Link to='workouts' className='nav-link'>Workouts</Link>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='calendar' className='nav-link'>Calendar</Link>
        </div>
        {!localStorage.getItem('loggeduser') && <div className='nav-login-side-mobile'>
          <Link className='nav-link' to='user'>Login</Link>
          <Link className='nav-link' to='user/signup'>Signup</Link>
        </div>}
        {localStorage.getItem('loggeduser') && <div className='mobile-icon-container'>
          <h3 className='user-name-style'>{JSON.parse(localStorage.getItem('loggeduser')).username}</h3>
          <AccountCircleIcon style={{ fontSize: 'xx-large', color: 'white' }} id='second-user' />
          <Link className='nav-link' onClick={() => signout()}>signout</Link>
         
        </div>
        }
      </nav>}
 */}


      <Outlet />


      <div>
        <footer className='footer'>
          <div className='nav-links-div'>
            <Link className='footer-link nav-bar-text'>About us</Link>
            <p className='nav-bar-text'>Our buissnes department</p>
            <p className='nav-bar-text'>Privacy Policy</p>
            <p className='nav-bar-text'>Security Policy</p>
          </div>
          <div className='nav-links-div'>
            <Link className='footer-link nav-bar-text'>Customer Service</Link>
            <p className='nav-bar-text'>needed</p>
            <p className='nav-bar-text'>Contact Us</p>
            <p className='nav-bar-text'>Cancelling a transaction</p>
          </div>
          <div className='nav-links-div'>
            <Link className='footer-link nav-bar-text'>our website & centers</Link>
            <p className='nav-bar-text'>our physical centers</p>
            <p className='nav-bar-text'>accessibility</p>
            <p className='nav-bar-text'>terms of use</p>
          </div>
          <div className='social-media'>
            {/* <img src={whfac} alt="" height='30px' className='social-media-images' />
            <img src={whittwi} alt="" height='30px' className='social-media-images' />
            <img src={whins} alt="" height='30px' className='social-media-images' />
            <img src={whlink} alt="" height='30px' className='social-media-images' /> */}
          </div>
        </footer>
        <div className='email'>
          <h3 style={{ color: 'white', marginBottom: '10px' }}>Leave us your email and we will return to you</h3>
          <div style={{ display: 'flex' }}>
            <input type="text" className='email-input' placeholder='@email.com' />
            {/* <button className='send-button'><MailOutlineIcon style={{ height: '24px', border: '0' }} /></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout