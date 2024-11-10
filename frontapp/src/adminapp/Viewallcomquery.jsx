import React, { useEffect, useState } from 'react'
import Adsidenav from '../component/Adsidenav'
import Topnav from '../component/Topnav';

const Viewallcomquery = () => {
    const [penquery,setPenQuery]=useState([]);
    var[count,setCount]=useState(1);
    const getpenquery=async()=>{
       const response =await fetch('http://localhost:8000/ad/allcomquery');
       const data= await response.json() ;
          if(data.msg=="Success"){
            setPenQuery(data.q);
          }
    }
 
   

    useEffect(()=>{
        getpenquery();
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
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th>Status</th>
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
                    <td>Completed</td>

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

export default Viewallcomquery