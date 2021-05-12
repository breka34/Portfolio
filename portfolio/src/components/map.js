import React from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const map = ({google}) => {
    return (
        <Map
          google={google}
          zoom={8}
        //   style={mapStyles}
          initialCenter={{ lat: 43.38031, lng: 17.60006}}
        >
          <Marker position={{ lat: 43.38031, lng: 17.60006}} />
          <Marker position={{ lat: 43.37876, lng: 17.59942}} />

        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCtoDm12YTnNjqDbk8bWtyiUmtw8ROSbIU'
})(map)

//43.37876, 17.59942