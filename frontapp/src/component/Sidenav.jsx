import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
    const {id}=useParams();
  return (
    <div className='row'>
        <div className='col-sm-12 text-light pt-4'>
            <Link className='nav-link my-3 ps-2' to={`/userDash/${id}`}><i className='fa fa-book'> Dashboard</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/addQuery/${id}`}><i className='fa fa-question'> Add Query</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewPenQuery/${id}`}><i className='fa fa-eye'> View Pending Query</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewProQuery/${id}`}><i className='fa fa-eye'> View Processing Query</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewComQuery/${id}`}><i className='fa fa-eye'> View Completed Query</i></Link>
        </div>
       
    </div>
  )
}

export default Sidenav