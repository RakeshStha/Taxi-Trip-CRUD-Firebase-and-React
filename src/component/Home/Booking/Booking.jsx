import React, {useState} from 'react'
import '../Booking/booking.css'
import firebase from '../firebase'

const Booking = () => {
    const initialFieldValues= {
        name: '',
        email: '',
        phone:''
      }
      var [values, setValues] = useState(initialFieldValues);
    
      const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
      }

      const sendOTP=(e)=>{
        e.preventDefault();
        
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        // let number = '+9779849497787'
        // console.log(typeof(number));
        let number ='+977' + String(values.phone);
        console.log(number);
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
        React.createElement("Modal")
        
        let code = prompt('enter the otp', '');
        // this.setState({
        //   popupComponent:true,
        // })
        if(code == null) return;

        e.confirm(code).then(function(result){
            console.log(result.user, 'user');
            // document.querySelector('label').textContent = result.user.phoneNumber + "Number verified";
            
            const messageRef = firebase.database().ref('signup').orderByKey().limitToLast(100);
            firebase.database().ref('signup').push( 
            values
            ).catch((error)=>{
                console.log(error)
            })

            }).catch((error)=>{
            console.log(error)
            // console.log('code does not match');
        })
        })
      }
    



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
                            <input type="text" name="name" 
                            id="name" 
                            placeholder="Your Name" 
                            value={values.name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div >
                            <p>Email Address</p>
                            <input type="text" 
                            name="email" 
                            id="email" 
                            placeholder="abc@gmail.com" 
                            value={values.email}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div >
                            <p>Phone</p>
                            <input type="number"
                            min="10" 
                            name="phone" 
                            id="phone"
                            value={values.phone} 
                            placeholder="+977-9812345678" 
                            onChange={handleInputChange}
                            />
                        </div>
                        
                    </div>
                    <div className="center">
                    <div id="recaptcha"></div>
                        <button className="pt-10 btn-booknow" onClick={sendOTP}>BOOKNOW</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Booking
