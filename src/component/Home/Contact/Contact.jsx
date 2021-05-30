import React from 'react'
import '../Contact/contact.css';

const Contact = () => {
    return (
        <div className="Contact-page-container">
      <div className="top-contact-div">
        <h1>GET TAXI NOW </h1>
        <img src="assets/images/contact_1.png" alt="" />
      </div>
      <div className="bottom-contact-div">
        <div className="bottom-contact-img-text">
          <div className="bottom-contact-img">
            <img src="assets/images/contact_2.png" alt="" />
          </div>
          <div className="bottom-contact-text">
            <h1>Contact us</h1>
            <p>Address: Kathmandu, Nepal</p>
            <p>Phone: +977-9849497787</p>
            <p>Email:info@taxitrip.com</p>
          </div>
        </div>
        <div className="bottom-contact-form">
          <h1>Get in Touch</h1>
          <h3>
            Please fill out the quick form and we will be in touch with
            lightening speed
          </h3>
          <div className="form-part">
            <form action="">
              <label for="fname">
                <h3>Full Name:</h3>
              </label>
              <input type="text" className="fullname" />
              <label for="lname">
                <h3>Last name:</h3>
              </label>
              <input type="email" className="email" />
              <label for="lname">
                <h3>Message:</h3>
              </label>
              <input type="text" className="message" />
              <br />
              <div className="submit-div">
                <button className="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact
