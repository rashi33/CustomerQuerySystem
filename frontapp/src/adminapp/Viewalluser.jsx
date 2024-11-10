import React, { useEffect, useState } from 'react'
import Adsidenav from '../component/Adsidenav'
import Topnav from '../component/Topnav';

const Viewalluser = () => {
    const [user,setUser]=useState([]);
    var[count,setCount]=useState(1);
    const getuser=async()=>{
       const response =await fetch('http://localhost:8000');
       const data= await response.json() ;
          if(data){
            setUser(data);
          }
    }
 
    

    useEffect(()=>{
        getuser();
    },[])


  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12 text-light bg-dark'>
        <Topnav/>
      </div>
    </div>

     <div className='row vh-93' >
      <div className='col-2 h-100 bg-secondary bg-gradient'>
       <Adsidenav/>

      </div>
      <div className='col-10 h-100 bg-succ'>
        <div className='row h-100 '>
        <div className='col-md-6 table-responsive my-auto mx-auto p-2 rounded-2 shadow-lg bg-light'>
        <table className='table table-light '>
            <thead>
                <tr>
                    <th>S.no.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                user?.map((e)=>(
                 
                    <tr>
                    <td>{count++}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td><button  className='btn btn-primary'><i className='fa fa-edit'></i></button>
                    </td>

                </tr>
       
                ))
               }
            </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Viewalluser