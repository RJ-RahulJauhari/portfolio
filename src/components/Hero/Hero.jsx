import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
  
      <div className='hero-container '>
        <div className='hero-left flex1 '>
          <div  className='fields'>
            <h1 className='main-text'>Full Stack Devloper</h1>
            <h2 className='sub-text'>MERN Stack | Android Development| AI & ML </h2>
            <div className='hero-buttons '>
              <button>Get Resume</button>
              <button>Learn More About Me</button>
            </div>
          </div>
        </div>
        <div className='hero-right flex1'>
          <img src="/Profile2.png" alt="" />
        </div>
      </div>
  )
}

export default Hero
