/**
 * Created by Susha on 21.01.18.
 */
import React from 'react';
import styles from  './map.scss'
import styleMap from '../../constants/mapStyle.json'
const { compose, withProps, withHandlers,withState } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const ProfileMap = compose(
  withProps({
     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places",
    loadingElement: <div style={{ minHeight: `400px` }} />,
    containerElement: <div style={{ minHeight: `400px`  }} />,
    mapElement: <div style={{ minHeight: `400px` }} />,
    center: { lat:46.4632302, lng: 30.6895109 },
    //data:props
  }),
  withState('places', 'updatePlaces', ''),
  withState('selectedDoctorsPlace', 'updateSelectedDoctorsPlace', null),
  withState('selectedClinicsPlace', 'updateSelectedClinicsPlace', null),
  withHandlers(() => ({})),
  withScriptjs,
  withGoogleMap

)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    defaultOptions={{ styles: styleMap }}

  >
    {props.clinic.map ((a, i) => {
      let lat = parseFloat(a.coordinatesLatitude);
      let lon = parseFloat(a.coordinatesLongitude);
        <Marker position={{ lat:lat, lng: lon }}
                animation = {google.maps.Animation.DROP}
                icon = {{
                  url: '/placeholder.svg',
                  size: new google.maps.Size(35, 40),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 32)
                }}
        >
        </Marker>
    })}
  </GoogleMap>
);
export default ProfileMap;
