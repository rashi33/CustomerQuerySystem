import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import   a1  from '../component/img/a1.jpg'
import   t1  from '../component/img/t1.jpg'
import   t2  from '../component/img/t2.png'
import   t3  from '../component/img/t3.jpg'
import Slider from '../component/Slider'
import   img  from '../component/img/images.jpg'

const Home = () => {
  return (
    <>
   
    <Navbar/>
   
    
   <Slider/>
     <div className='row my-5 '>
      <div className='col-md-6 ms-auto'>
      <h1>About Us</h1>
      <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laborum sit earum a suscipit sed?</p>
      <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolor molestiae inventore veniam repellat fuga. Sed culpa accusantium necessitatibus sit.</p>
      </div>
      <div className='col-md-4 me-auto my-auto'>
        <img src={a1} className='w-100 shadow-lg ' />
      </div>
     </div>

     <div className='row my-5 mt-5'>
  <div className='col-md-10 mx-auto'>
    <h1 className='text-center p-5'>Our Services</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={t1} className="card-img-top" alt="Service 1" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={t2} className="card-img-top" alt="Service 2" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={t3} className="card-img-top" alt="Service 3" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className='row my-5'>
  <div className='col-md-10 mx-auto text-center'>
    <h1 className='p-2'>Career</h1>
    <p>KARAM was founded with the ideal of saving lives. We are committed towards safety at work and we invite like-minded individuals to join us in our journey towards positively impacting the world through our efforts.</p>
    <p>Join our team of 4000+ dedicated professionals on a mission to enhance occupational safety.</p>
  </div>
  <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={img}/>
      <div className="card-body">
        <h5 className="card-title">Career1</h5>
        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ratione distinctio sit pariatur recusandae non nobis aliquam, sunt nulla alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse?</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={img}/>
      <div className="card-body">
        <h5 className="card-title">Career2</h5>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem facere quaerat debitis inventore veniam consectetur maxime beatae! Consequatur, nihil.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={img}/>
      <div className="card-body">
        <h5 className="card-title">Career3</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ex quasi omnis nobis cupiditate iste dolorum quas, ullam iure quaerat!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={img}/>
      <div className="card-body">
        <h5 className="card-title">Career4</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id molestiae explicabo totam maxime, neque ut inventore similique modi distinctio?</p>
      </div>
    </div>
  </div>
</div>
</div>


    <Footer/>
    
    </>
    
  )
}

export default Home 