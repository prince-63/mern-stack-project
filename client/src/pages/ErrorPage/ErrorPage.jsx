import React from 'react'
import "./errorpage.scss"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className="error_container">
        <div className='all_container'>
          <div className="text">
            <big>404</big>
          </div>
          <h3>This page are not Founded</h3>
          <button><Link to="/">Go Back</Link></button>
        </div>
      </div>
    </>
  )
}

export default ErrorPage