
import React, { Component } from 'react';
import '../User_Map/user_map.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 

class User_Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
            zoom: 11
        }

        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        // this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }
    
    getLocation(){
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
        else{
            alert('Geolocation is not supported by this browser')
        }
    }

    getCoordinates(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
      //  this.reverseGeocodeCoordinates();
        // console.log(position)
    }

    // reverseGeocodeCoordinates(){
    //   fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc')
    //   .then(response => response.json())
    //   // .then(data => this.setState({
    //   //   userAddress: data.results[0].formatted_address
    //   // }))
    //   .then(data => console.log(data))
    //   .catch(error => alert(error))
    // }

    handleLocationError(error){
      switch(error.code){
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
              case error.UNKNOWN_ERROR:
                alert("An unknown error occured.")
                break;
                default:
                  alert("An unknown error occured.")
      }
    }
    
 
  render() {
    return (
     <>
      <div>
        <button onClick={this.getLocation}>Get coordinates</button> 
        <h4>HTML 5 Coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>

        <Map google={this.props.google} 
        zoom={14}
        initialCenter={{
          lat: 27.4695853,
          lng: 85.2722472
        }}
        >
 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
        </Map>


        {/* <h4>Google Maps Reverse Geocoding</h4>
        <p>Address: {this.state.userAddress}</p>
        {
          this.state.latitude && this.state.longitude ?
          <img src={'https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc'} alt=''/>
          :
          null
        } */}
      </div>
  
    </>
    );
  }
}

// export default User_Map;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc")
  })(User_Map)
