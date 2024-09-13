import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className="Hero container" >
    <div className="Hero-text">
    <h1>We ensure better education for a better world</h1>
    <p>Our cutting-edge curriculum is designed to empower students with
    knowledge,skills and experiences needed to excel in dynamic field of
    of education
    </p>
    <button id='btn'>Explore more
    <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default hero
