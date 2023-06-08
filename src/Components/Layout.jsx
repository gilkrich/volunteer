import React from 'react'
import { useState } from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'
import "./layout.css"
import Logo from "../Components/images/logo.png"
import facebook from "../Components/images/facebook.png"
import github from "../Components/images/github.png"
import instagram from "../Components/images/instagram.png"
import twitter from "../Components/images/twitter.png"
import Hamburger from 'hamburger-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Layout = ({ logout, setloggedout }) => {
  const [signbutton, setsignbutton] = useState(true)
  const [navbar, setnavbar] = useState()

  function showout() {
    setsignbutton(!signbutton)
  }

  function signout() {
    if (localStorage.getItem('loggeduser')) {
      localStorage.removeItem("loggeduser")
      setloggedout(!logout)
    }
  }

  return (
    <div className='main-container'>
      <nav id='navbar'>
        <div style={{ display: 'flex' }}>
          <div>
            {/* <Link to='/'><h2 style={{ color: 'white', fontSize: 'xxx-large', fontFamily: 'system-ui' }}>GymFlow</h2></Link> */}
            {/* <Link to='/' className='nav-link'> </Link> */}
          </div>
          <img id='logo' src={Logo} alt="" />
          <div id='nav-links-side'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='myrequests' className='nav-link'> Make Requests</Link>
          <Link to='mymassages' className='nav-link'>My massages</Link>
          </div>
        </div>
        <Hamburger color='lightgreen' className='menu-icon' onToggle={setnavbar} />
        {localStorage.getItem('loggeduser') && <div className='signout-container'>
          <h4 className='user-name-style'>Hello , {JSON.parse(localStorage.getItem('loggeduser')).username}</h4>
          <AccountCircleIcon style={{ fontSize: 'xx-large' }} id='user-icon' onClick={() => showout()} />
          {signbutton && <div className='user-info-div'>
            <Link className='signout-button' onClick={() => signout()}>signout</Link>
            <h3 style={{ color: 'white' }}>new</h3>
          </div>}
        </div>
        }
        {!localStorage.getItem('loggeduser') &&
          <div className='nav-login-side'>
            <Link className='login-button-link' to='user'><button className='login-button'>Login</button></Link>
            <Link className='signup-button-link' to='user/signup'> <button className='signup-button'>Signup</button></Link>
          </div>
        }
      </nav>

      {navbar && <nav id='navbar-mobile'>
        <div id='nav-links-side-mobile'>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='myrequests' className='nav-link'> Make Requests</Link>
          <Link to='mymassages' className='nav-link'>My massages</Link>
        </div>
        {!localStorage.getItem('loggeduser') && <div className='nav-login-side-mobile'>
          <Link className='nav-link' to='user'>Login</Link>
          <Link className='nav-link' to='user/Signup'>Signup</Link>
        </div>}
        {localStorage.getItem('loggeduser') && <div className='mobile-icon-container'>
          {/* <h3 className='user-name-style'>{JSON.parse(localStorage.getItem('loggeduser')).username}</h3> */}
          {/* <AccountCircleIcon style={{ fontSize: 'xx-large', color: 'white' }} id='second-user' /> */}
          <Link className='nav-link' onClick={() => signout()}>signout</Link>

        </div>
        }
      </nav>}



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
            <img src={facebook} alt="" height='30px' className='social-media-images' />
            <img src={github} alt="" height='30px' className='social-media-images' />
            <img src={instagram} alt="" height='30px' className='social-media-images' />
            <img src={twitter} alt="" height='30px' className='social-media-images' />
          </div>
        </footer>
        {/* <div className='email'>
          <h3 style={{ color: 'white', marginBottom: '10px' }}>Leave us your email and we will return to you</h3>
          <div style={{ display: 'flex' }}>
            <input type="text" className='email-input' placeholder='@email.com' />
            <button className='send-button'><MailOutlineIcon style={{ height: '24px', border: '0' }} /></button>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default Layout
