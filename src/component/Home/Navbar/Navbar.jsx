import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar = () => {

    function showClick(){
        document.getElementById("navbar-link").classList.toggle("show");
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="flex-1 ">
                    <div className="flex-row logo">
                        <div className="logos">
                            <img src="assets/images/logo.png" alt="Logo" />
                        </div>
                        <div className="hamburger" onClick={showClick}>
                            <img src="assets/images/hamburger.png" alt="hamburger" height="60%" width="60%" />
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex-row navbar-link" id="navbar-link">
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/">About</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/service">Services</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/contact">Contact Us</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/booking">Online Booking</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
