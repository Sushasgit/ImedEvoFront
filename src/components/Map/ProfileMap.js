/**
 * Created by Susha on 21.01.18.
 */
import React from 'react'
const {compose, withProps, withHandlers, withState} = require('recompose')
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import GetUserLocation from './GetUserLocation'
import styleMap from '../../constants/mapStyle.json'
import * as Icons from '../SvgIcons/SvgIcons.js'

const ProfileMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places',
    loadingElement: <div style={{minHeight: `400px`}}/>,
    containerElement: <div style={{minHeight: `400px`}}/>,
    mapElement: <div style={{minHeight: `400px`}}/>
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
    defaultCenter={props.clinic ? {
      lat: parseFloat(props.clinic.coordinatesLatitude),
      lng: parseFloat(props.clinic.coordinatesLongitude)
    } : {lat: 46.4632302, lng: 30.6895109}}
    defaultOptions={{styles: styleMap}}
  >
    <GetUserLocation/>
    {props.clinic &&
    <Marker
      position={{
        lat: parseFloat(props.clinic.coordinatesLatitude),
        lng: parseFloat(props.clinic.coordinatesLongitude)}}
      animation={google.maps.Animation.DROP}
      icon={{
        url: 'data:image/svg+xml;utf-8,' + Icons.IconMarker,
        size: new google.maps.Size(35, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
      }}
    >
    </Marker>
    }
  </GoogleMap>
)
export default ProfileMap;
