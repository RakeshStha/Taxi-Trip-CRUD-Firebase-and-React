import React from 'react';
import '../../Home/Navbar/navbar.css'
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
                            <NavLink className="nav" exact activeClassName="active" to ="/user_profile">Profile</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/user_booking">Booking</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/statement">Statement</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/map">Map</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
