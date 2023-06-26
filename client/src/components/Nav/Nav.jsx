import React from 'react'
import "./nav.scss"
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='container'>
                <div className="logo_section">
                    <img src={logo} alt="logo" />
                </div>
                <div className="link_section">
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav