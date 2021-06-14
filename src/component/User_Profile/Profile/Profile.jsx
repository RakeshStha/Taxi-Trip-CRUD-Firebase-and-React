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
          console.log(user.email)
          console.log(user.uid)
        
      
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
                    <h1>Personal Information :{this.setState.user}</h1>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="user_container">
                Profile
                {/* <h1>Welcome {this.state.user}</h1> */}
                {/* <p className="label">Fullname : <input></input></p> */}
                {/* <p className="label">Email Address : <input></input></p>
                <p className="label">Phone : <input></input></p>
                <p className="label">Password : <input></input></p>
                <button className="btn-edit">Edit</button> */}
            </div>
        </div>
    )
}
}

export default Profile
