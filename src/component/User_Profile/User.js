
import '../../App.css';

import { Route, Switch} from 'react-router-dom';

import Login from '../Home/Login/Login'
import NotFound from '../Error/NotFound';

import Profile from '../User_Profile/Profile/Profile'
import User_Navbar from '../User_Profile/User_Navbar/User_Navbar'
import User_Footer from '../User_Profile/User_Footer/User_Footer'
import User_Booking from '../User_Profile/User_Booking/User_Booking'
import User_Map from '../User_Profile/User_Map/User_Map'

function User() {
  return (
    <div className="App">
          
          <User_Navbar className="main-navbar-user"/>
          <Switch>
          
            <Route exact path = "/login" component= {Login}/>
            <Route exact path = "/user_profile" component= {Profile}/>
            <Route exact path = "/user_booking" component= {User_Booking}/>
            <Route exact path = "/user_map" component= {User_Map}/>
            <Route component={NotFound}/>
          </Switch>
          <User_Footer className="main-navbar-user-footer"/>
        
    </div>
  );
}

export default User;
