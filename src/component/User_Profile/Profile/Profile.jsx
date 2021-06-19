import React, {Component} from 'react';
import '../Profile/profile.css'
import firebase from 'firebase'




class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {},
      }
    }
  
    componentDidMount(){
      this.authListener();
    }
  
    authListener(){
      firebase.auth().onAuthStateChanged((user)=> {
        if (user){
          this.setState({user});
          // console.log(user.email)
          // console.log(user.uid)

          document.getElementById('username').innerHTML= user.email;
          document.getElementById('profile').innerHTML= user.email;
          document.getElementById('uid').innerHTML = user.uid;
          // document.getElementById('pswd').innerHTML = user.password;
        
      
        }
        else {
          this.setState({user: null});
        }
      })
    }
  
  
  render(){

    return (
        <div>
            <div className="user_profile">
                <div>
                    <h1>Personal Information : </h1>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="user_container">
                
                <h1>Welcome <span id="profile"></span></h1>
                <h3><u>Your information</u></h3>
                
                <p className="label"> ID : <span id="uid"></span></p>
                 <p className="label">Username : <span id="username"></span></p>
                 {/* <p className="label">Password : <span id="pswd"></span></p>
                
                <button className="btn-edit">Edit</button> */}
            </div>
        </div>
    )
}
}

export default Profile
