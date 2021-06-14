import React, {useState} from 'react'
import '../Login/login.css'
import {Link} from "react-router-dom";
import firebase from "../firebase"
import Profile from "../../User_Profile/Profile/Profile"


const Login = () => {

    const initialFieldValues= {
        username: '',
        passwords: ''
      }
      var [values, setValues] = useState(initialFieldValues);

      const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
      }

      const handleFormLogin=(e)=>{

        // const succeed = document.querySelector('.messages-finished');
        // succeed.classList.toggle("message-success");
    
        e.preventDefault();
        // + '@gmail.com'

        var Email = values.username 
        console.log(Email)
        firebase.auth().signInWithEmailAndPassword(Email, values.passwords).then((u)=>{
            alert('Login Sccessfully!')
            console.log(u)
            window.location.href = '/';
        }).catch((err)=>{
            console.log(err)
            alert('Invalid username or password!')
        })

      }

    return (
        <div>

            <div className="login_container">
                <div className="login_content">
                    <h1>Login</h1>
                    <form className="login_form">
                    <label for="username">
                        <h3>Username:</h3>
                    </label>
                    <input type="text" className="fullname"
                    name="username"
                    value={values.username}
                    onChange={handleInputChange}
                    />
                    <label for="password">
                        <h3>Password:</h3>
                    </label>
                    <input type="password" className="fullname"
                    name="passwords"
                    value={values.passwords}
                    onChange={handleInputChange}
                    />
                    <div className="btn-login">
                        <button className="btn-btnlogin" onClick={handleFormLogin}>Login</button>
                    </div>
                    <div className="btn-login-register" >
                        <Link to="/booking" className="login-p">Register here</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
