import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='About'> 
      <div className="about-left">
        <img src={about_img} alt=""  className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' 
        onClick={() => { setPlayState(true) }}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs.
        Our cutting edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.    
        </p>
      </div>
    </div>
  )
}

export default About
