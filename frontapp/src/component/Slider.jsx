import React from 'react'
import  s1 from './img/s1.jpg'
import  s2 from './img/s2.jpg'
import  s3 from './img/s3.jpg'

const Slider = () => {
  return (
    <div className='row bg-dark p-2 pt-5 text-light '>
        <div className='col-sm-5'>
        <h1 className='display-4'>Saving millions of <span className='text-danger'>lives</span> globally</h1>
          <p className='lead'>KARAM is a leading global PPE &amp; Fall Protection solutions brand.</p>
          <a href="/about-us" className='btn btn-danger mt-3'>Learn More</a>
        </div>
        <div className='col-sm-6'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src={s1} class="d-block w-100" alt="..."/>
      <div className='s  gradient-background w-50 position-absolute' >
   More Details on News and Events!!
  </div> 
    </div>
    <div class="carousel-item">
      <img src={s2} class="d-block w-100" alt="..."/>
      <div className='s  gradient-background w-50 position-absolute' >
   More Details on News and Events!!
  </div> 
    </div>
    <div class="carousel-item">
      <img src={s3} class="d-block w-100" alt="..."/>
      <div className='s  gradient-background w-50 position-absolute' >
   More Details on News and Events!!
  </div> 
    </div>

  </div>
  
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='col-sm-1 my-auto'>
            <p className='fa-brands fs-4 fa-facebook border p-3 rounded-circle'></p><br/>
            <p className='fa-brands fs-4 fa-twitter border p-3 rounded-circle'></p><br/>
            <p className='fa-brands fs-4 fa-youtube border p-3 rounded-circle'></p><br/>
            <p className='fa-brands fs-4 fa-instagram border p-3 rounded-circle'></p><br/>
        </div>
    </div>
  )
}

export default Slider