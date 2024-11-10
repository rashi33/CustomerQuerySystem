import React from 'react'
import { Link } from 'react-router-dom'

const Adsidenav = () => {
  return (
    <div className='row'>
        <div className='col-sm-12 text-light pt-4'>
            <Link className='nav-link my-3 ps-2' to={`/addash`}><i className='fa fa-book'> Dashboard</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewalluser`}><i className='fa fa-user'> View All Users</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewallpenquery`}><i className='fa fa-eye'> View Pending Query</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewallproquery`}><i className='fa fa-eye'> View Processing Query</i></Link>
            <Link className='nav-link my-3 ps-2' to={`/viewallcomquery`}><i className='fa fa-eye'> View Completed Query</i></Link>
           
        </div>
       
    </div>
  )
}

export default Adsidenav