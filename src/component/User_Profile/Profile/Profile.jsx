import React from 'react'
import '../Profile/profile.css'


const Profile = () => {
    return (
        <div>
        
            <div className="user_profile">
                <div>
                    <h1>Personal Information</h1>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="user_container">
                <p className="label">Fullname : <input></input></p>
                <p className="label">Email Address : <input></input></p>
                <p className="label">Phone : <input></input></p>
                <p className="label">Password : <input></input></p>
                <button className="btn-edit">Edit</button>
            </div>
            
        </div>
    )
}

export default Profile
