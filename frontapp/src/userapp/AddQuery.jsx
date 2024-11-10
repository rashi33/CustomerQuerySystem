import React, { useState } from 'react'
import Sidenav from '../component/Sidenav'
import { Link, useParams } from 'react-router-dom'
import Utopnav from '../component/Utopnav';

const AddQuery = () => {
  const {id}=useParams();
  const [department,setDepartment]=useState("");
  const [subject,setSubject]=useState("");
  const [description,setDescription]=useState("");

  const addquery =async (e)=>{
    e.preventDefault();
    const status="pen"
    const query={"uid":id,"department":department,"subject":subject,"description":description,"status":status}
    const response=await fetch('http://localhost:8000/addquery' ,{
method:'POST',
headers:{
  'Content-Type':'application/json',
},
body: JSON.stringify(query)

    });
    const data=await response.json()
    if(data.msg=="Query Added"){
      alert("Query Added");
      console.log(query);
    }
    else{
      alert("Something went Wrong");
    }
  }

  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12  bg-dark text-light'>
        <Utopnav/>
      </div>
    </div>

     <div className='row vh-93' >
      <div className='col-2 h-100 bg-secondary bg-gradient'>
       <Sidenav/>

      </div>
      <div className='col-10 h-100 bg-succ'>
        <div className='row h-100 '>
        <div className='col-md-6 mx-auto'>
          <form onSubmit={addquery} className='mt-5 p-5 bg-light rounded-5 shadow-lg'>
            <h4 className='text-center mb-4'>Add Query</h4>
            Select Department
            <select className='form-control' value={department} onChange={(e)=>setDepartment(e.target.value)}>
              <option value="1">Select Department</option>
              <option value={"IT"}>IT</option>
              <option value={"Accounts"}>Accounts</option>
              <option value={"Management"}>Management</option>
              <option value="Sales">Sales</option>
            </select>
         
         Enter Your Subject
       <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)} className='form-control' placeholder='Enter Your Subject'/>
        Describe in Detail
        <textarea className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} rows="5" placeholder='Describe in Detail'></textarea>
        <br/>
        <br/>
        <input type='submit' value={"Add Query"} className='form-control btn btn-primary'/>
          </form>
        </div>
        </div>
      </div>
    </div></>
  )
}

export default AddQuery