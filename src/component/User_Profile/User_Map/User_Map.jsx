
// import React, { Component } from 'react';
// import '../User_Map/user_map.css'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 

// class User_Map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             latitude: 27.71968,
//             longitude: 85.23644,
//             userAddress: null,
//             zoom: 11
//         }

//         this.getLocation = this.getLocation.bind(this);
//         this.getCoordinates = this.getCoordinates.bind(this);
//         // this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
//     }
    
//     getLocation(){
        
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this.getCoordinates);
//         }
//         else{
//             alert('Geolocation is not supported by this browser')
//         }
//     }

//     getCoordinates(position){
//         this.setState({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//         })

        
//       //  this.reverseGeocodeCoordinates();
//         // console.log(position)
//     }

//     // reverseGeocodeCoordinates(){
//     //   fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc')
//     //   .then(response => response.json())
//     //   // .then(data => this.setState({
//     //   //   userAddress: data.results[0].formatted_address
//     //   // }))
//     //   .then(data => console.log(data))
//     //   .catch(error => alert(error))
//     // }

//     handleLocationError(error){
//       switch(error.code){
//         case error.PERMISSION_DENIED:
//           alert("User denied the request for Geolocation.")
//           break;
//           case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.")
//             break;
//             case error.TIMEOUT:
//               alert("The request to get user location timed out.")
//               break;
//               case error.UNKNOWN_ERROR:
//                 alert("An unknown error occured.")
//                 break;
//                 default:
//                   alert("An unknown error occured.")
//       }
//     }
    
 
//   render() {
//     return (
//      <>
//       <div>
//         <div className="center">
//           <div>
//             <button className="map-btn" onClick={this.getLocation}>Find Me</button> 
//             <h4>Nepal Coordinates</h4> 
//             <p>Latitude: {this.state.latitude}</p> 
//             <p>Longitude: {this.state.longitude}</p>
//           </div>
//         </div>

//         <Map google={this.props.google} 
//         zoom={14}
//         initialCenter={{
//           lat: this.state.latitude,
//           lng: this.state.longitude
//         }}
//         >
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         {/* <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow> */}
//         </Map>


//         {/* <h4>Google Maps Reverse Geocoding</h4>
//         <p>Address: {this.state.userAddress}</p>
//         {
//           this.state.latitude && this.state.longitude ?
//           <img src={'https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc'} alt=''/>
//           :
//           null
//         } */}
//       </div>
  
//     </>
//     );
//   }
// }

// // export default User_Map;

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc")
//   })(User_Map)



  import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class User_Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      markers: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    );
  }

  mapClicked = event => {
    const { markers } = this.state;
    this.setState({
      markers: [
        {
          position: event.latLng,
          key: Date.now(),
          defaultAnimation: 2
        },
        ...markers
      ]
    });
    console.log(markers);
  };

  onMarkerDragEnd = coord => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState({
      lat: lat,
      lng: lng
    });

    console.log(lat, lng);
    // this.setState(prevState => {
    //   // const markers = [...this.state.markers];
    //   // markers[index] = { ...markers[index], position: { lat, lng } };
    //   // return { markers };
    // });
  };

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const style = {
      width: "100%",
      height: "100vh"
    };
    return (
      <Map
        google={this.props.google}
        zoom={50}
        style={style}
        // initialCenter={{
        //   lat: this.state.lat,
        //   lng: this.state.lng
        // }}
        center={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        onClick={this.mapClicked}
      >
        <Marker
          title={"Geolocation"}
          position={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          draggable={true}
          onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQ-XFSYZtSnkxUa678OjDbvlTPQr5xpFc"
})(User_Map);


