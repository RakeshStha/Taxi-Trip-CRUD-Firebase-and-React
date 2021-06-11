import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import About from '../Home/About/About';
import Contact from '../Home/Contact/Contact';
import Service from '../Home/Service/Service';
import Booking from '../Home/Booking/Booking';
import Login from '../Home/Login/Login';
import NotFound from '../Error/Errors';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path = "/" component= {About}/>
                    <Route exact path = "/service" component= {Service}/>
                    <Route exact path = "/contact" component= {Contact}/>
                    <Route exact path = "/booking" component= {Booking}/>
                    <Route exact path = "/login" component= {Login}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer className="main-navbar-footer"/>
            </div>
        );
    }
}

export default Home;