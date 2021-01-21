import React from 'react'
import './ColorCard.css'
import {NavLink}from 'react-router-dom'
const ColorCard = ({
    one,two,there,four,five,six,seven,eight,nine,ten,eleven , twelve, thirteen, fourteen, 
    fifteen, sixteen, seventeen, eighteen, nineteen, twenty, title, icon , path
}) => {
    return (
        <>
            <section  className="card__area">
                <NavLink to={path} className="card-color">
                    <div style={{backgroundColor:one, width:'70px', height:'50px', borderTopLeftRadius:"5px"}}></div>
                    <div style={{backgroundColor:two, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:there, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:four, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:five, width:'70px', height:'50px', borderTopRightRadius:"5px"}} ></div>
                </NavLink>
                <NavLink to={path} className="card-color">
                    <div style={{backgroundColor:six, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:seven, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:eight, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:nine, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:ten, width:'70px', height:'50px'}} ></div>
                </NavLink>
                <NavLink to={path} className="card-color">
                    <div style={{backgroundColor:eleven, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:twelve, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:thirteen, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:fourteen, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:fifteen, width:'70px', height:'50px'}} ></div>
                </NavLink>
                <NavLink to={path} className="card-color">
                    <div style={{backgroundColor:sixteen, width:'70px', height:'50px', borderBottomLeftRadius:'5px'}} ></div>
                    <div style={{backgroundColor:seventeen, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:eighteen, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:nineteen, width:'70px', height:'50px'}} ></div>
                    <div style={{backgroundColor:twenty, width:'70px', height:'50px', borderBottomRightRadius:'5px'}} ></div>
                </NavLink>
              
                <NavLink to={path} className="title-icon">
                    <h3>{title}</h3>
                    <button>{icon}</button>
                </NavLink>
            </section>
        </>
    )
}

export default ColorCard
