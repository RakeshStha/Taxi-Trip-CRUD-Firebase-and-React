
import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import UserNavbar from './User_Navbar/User_Navbar'
import Profile from './Profile/Profile'
import User_Booking from './User_Booking/User_Booking'
import User_Map from './User_Map/User_Map'
import User_Footer from './User_Footer/User_Footer'
import NotFound from '../Error/Errors'


class User extends Component {
    render() {
        return (
            <div>
                 <UserNavbar />
                    <Switch>
                        <Route exact path = "/" component= {Profile}/>
                        <Route exact path = "/user_booking" component= {User_Booking}/>
                        <Route exact path = "/user_map" component= {User_Map}/>
                        <Route component={NotFound}/>
                    </Switch>
                <User_Footer/>
            </div>
        );
    }
}

export default User;