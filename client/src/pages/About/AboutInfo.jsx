import React from 'react'
import { Link } from 'react-router-dom'
import "./about.scss"
import { AiFillCaretUp } from 'react-icons/ai'

const AboutInfo = () => {
  return (
    <>
      <div className="about_container">
        <div className="box_container">
          <div className='profile_picture'>
            <h1>P</h1>
          </div>
          <div className='info'>
            <big>Prince Kumar</big>
            <p>Web Developer</p>
            <span>rating 10/10</span>
          </div>
          <div className='link_section'><Link to='/about'>More Info <AiFillCaretUp className='icons' /> </Link></div>
        </div>
        <div className="hidden_info">
          <p><span>Name : </span>Prince Kumar</p>
          <p><span>Email :</span> prince@gmail.com</p>
          <p><span>Phone : </span>+91 6289296197</p>
          <p><span>Skills :</span> html, css, javascript, java</p>
          <p><span>Profassion :</span> Web Devloper</p>
        </div>
      </div>
    </>
  )
}

export default AboutInfo