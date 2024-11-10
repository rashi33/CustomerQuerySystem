import React from 'react'
import logo from '../component/img/logo1.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='row bg-dark'>
        <div className='col-md-12'>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

        <img src={logo}/> </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto w-75">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/about'}>About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Career</a>
        </li>
      </ul>
      <Link to={'/adlogin'} className='btn btn-outline-danger text-white mx-3'>Admin</Link>
      <Link to={'/login'} className='btn btn-outline-danger text-white'>Query ?</Link>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Navbar