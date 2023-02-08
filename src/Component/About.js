import React from 'react'
import './About.css';
import dp from '../Images/dp.jpg'
function About() {
  return (
    <>
       <div id='about-section'>
        <div id='my-desc'><p>Hello! My name is Promila and I enjoy creating things that are creative. My interest in designing started back in 2010 when I decided to try sketching for the first time.</p>

<p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>

<p>Here are a few fields, I’ve been working on recently:</p>
<div id='tech-stacks'>
    <div className='small-box'>
    <span>Digital Art</span>
    {/* <span>Sketching</span>
    <span>Graphity</span> */}
    </div>
    <div className='small-box'>
    <span>Garment Designing</span>
    {/* <span>Garment Construction</span> */}
    </div>
</div>
</div>
        <div id='my-img'><img src={dp} alt='IIHT'/></div>
        </div> 
    </>
  )
}

export default About