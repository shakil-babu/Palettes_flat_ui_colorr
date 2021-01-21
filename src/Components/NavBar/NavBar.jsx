import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav className='nav__area'>
                <div className="nav__logo"><NavLink to='/'>Flat Ui Colors</NavLink></div>
                <div className="nav__links">
                    <NavLink to='/subscribe'>Subscribe</NavLink>
                    <NavLink to='/submit'>Submit</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar
