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



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Homepage/>}></Route>
              <Route path='myrequests' element={<Myrequests/>}></Route>
              <Route path='mymassages' element={<Mymassages/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
              {/* <Route path='*' element={<Notfound />}></Route> */}
              <Route path='user' element={<Userpage />}>
                <Route path='' element={<Loginpage/>}></Route>
                <Route path='Signup' element={<Signuppage/>}></Route>
              </Route>
            </Route>
          </Routes>   
     </div>
  )
}

export default App
