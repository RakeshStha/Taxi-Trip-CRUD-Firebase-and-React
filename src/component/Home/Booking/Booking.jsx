import React from 'react'
import '../Booking/booking.css'

const Booking = () => {
    return (
        <div className="booking-container">
            <h1>Choose your destination and grap your taxi.</h1>
            <div className=" booking-images">
                <img src="assets/images/online-booking_1.jpg" alt="Order online" width="100%" height="100%" />
                <img src="assets/images/online-booking_2.jpg" alt="taxi Stop" width="100%" height="100%" />
            </div>
            <div className="booknow">
                <h1>BOOK TAXI NOW</h1>
            </div>
            <div className="center taxi-img">
                <img src="assets/images/booking-taxi.png" alt="taxi-Booking" />
            </div>
            <div className="booking-form">
                <form action="" method="post">
                    <div className=" form-book">
                        <div >
                            <p>First Name</p>
                            <input type="text" name="name" id="name" placeholder="Your Name" />
                        </div>
                        <div >
                            <p>Email Address</p>
                            <input type="text" name="email" id="email" placeholder="abc@gmail.com" />
                        </div>
                        <div >
                            <p>Phone</p>
                            <input type="text" name="phn" id="phone" placeholder="+977-9812345678" />
                        </div>
                    </div>
                    <div className="center">
                        <button className="pt-10 btn-booknow">BOOKNOW</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Booking
