import React from 'react'
import './CommonPage.css' ;
import Footer from '../Footer/Footer'
import {CgArrowLongLeft} from 'react-icons/cg'
import {NavLink} from 'react-router-dom'

const Subscribe = ({
    title, p1 , p2, p3, inputBox , btnLabel
}) => {
    return (
        <>
            <section className='subscribe__area'>
          
                <div className="subscribe__container">
                <div className="icon__arrow">
                       <NavLink to='/'><CgArrowLongLeft className='arr-icon'/></NavLink> <span>Back</span>
                    </div>
              
                    <div className="title_flex">
                        <h3>{title}</h3> 
                    </div>
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>

                    {inputBox ===true ? (
                        <div className="input-box">
                        <p>Your Email:</p>
                        <input type="text" placeholder='Email'/>

                        <button className='submit'>{btnLabel}</button>
                    </div>
                    ):(
                        <button className='submit'>{btnLabel}</button>
                    )}
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Subscribe
