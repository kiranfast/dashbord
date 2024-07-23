import React from 'react'
import sidebar from './sidebar'
import Card from './card'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { findIndexById } from '../common/helpe';
import { useNavigate, useParams } from 'react-router-dom';

function dashboard({user,setUser}) {

  let navigate = useNavigate()
  
  let data = [
    {
        title:"Earnings (Monthly)",
        price:"$40,000",
        icon:"fa-calendar",
        color:"primary",
        isProgress:false,
    },
    {
      title:"Earnings (Annual)",
      price:"$215,000",
      icon:"fa-dollar-sign",
      color:"success",
      isProgress:false,
  },
  {
    title:"Tasks",
    price:"50%",
    icon:"fa-clipboard-list",
    color:"info",
    isProgress:true,
},
{
  title:"Pending Requests",
  price:"18",
  icon:"fa-comments",
  color:"warning",
  isProgress:false,
},

]

const handleDelete = (id)=>{
       let index = findIndexById(user,id)
       if(index!==-1)
       {
          user.splice(index,1)
          setUser([...user])
      }
       else
       {
        alert("Invalid Id")
       }
}
  return <>
   <div id="content-wrapper" class="d-flex flex-column">
   <div id="content">
   <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            
</div>

<div class="row">
       {
          data.map((e,i) => {
            return<Card data={e} key={i}/>
          })
       }       
       </div>
       <hr/>
       <div className='row'>
       <h1 class="h3 mb-0 text-gray-800">User Management</h1>
       <br/><br/>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th> Subscription</th>
          <th> Action </th>
        </tr>
      </thead>
      <tbody>
       {
        user.map((e) =>{
          return <tr key={e}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.gender}</td>
            <td>{e.dob}</td>
            <td>{e.subscription?<>Active</>:<>In Active</>}</td>
            <td>
              <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}> Edit </Button>
              &nbsp;
              <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
            </td>
            </tr>
        })
      }
    </tbody>
    </Table>
    </div>
    </div>
    </div>
    </div>
  </>
}

export default dashboard
