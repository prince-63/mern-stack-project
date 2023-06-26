import React from 'react'
import "./about.scss"
import { Link } from 'react-router-dom'
import {AiFillCaretDown} from "react-icons/ai"

const About = () => {
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
          <div className='link_section'><Link to='/about/info'>More Info <AiFillCaretDown className='icons'/> </Link></div>
        </div>
      </div>
    </>
  )
}

export default About