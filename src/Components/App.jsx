import { useState } from 'react'
import './App.css'
import Homepage from './Homepage'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Userpage from './Userpage';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import Myrequests from './Myrequests';
import Mymassages from './Mymassages';
import Profile from './Profile';
import TermsOfUse from './TermsOfUse';
import data from './Data.json'



function App() {
  const [count, setCount] = useState(0)
  const [logout, setloggedout] = useState()

  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(data.results))
  }

  return (

      <div>
          <Routes>
            <Route path='/' element={<Layout logout={logout} setloggedout={setloggedout}/>}>
              <Route path='/' element={<Homepage/>}></Route>
              <Route path='/about' element={<Homepage/>}></Route>
              <Route path='myrequests' element={<Myrequests/>}></Route>
              <Route path='TermsOfUse' element={<TermsOfUse/>}></Route>
              <Route path='mymassages' element={<Mymassages setloggedout={setloggedout} logout={logout}/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
              {/* <Route path='*' element={<Notfound />}></Route> */}
              <Route path='user' element={<Userpage />}>
                <Route path='' element={<Loginpage logout={logout} setloggedout={setloggedout}/>}></Route>
                <Route path='Signup' element={<Signuppage logout={logout} setloggedout={setloggedout}/>}></Route>
              </Route>
            </Route>
          </Routes>   
     </div>

  )
}

export default App
