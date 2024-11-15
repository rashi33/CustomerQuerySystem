import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const logcode=async(e)=>{
         e.preventDefault();
         
        const user={email,password};
        const response= await fetch('http://localhost:8000/login' ,{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });
        const data= await response.json();
        console.log(data);
        if(data.msg="Login Success"){
            alert("Login Success");
            
            setEmail("");
            setPassword("");
            navigate(`/userDash/${data.id}`);
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
    <form  onSubmit={logcode}  className='my-5 p-5 shadow-lg rounded-5'>
        <h4 className='mb-3'><u className='text-danger'> Login</u> Form</h4>
               
              
                Enter Your Email:
                <input className='form-control' value={email} onChange={(e)=> {setEmail(e.target.value)}} type="email" name="email"/>
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

export default Login