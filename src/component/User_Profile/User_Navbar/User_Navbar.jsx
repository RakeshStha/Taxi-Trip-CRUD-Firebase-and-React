import React from 'react';
import '../../Home/Navbar/navbar.css'
import {NavLink} from 'react-router-dom';
import '../User_Navbar/user_navbar.css'
import firebase from '../../Home/firebase'


const Navbar = () => {

    function showClick(){
        document.getElementById("user_loggedin").classList.toggle("show");
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
                    <div className="flex-row navbar-link" id="user_loggedin">
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/">Profile</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/user_booking">Booking</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav" exact activeClassName="active" to ="/user_map">Map</NavLink>
                        </div>
                        <div>
                            <button className="btn-logout" onClick={()=> 
                            {
                                firebase.auth().signOut().catch((err)=>{
                                    console.log(err)
                                    alert('Signout Error')
                                }
                                )
                                alert('Signout successfull');
                                window.location.href = '/';
                                }
                                }>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
