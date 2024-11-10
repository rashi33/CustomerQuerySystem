import React, { useState } from 'react'
import Navbar from '../component/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';


const Adlogin = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

const adlog=async(e)=>{
  e.preventDefault();
  const ad={username,password};
  const response= await fetch('http://localhost:8000/adlogin',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
  },
  body:JSON.stringify(ad),
  });
  const data=await response.json();
  if(data.msg===" Admin Login Success"){
    setUsername("");
    setPassword("");
    alert(data.msg);
    navigate('/addash');
  }
  else {
    alert(data.msg);
  }
}
  return (
    <>
     <Navbar/>

<div className='row'> 
    <div className='col-md-6 mx-auto'>
<form onSubmit={adlog}  className='my-5 p-5 shadow-lg rounded-5'>
    <h4 className='mb-3'><u className='text-danger'>Admin Login</u> Form</h4>
           
          
            Enter Username:
            <input className='form-control' value={username} onChange={(e)=> {setUsername(e.target.value)}} type="email" name="email"/>
            <br/>
          
            Enter Your Password:
            <input className='form-control' value={password} onChange={(e)=> {setPassword(e.target.value)}} type="number" name="password"/>
            <br/>

            <button className='mb-3  form-control btn btn-primary' type="submit">Submit</button>
        <Link to={'/registration'} >Create New Account?</Link>
        </form>
        </div>
</div>
<Footer/>
    </>
  )
}

export default Adlogin