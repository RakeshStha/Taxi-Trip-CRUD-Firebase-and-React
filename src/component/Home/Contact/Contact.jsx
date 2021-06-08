import React, {useState} from 'react'
import '../Contact/contact.css';
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
    e.preventDefault();
    const messageRef = firebase.database().ref('contact').orderByKey().limitToLast(100);
        firebase.database().ref('contact').push( 
          values 
          
          ).catch((error)=>{
            if (error){
              console.log(error)
              var unsucceed = document.getElementById('messages-unfinished');
              unsucceed.classList.toggle("message-unsuccess")

            }
            
            else
            var succeed = document.getElementById('messages-finished');
            succeed.classList.toggle("message-success");
           
          })
  }


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
          <p className="messages-unfinished" id="messages-unfinished">Sorry your message was not send. Thank You!</p>
          <p className="messages-finished" id="messages-finished">Your message send successfully we will contact you soon. Thank You!</p>
          <h3>
            Please fill out the quick form and we will be in touch with
            lightening speed
          </h3>
          <div className="form-part">
            <form action="" >
              <label for="fname">
                <h3>Full Name:</h3>
              </label>
              <input type="text" className="fullname"
              name="fname"
              value={values.fname}
              onChange={handleInputChange}
              />
              <label for="email">
                <h3>Email:</h3>
              </label>
              <input type="email" className="email" 
              name="email"
              value={values.email}
              onChange={handleInputChange}
              />
              <label for="message">
                <h3>Message:</h3>
              </label>
              <input type="text" className="message" 
              name="message"
              value={values.message}
              onChange={handleInputChange}
              />
              <br />
              <div className="submit-div">
                <button className="submit" onClick={handleFormSubmit}>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact
