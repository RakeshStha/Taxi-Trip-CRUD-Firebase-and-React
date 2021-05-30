
import './App.css';

import { Route, Switch} from 'react-router-dom';
import About from './component/Home/About/About';
import Contact from './component/Home/Contact/Contact';
import Service from './component/Home/Service/Service';
import Booking from './component/Home/Booking/Booking';
import NotFound from './component/Error/NotFound';
import Navbar from './component/Home/Navbar/Navbar';
import Footer from './component/Home/Footer/Footer'

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = "/" component= {About}/>
            <Route exact path = "/service" component= {Service}/>
            <Route exact path = "/contact" component= {Contact}/>
            <Route exact path = "/booking" component= {Booking}/>
            <Route component={NotFound}/>
          </Switch>
        <Footer/>
    </div>
  );
}

export default App;
