import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';
import Utopnav from '../component/Utopnav';

const ViewComQuery = () => {
  const {id}=useParams();
  const [comquery,setPenQuery]=useState([]);
  var[count,setCount]=useState(1);
  const getcomquery =async()=>{
       const response=await fetch(`http://localhost:8000/getcomquery/${id}`);
       const data=await response.json();
     
       if(data.msg==="Success"){
          
            setPenQuery(data.result);


       }
       
  }
const process=async(id)=>{
  const status={'status':"pen"}
  const response=await fetch(`http://localhost:8000/status/${id}`,{
    method:'PATCH',
    headers:{
       'Content-Type':'application/json',
    },
    body: JSON.stringify(status),
});
  const data= await response.json();
  if(data.msg=="Success"){
    alert("Query Raised Again");
    getcomquery()
  }
  else{
      alert("Error");
  }
}

  useEffect(()=>{
      getcomquery();
  },[])
  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12  bg-dark'>
        <Utopnav/>
      </div>
    </div>

     <div className='row vh-93' >
      <div className='col-2 h-100 bg-secondary bg-gradient'>
       <Sidenav/>

      </div>
      <div className='col-10 h-100 bg-succ'>
        <div className='row h-100 '>
        <div className='col-md-6 table-responsive my-auto mx-auto p-2 rounded-2 shadow-lg bg-light'>
        <table className='table table-light '>
            <thead>
                <tr>
                    <th>S.no.</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th colSpan={'2'}>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                comquery?.map((e)=>(
                 
                    <tr>
                    <td>{count++}</td>
                    <td>{e.department}</td>
                    <td>{e.subject}</td>
                    <td>{e.description}</td>
                    <td><Link to={'/'} className='btn btn-danger'>Delete</Link>
                    </td>
                    <td><button onClick={()=>(process(e._id))} className='btn btn-secondary'>Raise Again</button>
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

export default ViewComQuery