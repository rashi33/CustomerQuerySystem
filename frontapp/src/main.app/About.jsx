import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Slider from '../component/Slider'
import a1 from '../component/img/a1.jpg'

const About = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='row my-5'>
        <div className='col-md-3 mx-auto my-auto'>
            <h1>About Us</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reiciendis ducimus vero at sed, ullam, quas, accusamus repellendus quam repellat tenetur! Unde modi maxime quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quia!</p>
        </div>
        <div className='col-md-5 mx-auto'>
            <img src={a1} className='w-100'/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About