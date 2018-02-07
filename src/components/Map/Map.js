import React from 'react';
import styles from  './map.scss'
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
const { compose, withProps, withHandlers,withState } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `700px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `700px` }} />,
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
  >
    {props.doctors.map ((a, i) => {
      let lat = parseFloat(a.coordinatesLatitude);
      let lon = parseFloat(a.coordinatesLongitude);
      return (
        <Marker  onClick={() => props.updateSelectedDoctorsPlace(i)} key={i} position={{ lat: lat, lng: lon }}>
          {props.selectedDoctorsPlace === i && <InfoBox onCloseClick={() => props.updateSelectedDoctorsPlace(null)}>
            <div className={styles.doctor__card}>
              <img className={styles.doctor__img} src='http://www.sibs-visa.com/wp-content/uploads/2014/07/vrach.jpg'/>
              <div className={styles.main_info}>
                <h2 className={styles.doctor__name}><span>{a.firstname}</span> <span>{a.lastname}</span></h2>
                <h2 className={styles.doctor__position}>Педиатр</h2>
                <h3 className={styles.doctor__works}>{a.clinic}</h3>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={a.range}
                />
                <p className={styles.doctor__address}><Icons.IconPlace/>{a.address}</p>
              </div>


            </div>
          </InfoBox>}
        </Marker>
      )
    })}
    {props.clinics.map ((a, i) => {
      let lat = parseFloat(a.coordinatesLatitude);
      let lon = parseFloat(a.coordinatesLongitude);
      return (
        <Marker  onClick={() => props.updateSelectedClinicsPlace(i)} key={i} position={{ lat: lat, lng: lon }}>
          {props.selectedClinicsPlace === i && <InfoBox onCloseClick={() => props.updateSelectedClinicsPlace(null)}>
            <div>
              <div className={styles.doctor__card}>
                <img className={styles.doctor__img} src={a.picture} alt="image-doctor"/>
                <div className={styles.main_info}>
                  <h2 className={styles.doctor__name}><span>{a.firstname}</span> <span>{a.lastname}</span></h2>

                  <h3 className={styles.doctor__name}>{a.clinicName}</h3>
                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="rgb(249, 215, 73)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    isSelectable={false}
                    rating={a.range}
                  />
                  <p className={styles.doctor__address}><Icons.IconPlace/>{a.address}</p>
                </div>
              </div>
            </div>
          </InfoBox>}
        </Marker>
      )
    })}

  </GoogleMap>
);
export default Map;
