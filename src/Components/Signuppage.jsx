import React from 'react'
import TextField from '@mui/material/TextField';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'
import { useState, } from 'react';
import './mymassages.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Signuppage = () => {
  const navigate = useNavigate()
  const [username, setusername] = useState()
  const [wantproff, setproff] = useState(false)
  const [wantnone, setnone] = useState(false)
  const [isproffesion1, setisproffesion1] = useState('')
  const [isproffesion2, setisproffesion2] = useState('')
  const [isproffesion3, setisproffesion3] = useState('')
  const [isagree, setagree] = useState('')
  const [age, setage] = useState('')
  const [ismobile, setismobile] = useState(false)
  const [phonenumber, setphonenumber] = useState('')
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [terms, setterms] = useState(false)
  const [verify, setverify] = useState()
  const [userObj, setuserObj] = useState({})
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_03jkv54', 'template_dzxmgs1', form.current, 'QEn71pL3Eu8fl57Hz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  function setUser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]))
    }
    
      if (terms == true) {

        if (phonenumber.length == 10) {

          if (password.length < 6 || password.length > 12) {
            alert("password must be at least 6 signs and less then 12 signs")
          }
          else if (password.length >= 6 && password.length <= 12 && password == verify) {
            const users = JSON.parse(localStorage.getItem('users'))
            const check = users.find(a => a.email == email)
            if (check != undefined) {
              alert(" email is already taken")
            } else {
              if (email.includes("@") && email.includes(".com")) {
                const halfemail = email.split("@")[1].split(".")[0];
                if ((halfemail == "gmail" || halfemail == "walla")) {
                  const person = { username: username, email: email, password: password, phonenumber: phonenumber, verify: verify, proffesions: [isproffesion1, isproffesion2, isproffesion3], age: age, ismobile: ismobile, massages: [] };
                  users.push(person)
                  localStorage.setItem('users', JSON.stringify(users))
                  localStorage.setItem('loggeduser', JSON.stringify(person))
                  setloggedout(false)
                  navigate(-1)
                }
                else {
                  alert("email isnt valid")
                }
              }
              else {
                alert("email isnt valid")
              }
            }
          }
          else {
            alert("password got to be the same")
          }
        } else {
          alert('phonenumber isnt vaild')
        }
      } else {
        alert('you have to agree to our terms of use')
      }
    
  }


  return (

    <div>
      <div className='choose'>
        <h1 > who are you?</h1>
        <div className='buttons-cont'>
          <button className='choose-button' onClick={() => { setproff(true), setnone(false) }}>proffesion owner</button>
          <button className='choose-button' onClick={() => { setproff(false), setnone(true) }}>without one</button>
        </div>
      </div>




      {wantproff && <div className='sign-page'>
        <form ref={form} onSubmit={sendEmail} className='sign-page'>
          <h2>Sign-up</h2>
          <TextField id="outlined-basic" label="username" variant="outlined" className='user-inputs' type='text' name="user_name" onChange={e => { setusername(e.target.value) }} />
          <TextField id="outlined-basic" label="email" variant="outlined" className='user-inputs' type='email' name="user_email" onChange={e => { setemail(e.target.value) }} />
          <TextField id="outlined-basic" label="password" variant="outlined" className='user-inputs' type='password' onChange={e => { setpassword(e.target.value) }} />
          <TextField id="outlined-basic" label="verify password" variant="outlined" className='user-inputs' type='password' onChange={e => { setverify(e.target.value) }} />
          <TextField id="outlined-basic" label="phonenumber" variant="outlined" className='user-inputs' type='number' onChange={e => { setphonenumber(e.target.value) }} />
          <div>
            <input label="age" placeholder='age' variant="outlined" className='' type='number' style={{ marginBottom: '20px', marginTop: '20px' }} onChange={e => { setage(e.target.value) }} />
            <div>
              <label htmlFor="ismobile" style={{ marginRight: '10px' }}>Are you mobile</label>
              <input type="checkbox" name="ismobile" id="ismobile" onChange={(e) => setismobile(!ismobile)} />
            </div>
          </div>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <label htmlFor="remember" style={{ marginRight: '10px' }}>By selecing you agree to t
              <Link to='/TermsOfUse'>
                erms of use
              </Link>
            </label>
            <input type="checkbox" name="remember" id="remember" onChange={() => setterms(!terms)} />
          </div>
          <div className='select-container'>
            <select name="" id="" className='select' onChange={(e) => setisproffesion1(e.target.value)}>
              <option value="" selected disabled>choose</option>
              <option value="Accountant">Accountant</option>
              <option value="Baker">Baker</option>
              <option value="Butcher">Butcher</option>
              <option value="Electrician">Electrician</option>
              <option value="Farmer">Farmer</option>
              <option value="Gardener">Gardener</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Plumber">Plumber</option>
            </select>
            <select name="" id="" className='select' onChange={(e) => setisproffesion2(e.target.value)}>
              <option value="" selected disabled>choose</option>
              <option value="Accountant">Accountant</option>
              <option value="Baker">Baker</option>
              <option value="Butcher">Butcher</option>
              <option value="Electrician">Electrician</option>
              <option value="Farmer">Farmer</option>
              <option value="Gardener">Gardener</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Plumber">Plumber</option>

            </select>
            <select name="" id="" className='select' onChange={(e) => setisproffesion3(e.target.value)}>
              <option value="" selected disabled>choose</option>
              <option value="Accountant">Accountant</option>
              <option value="Baker">Baker</option>
              <option value="Butcher">Butcher</option>
              <option value="Electrician">Electrician</option>
              <option value="Farmer">Farmer</option>
              <option value="Gardener">Gardener</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Plumber">Plumber</option>

            </select>
          </div>

          <input type="submit" value="Sign-up" className='user-buttons' onClick={() => setUser()} />
        </form>
        {/* <button className='user-buttons' onClick={() => setUser()}>Sign-up</button> */}
        <p>Or sign-up with</p>
        <div className='with'>
          {/* <button className='with-button'> <img src={facebook} alt="" width='20px' height='20px' />Facebook</button> */}
          {/* <button className='with-button'><img src={google} alt="" width='20px' height='20px' />Google</button> */}
        </div>
        <p>Already a member?<Link to='/user'>Login here</Link></p>
      </div>}



      {wantnone && <div className='sign-page'>
        <form ref={form} onSubmit={sendEmail} className='sign-page'>
          <h2>Sign-up</h2>
          <TextField id="outlined-basic" label="usename" variant="outlined" className='user-inputs' type='text' name="user_name" onChange={e => { setusername(e.target.value) }} />
          <TextField id="outlined-basic" label="email" variant="outlined" className='user-inputs' type='email' name="user_email" onChange={e => { setemail(e.target.value) }} />
          <TextField id="outlined-basic" label="password" variant="outlined" className='user-inputs' type='password' onChange={e => { setpassword(e.target.value) }} />
          <TextField id="outlined-basic" label="password" variant="outlined" className='user-inputs' type='password' onChange={e => { setverify(e.target.value) }} />
          <TextField id="outlined-basic" label="phonenumber" variant="outlined" className='user-inputs' type='number' onChange={e => { setphonenumber(e.target.value) }} />

          <div style={{ width: '100%', textAlign: 'center' }}>
            <label htmlFor="remember" style={{ marginRight: '10px' }}>By selecing you agree to t
              <Link to='/TermsOfUse'>
                erms of use
              </Link>
            </label>
            <input type="checkbox" name="remember" id="remember" onChange={() => setterms(!terms)} />
          </div>
          <input type="submit" value="Sign-up" className='user-buttons' onClick={() => setUser()} />
        </form>
        {/* <button className='user-buttons' onClick={() => setUser()}>Sign-up</button> */}
        <div className='with'>
          {/* <button className='with-button'> <img src={facebook} alt="" width='20px' height='20px' />Facebook</button> */}
          {/* <button className='with-button'><img src={google} alt="" width='20px' height='20px' />Google</button> */}
        </div>
        <p>Already a member?<Link to='/user'>Login here</Link></p>
      </div>}


    </div>


  )
}

export default Signuppage
