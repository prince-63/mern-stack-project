import "./register.scss"
import { FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiPhone } from "react-icons/hi"
import { useEffect } from "react"
import { IoLockOpenSharp } from "react-icons/io5"
import register from "../../assets/register.jpg"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  return (
    <>
      <div className="register_container">
        <h2>Register Now</h2>
        <div className="container">
          <div className="register_form">
            <form method='POST' >
              <label htmlFor="name">
                <FaUser className='icons' />
                <input type="text" placeholder='Your name' id='name' name='name'
                />
              </label>
              <label htmlFor="email">
                <MdEmail className='icons' />
                <input type="email" placeholder='Your email' id='email' name='email'
                />
              </label>
              <label htmlFor="phone">
                <HiPhone className='icons' />
                <input type="phone" placeholder='Mobile number' id='phone' name='phone'
                />
              </label>
              <label htmlFor="password">
                <IoLockOpenSharp className='icons' />
                <input type="password" placeholder='Password' id='password' name='password'
                />
              </label>
              <label htmlFor="conformpassword">
                <IoLockOpenSharp className='icons' />
                <input type="password" placeholder='ConformPassword' id='conformpassword' name='conformpassword'
                />
              </label>
              <div>
                <button type="submit" >Register</button>
              </div>
            </form>
          </div>
          <div className="image_section">
            <img src={register} alt="register assets" /> <br />
            <span>You Have a Account? <Link to="/login">Login</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register