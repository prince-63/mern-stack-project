import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import login from '../../assets/login1.jpg'
import { MdEmail } from 'react-icons/md'
import { IoLockOpenSharp } from 'react-icons/io5'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillGooglePlusSquare } from 'react-icons/ai'

const Login = () => {
  return (
    <div className='login_container'>
      <div className='container'>
        <div className="image_section">
          <img src={login} alt="register assets" /> <br />
          <span>Create a Account? <Link to="/register">Register</Link></span>
        </div>
        <div className="form_section">
          <h3>Login Now</h3>
          <form action="/">
            <label htmlFor="email">
              <MdEmail className='icons' />
              <input type="email" placeholder='Your email' id='email' name='Email' />
            </label>
            <label htmlFor="password">
              <IoLockOpenSharp className='icons' />
              <input type="password" placeholder='Password' id='password' name='Password' />
            </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className='with_login'>
            <p>or login with </p>
            <AiFillFacebook className='icons one'/>
            <AiFillTwitterSquare className='icons two'/>
            <AiFillGooglePlusSquare className='icons three'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login