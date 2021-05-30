
import './App.css';
import Footer from './component/Footer/Footer'
import { Route, Switch} from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Service from './component/Service/Service';
import Booking from './component/Booking/Booking';
import NotFound from './component/Error/NotFound';
import Navbar from './component/Navbar/Navbar';

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
