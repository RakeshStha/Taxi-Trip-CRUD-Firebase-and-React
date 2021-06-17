
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import '../User_Map/user_map.css'

 

class User_Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
        }

        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
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
        // console.log(position)
    }
    
 
  render() {
    return (
     <>
   
    
      <Map 
      className="map-a"
      google={this.props.google}
      center={{
        lat: this.state.latitude,
        lng: this.state.latitude
      }}
      zoom={15}
      onClick={this.onMapClicked}
     >
 
      <Marker 
      name={'Current Location'}
      position={{lat: this.state.latitude, lng: this.state.latitude}} />  
    </Map>
    <br></br>

    <div>
       
       <button onClick={this.getLocation()}>Find me</button>
   </div>
   latitude: {this.state.latitude}<br></br>
      longitude: {this.state.longitude}

    {/* <Map 
      className="map-b"
      google={this.props.google}
      center={{
        lat: this.state.latitude,
        lng: this.state.longitude
      }}
      zoom={15}
      onClick={this.onMapClicked}>
 
      <Marker 
      name={'Current Location'}
      position={{lat: this.state.latitude, lng: this.state.longitude}} />  

    </Map> */}
  
    </>
    );
  }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc")
  })(User_Map)
