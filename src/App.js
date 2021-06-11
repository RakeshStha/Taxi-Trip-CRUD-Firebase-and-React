
import './App.css';
import React, {Component} from 'react';


import Home from './component/Home/Home'
import User from './component/User_Profile/User';
import firebase from './component/Home/firebase';

class App extends Component {
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
      }
      else {
        this.setState({user: null});
      }
    })
  }


render(){

  return (
    <div className="App">
      {this.state.user ? (<User/>) : (<Home/>)}
      {/* <Home/> */}
      {/* <User/> */}
      
          
    </div>
  );
}
}

export default App;
