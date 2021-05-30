import React from 'react';
import '../Navbar/navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="nav" exact activeClassName="active" to ="/">About</NavLink>
            <NavLink className="nav" exact activeClassName="active" to ="/service">Services</NavLink>
            <NavLink className="nav" exact activeClassName="active" to ="/contact">Contact Us</NavLink>
            <NavLink className="nav" exact activeClassName="active" to ="/booking">Online Booking</NavLink>
        </div>
    )
}

export default Navbar
