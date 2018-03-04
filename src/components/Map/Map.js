import React from 'react'
const {compose, withProps, withHandlers, withState} = require('recompose')
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import GetUserLocation from './GetUserLocation'
const {InfoBox} = require('react-google-maps/lib/components/addons/InfoBox')
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styleMap from '../../constants/mapStyle.json'
import styles from  './map.scss'

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places',
    loadingElement: <div className={styles.map_container}/>,
    containerElement: <div className={styles.map_container}/>,
    mapElement: <div className={styles.map}/>,
    center: {lat: 46.4715667, lng: 30.7443383},
  }),
  withState('places', 'updatePlaces', ''),
  withState('selectedDoctorsPlace', 'updateSelectedDoctorsPlace', null),
  withState('selectedClinicsPlace', 'updateSelectedClinicsPlace', null),
  withHandlers(() => ({})),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.center}
    defaultOptions={{styles: styleMap}}>
    <GetUserLocation/>


        {props.doctors &&
          props.doctors.map((a, i) => {
          let lat = parseFloat(a.coordinatesLatitude)
          let lon = parseFloat(a.coordinatesLongitude)
          return (
            <Marker
              onClick={() => props.updateSelectedDoctorsPlace(i)}
              key={i}
              position={{lat: lat, lng: lon}}
              animation={google.maps.Animation.DROP}
              icon={{
                url: 'data:image/svg+xml;utf-8,' + Icons.IconMarker,
                size: new google.maps.Size(35, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32),

              }}
            >
              {props.selectedDoctorsPlace === i &&
              <InfoBox
                options={{
                  pane: "overlayLayer",
                  pixelOffset: new google.maps.Size(-140, -60),
                  alignBottom: true,
                  boxStyle: {
                    boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`
                  },
                  closeBoxURL : ""
                }}
                onCloseClick={() => props.updateSelectedDoctorsPlace(null)}>
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
              </InfoBox>
              }
            </Marker>
          )
        })}
    {props.clinics &&
      props.clinics.map((a, i) => {
      let lat = parseFloat(a.coordinatesLatitude)
      let lon = parseFloat(a.coordinatesLongitude)
          let logo = a.logo
      return (
        <Marker
          onClick={() => props.updateSelectedClinicsPlace(i)}
          key={i}
          position={{lat: lat, lng: lon}}
          icon={{
            url: 'data:image/svg+xml;utf-8,' + Icons.IconMarker,
            size: new google.maps.Size(35, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
          }}
        >
          {props.selectedClinicsPlace === i &&
          <section className={styles.infobox}>
          <InfoBox
            options={{
              pane: "overlayLayer",
              maxWidth: 100,
              maxHeight: 100,
             // pixelOffset: new google.maps.Size(-140, -60),
              alignBottom: true,
              boxStyle: {
                maxWidth:'400px'
              },

            }}
            onCloseClick={() => props.updateSelectedClinicsPlace(null)}>
            <div>
              <div className={styles.doctor__card}>
                <img className={styles.doctor__img} src={logo}
                     alt="image-doctor"/>
                <div className={styles.main_info}>
                  <h2 className={styles.doctor__name}><span>{a.firstname}</span> <span>{a.lastname}</span></h2>

                  <h3 className={styles.doctor__name}>{a.clinicName}</h3>

                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="rgb(249, 215, 73)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    isSelectable={false}
                    rating={a.rating}/>
                  <p className={styles.doctor__address}><Icons.IconPlace/>{a.address}</p>
                </div>
              </div>
            </div>
          </InfoBox>
          </section>
            }

        </Marker>
      )
    })}

    {props.laboratories &&
    props.laboratories.map((a, i) => {
      let lat = parseFloat(a.latitude)
      let lon = parseFloat(a.longitude)
      return (
        <Marker
          onClick={() => props.updateSelectedClinicsPlace(i)}
          key={i}
          position={{lat: lat, lng: lon}}
          icon={{
            url: 'data:image/svg+xml;utf-8,' + Icons.IconMarker,
            size: new google.maps.Size(35, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
          }}
        >
          {props.selectedClinicsPlace === i &&
          <section className={styles.infobox}>
            <InfoBox
              options={{
                pane: "overlayLayer",
                maxWidth: 100,
                maxHeight: 100,
                // pixelOffset: new google.maps.Size(-140, -60),
                alignBottom: true,
                boxStyle: {
                  maxWidth:'400px'
                },

              }}
              onCloseClick={() => props.updateSelectedClinicsPlace(null)}>
              <div>
                <div className={styles.doctor__card}>
                  <img className={styles.doctor__img} src={require('../../images/placeholder-clinic.png')}
                       alt="image-doctor"/>
                  <div className={styles.main_info}>
                    <h2 className={styles.doctor__name}><span>{a.firstname}</span> <span>{a.lastname}</span></h2>

                    <h3 className={styles.doctor__name}>{a.clinicName}</h3>

                    <RatingStars
                      starSelectingHoverColor="rgb(249, 215, 73)"
                      starRatedColor="rgb(249, 215, 73)"
                      starWidthAndHeight="20px"
                      starSpacing='0px'
                      isSelectable={false}
                      rating={a.rating}/>
                    <p className={styles.doctor__address}><Icons.IconPlace/>{a.address}</p>
                  </div>
                </div>
              </div>
            </InfoBox>
          </section>
          }

        </Marker>
      )
    })}
    {props.diagnostics &&
    props.diagnostics.map((a, i) => {
      let lat = parseFloat(a.latitude)
      let lon = parseFloat(a.longitude)
      return (
        <Marker
          onClick={() => props.updateSelectedClinicsPlace(i)}
          key={i}
          position={{lat: lat, lng: lon}}
          icon={{
            url: 'data:image/svg+xml;utf-8,' + Icons.IconMarker,
            size: new google.maps.Size(35, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
          }}
        >
          {props.selectedClinicsPlace === i &&
          <section className={styles.infobox}>
            <InfoBox
              options={{
                pane: "overlayLayer",
                maxWidth: 100,
                maxHeight: 100,
                // pixelOffset: new google.maps.Size(-140, -60),
                alignBottom: true,
                boxStyle: {
                  maxWidth:'400px'
                },

              }}
              onCloseClick={() => props.updateSelectedClinicsPlace(null)}>
              <div>
                <div className={styles.doctor__card}>
                  <img className={styles.doctor__img} src={require('../../images/placeholder-clinic.png')}
                       alt="image-doctor"/>
                  <div className={styles.main_info}>
                    <h2 className={styles.doctor__name}><span>{a.firstname}</span> <span>{a.lastname}</span></h2>

                    <h3 className={styles.doctor__name}>{a.clinicName}</h3>

                    <RatingStars
                      starSelectingHoverColor="rgb(249, 215, 73)"
                      starRatedColor="rgb(249, 215, 73)"
                      starWidthAndHeight="20px"
                      starSpacing='0px'
                      isSelectable={false}
                      rating={a.rating}/>
                    <p className={styles.doctor__address}><Icons.IconPlace/>{a.address}</p>
                  </div>
                </div>
              </div>
            </InfoBox>
          </section>
          }
        </Marker>
      )
    })}

  </GoogleMap>
)

export default Map;
