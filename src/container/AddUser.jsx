import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser({user,setUser}) {

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDob]= useState("")
  let [gender,setGender] = useState("")
  let [subscription,setSub] = useState(false)

  let navigate = useNavigate()

  const handleSubmit = () =>{
    let data ={name,email,dob,gender,subscription}
    data.id=user.length?user[user.length-1].id+1:1
    user.push(data)
    setUser([...user])

    navigate('/')
  }
  return <>
  <div id="content-wrapper" class="d-flex flex-column">
<div id="content">
<div class="container-fluid">
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Add User</h1>
            
</div>
<div className='row'>
<Form>
<Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select defaultValue='null' onChange={(e)=> setGender(e.target.value)}>
          <option value="null"> Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender"> Transgender </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Subcription" checked ={subscription} onChange={(e)=>{setSub(e.target.checked)}}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
</div>
</div>
    </div>
    </div>
  </>
}

export default AddUser