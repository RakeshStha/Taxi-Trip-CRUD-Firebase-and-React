import React, {useState} from 'react'
import '../Contact/contact.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import firebase from '../firebase'

const Contact = () => {
  const initialFieldValues= {
    fname: '',
    email: '',
    message:''
  }
  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = e => {
    var {name, value} = e.target
    setValues({
        ...values,
        [name] : value
    })
  }

  const handleFormSubmit=(e)=>{

    // const succeed = document.querySelector('.messages-finished');
    // succeed.classList.toggle("message-success");

    e.preventDefault();
    const messageRef = firebase.database().ref('contact').orderByKey().limitToLast(100);
        firebase.database().ref('contact').push( 
          values
          ).catch((error)=>{
              var unsucceed = document.querySelector('messages-unfinished');
              unsucceed.classList.toggle("message-unsuccess")
          })

      var succeed = document.querySelector('.messages-finished');
      succeed.classList.toggle("message-success");
          
  }


    return (
        <div className="Contact-page-container">
      <div className="top-contact-div">
        <Pulse><h1>GET TAXI NOW </h1></Pulse>
        <Zoom>
        <img src="assets/images/contact_1.png" alt="" />
        </Zoom>
      </div>
      <div className="bottom-contact-div">
        <div className="bottom-contact-img-text">
          <div className="bottom-contact-img">
            <Fade left>
            <img src="assets/images/contact_2.png" alt="" />
            </Fade>
          </div>
          <Fade bottom>
          <div className="bottom-contact-text">
            <h1>Contact us</h1>
            <p>Address: Kathmandu, Nepal</p>
            <p>Phone: +977-9849497787</p>
            <p>Email:info@taxitrip.com</p>
          </div>
          </Fade>
        </div>
        <Fade right>
        <div className="bottom-contact-form">
          <Fade top><h1>Get in Touch</h1></Fade>
          <p className="messages-unfinished" id="messages-unfinished">Sorry your message was not send. Thank You!</p>
          <p className="messages-finished" id="messages-finished">Your message send successfully we will contact you soon. Thank You!</p>
          <Zoom><h3>
            Please fill out the quick form and we will be in touch with
            lightening speed
          </h3>
          </Zoom>
          <div className="form-part">
            <form action="" >
              <label for="fname">
                <h3>Full Name:</h3>
              </label>
              <Zoom>
              <input type="text" className="fullname"
              name="fname"
              value={values.fname}
              onChange={handleInputChange}
              required
              />
              </Zoom>
              <label for="email">
                <h3>Email:</h3>
              </label>
              <Zoom>
              <input type="email" className="email" 
              name="email"
              value={values.email}
              onChange={handleInputChange}
              required
              />
              </Zoom>
              <label for="message">
                <h3>Message:</h3>
              </label>
              <Zoom>
              <input type="text" className="message" 
              name="message"
              value={values.message}
              onChange={handleInputChange}
              required
              />
              </Zoom>
              <br />
              <Fade bottom>
              <div className="submit-div">
                <button className="submit" onClick={handleFormSubmit}>SEND</button>
              </div>
              </Fade>
            </form>
          </div>
        </div>
        </Fade>
      </div>
    </div>
    )
}

export default Contact
