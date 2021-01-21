import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css' ;

const Footer = () => {
    return (
        <>
            <footer className="footer__area">
                <div className="footer__container">
                    <div className="content__flex">
                        <div className="content">
                        <h2>Share</h2>
                        <NavLink to='/'>Send via-email</NavLink>
                        <NavLink to='/'>Share on Twetter</NavLink>
                        <NavLink to='/'>Share on Facebook</NavLink>
                        <NavLink to='/'>Share on Google Plus</NavLink>
                        <NavLink to='/'>Share on Linkedin</NavLink>
                        </div>
                        <div className="content">
                        <h2>More</h2>
                        <NavLink to='/'>Contact me</NavLink>
                        <NavLink to='/'>Subscribe</NavLink>
                        <NavLink to='/'>Submit</NavLink>
                        <NavLink to='/'>Replay onboarding</NavLink>                        
                        </div>

                        <div className="content">
                        <h2>About</h2>
                        <NavLink to='/'>Flat UI Colors 2 brought to you by Shakil Babu</NavLink>
                        <NavLink to='/'>Follow me on Twitter or Subscribe to be the first to know</NavLink>
                        <NavLink to='/'>when I launch new products.</NavLink>
                        <NavLink to='/'>Read the article on Medium to learn more. </NavLink>
                        </div>
                        <div></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
