import React, {useState} from 'react'
import '../Booking/booking.css'
import firebase from '../firebase'
// require('firebase/auth')

const Booking = () => {
    const initialFieldValues= {
        name: '',
        email: '',
        phone:'',
        password:''
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
        var Phone = values.phone + '@gmail.com'

        firebase.auth().createUserWithEmailAndPassword(Phone, values.password).then(()=>{
            // console.log(u)
            var succeed = document.querySelector('.messages-finished');
            succeed.classList.toggle("message-success");
        }).catch((err)=>{
            console.log(err);
            console.log('Error')
        })

        // const messageRef = firebase.database().ref('signup').orderByKey().limitToLast(100);
        //     firebase.database().ref('signup').push( 
        //     values
        //     ).catch((error)=>{
        //         console.log(error)
        //     })


        
        // let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        // // let number = '+9779849497787'
        // // console.log(typeof(number));
        // let number ='+977' + String(values.phone);
        // // console.log(number);
        // firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
        // let code = prompt('enter the otp', '');
        // // this.setState({
        // //   popupComponent:true,
        // // })
        // if(code == null) return;

        // e.confirm(code).then(function(result){
        //     console.log(result.user, 'user');
        //     // document.querySelector('label').textContent = result.user.phoneNumber + "Number verified";
            
        //     const messageRef = firebase.database().ref('signup').orderByKey().limitToLast(100);
        //     firebase.database().ref('signup').push( 
        //     values
        //     ).catch((error)=>{
        //         console.log(error)
        //         var unsucceed = document.querySelector('messages-unfinished');
        //       unsucceed.classList.toggle("message-unsuccess")
        //     })
        //     var Phone = values.phone + '@gmail.com'

        // firebase.auth().createUserWithEmailAndPassword(Phone, values.password).then(()=>{
        //     // console.log(u)
        //     var succeed = document.querySelector('.messages-finished');
        //     succeed.classList.toggle("message-success");
        // }).catch((err)=>{
        //     console.log(err);
        //     var unsucceed = document.querySelector('messages-unfinished');
        //       unsucceed.classList.toggle("message-unsuccess")
        // })


        //     }).catch((error)=>{
            
        //     // var unsucceed = document.querySelector('messages-unfinished');
        //     //   unsucceed.classList.toggle("message-unsuccess")
        //       console.log(error)
        //       alert('Code doesnot match. Please try again. Thank You!')
        //     // console.log('code does not match');
        // })
        // })
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
            <p className="messages-unfinished" id="messages-unfinished">Sorry we got some error please try again.</p>
          <p className="messages-finished" id="messages-finished">Account creation successfully. Thank You!</p>
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
                            <input type="email" 
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
                        <div >
                            <p>Password</p>
                            <input type="password"
                            
                            name="password" 
                            id="password"
                            value={values.password} 
                            placeholder="******" 
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
