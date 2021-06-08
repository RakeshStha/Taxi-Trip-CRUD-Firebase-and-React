import React from 'react'
import '../User_Footer/user_footer.css'

const User_Footer = () => {
    return (
        <div>
           <div className="user-footer">
                <div className="flex-one">
                    <h3>LOCATIONS</h3>
                    <h4 className="user_footer_foot">Set Home Address<br></br>
                    Set Work Address</h4>
                </div>
                <div className="flex-one">
                    <h3>OFFERS</h3>
                    <h4 className="user_footer_foot">Promotions<br></br>
                    Get Discounts</h4>
                </div>
                <div className="flex-one">
                    <h3>SETTINGS</h3>
                    <h4 className="user_footer_foot">Languages<br></br>
                    Permissions</h4>
                </div>
                <div className="flex-one">
                    <h3>HELP & LEGAL</h3>
                    <h4 className="user_footer_foot">Help<br></br>
                    Policies</h4>
                </div>
           </div>
           <div className="foot">
               <h3>&copy; Taxi Trip - All Rights Reserved</h3>
           </div>
        </div>
    )
}

export default User_Footer
