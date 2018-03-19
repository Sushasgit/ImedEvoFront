/*global google*/
import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import GetUserLocation from './GetUserLocation';
import styleMap from '../../constants/mapStyle.json';
import * as Icons from '../SvgIcons/SvgIcons.js';

const {compose, withProps, withHandlers, withState} = require('recompose');

const MapAboutUs = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places',
        loadingElement: <div style={{minHeight: `600px`}}/>,
        containerElement: <div style={{minHeight: `600px`, marginBottom: '-80px'}}/>,
        mapElement: <div style={{minHeight: `600px`}}/>
    }),
    withState('places', 'updatePlaces', ''),
    withState('selectedDoctorsPlace', 'updateSelectedDoctorsPlace', null),
    withState('selectedClinicsPlace', 'updateSelectedClinicsPlace', null),
    withHandlers(() => ({})),
    withScriptjs,
    withGoogleMap
)(props =>

    <GoogleMap
        defaultZoom={11}
        defaultCenter={{
            lat: 46.479706,
            lng: 30.747961
        }}
        defaultOptions={{styles: styleMap}}
    >
        <GetUserLocation/>

        <Marker
            position={{
                lat: 46.479706,
                lng: 30.747961
            }}
            animation={google.maps.Animation.DROP}
            icon={{
                url: 'data:image/svg+xml;utf-8,' + Icons.IconMarkerAbout,
                size: new google.maps.Size(50, 55),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32)
            }}
        >
        </Marker>

    </GoogleMap>
)
export default MapAboutUs;

