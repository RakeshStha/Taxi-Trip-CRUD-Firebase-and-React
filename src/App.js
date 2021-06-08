
import './App.css';

import { Route, Switch} from 'react-router-dom';
import About from './component/Home/About/About';
import Contact from './component/Home/Contact/Contact';
import Service from './component/Home/Service/Service';
import Booking from './component/Home/Booking/Booking';
import NotFound from './component/Error/NotFound';
import Navbar from './component/Home/Navbar/Navbar'
import Footer from './component/Home/Footer/Footer'
import Profile from './component/User_Profile/Profile/Profile'
import User_Navbar from './component/User_Profile/User_Navbar/User_Navbar'
import User_Footer from './component/User_Profile/User_Footer/User_Footer'

function App() {
  return (
    <div className="App">
          <Navbar className="main-navbar"/>
          <User_Navbar className="main-navbar-user"/>
          <Switch>
            <Route exact path = "/" component= {About}/>
            <Route exact path = "/service" component= {Service}/>
            <Route exact path = "/contact" component= {Contact}/>
            <Route exact path = "/booking" component= {Booking}/>
            <Route exact path = "/user_profile" component= {Profile}/>
            
            {/* <Route exact path = "/booking" component= {Booking}/> */}
            <Route component={NotFound}/>
          </Switch>
          <User_Footer className="main-navbar-user-footer"/>
        <Footer className="main-navbar-footer"/>
    </div>
  );
}

export default App;
