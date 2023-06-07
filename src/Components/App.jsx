import { useState } from 'react'
import './App.css'
import Homepage from './Homepage'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Userpage from './Userpage';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Homepage/>}></Route>
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
