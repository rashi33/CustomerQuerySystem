import React, { useEffect, useState } from 'react'
import Sidenav from '../component/Sidenav'
import { Link, useParams } from 'react-router-dom';
import Utopnav from '../component/Utopnav';

const ViewPenQuery = () => {
    const {id}=useParams();
    const [penquery,setPenQuery]=useState([]);
    var[count,setCount]=useState(1);
    const getpenquery =async()=>{
         const response=await fetch(`http://localhost:8000/getpenquery/${id}`);
         const data=await response.json();
       
         if(data.msg==="Success"){
            
              setPenQuery(data.result);


         }
         
    }
    useEffect(()=>{
        getpenquery();
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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                penquery?.map((e)=>(
                 
                    <tr>
                    <td>{count++}</td>
                    <td>{e.department}</td>
                    <td>{e.subject}</td>
                    <td>{e.description}</td>
                    <td><Link className='btn btn-primary'>Edit</Link>
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

export default ViewPenQuery