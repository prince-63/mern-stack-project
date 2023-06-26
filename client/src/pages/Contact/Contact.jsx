import React from 'react'
import "./contact.scss"
import { IoCall } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'
import { MdLocationPin } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="container">
        <div className="info_section">
          <div className='box'>
            <IoCall className='icons'/>
            <div>
              <span className='text'>Phone</span> <br />
              <span>+91 00000 00000</span>
            </div>
          </div>
          <div className='box'>
            <HiOutlineMail className='icons'/>
            <div>
              <span className='text'>Email</span> <br />
              <span>abc@gmail.com</span>
            </div>
          </div>
          <div className='box'>
            <MdLocationPin className='icons'/>
            <div>
              <span className='text'>Location</span> <br />
              <span>Your Location</span>
            </div>
          </div>
        </div>
        <div className="form_section">
          <h3>Get in Touch</h3>
          <form action="/">
            <label className='first_label'>
              <input type="text" placeholder='Your name' name='Name'/>
              <input type="text" placeholder='Your email' name='Email'/>
              <input type="text" placeholder='Phone no' name='Phone'/>
            </label>
            <label>
              <textarea placeholder='Your massage' name='Massage' rows='1'></textarea>
            </label>
            <div>
              <button type="submit">Send Massage</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact