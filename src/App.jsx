import React, { useState } from 'react'
import Card from './container/card'
import Dashboard from './container/dashboard'
import Sidebar from './container/sidebar'
import AddUser from './container/AddUser'
import Profile from './container/profile'
import EditUser from './container/edituser'

import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {

  let [user,setUser] = useState([
    {
      id:1,
      name:"kiran",
      email:"kiran@gmail.com",
      dob:"12-2-1993",
      gender:"Male",
      subscription:true,
    },
    {
      id:2,
      name:"gopi",
      email:"gopi@gmail.com",
      dob:"12-3-1993",
      gender:"Male",
      subscription:true,
    },
    {
      id:3,
      name:"Fazil",
      email:"fazil@gmail.com",
      dob:"12-9-1993",
      gender:"Male",
      subscription:true,
    },
    
  ])

  return <>
  <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard user={user} setUser={setUser}/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
      <Route path='/add-user'element={<AddUser user={user} setUser={setUser}/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  </>
}

export default App