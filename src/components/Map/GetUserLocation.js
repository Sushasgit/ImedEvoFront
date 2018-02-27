import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
const {MarkerWithLabel} = require('react-google-maps/lib/components/addons/MarkerWithLabel')
import getLocation from '../../actions/locationActions'
import * as Icons from '../SvgIcons/SvgIcons.js'

class GetUserLocation extends Component {

  componentWillMount () {
    this.props.getLocation()
  }


  render () {
    if(this.props.location instanceof Error === false) {
      const {coords: {latitude, longitude}} = this.props.location

      return (
        <Fragment>
          {latitude > 0 && longitude > 0 &&
          <MarkerWithLabel
            animation={google.maps.Animation.DROP}
            position={{lat: latitude, lng: longitude}}
            labelAnchor={new google.maps.Point(-10, -20)}
            labelStyle={{
              backgroundColor: '#fff',
              fontSize: '12px',
              padding: '16px',
              borderRadius: '8px',
              color: '#507ce2'
            }}
            icon={{
              url: 'data:image/svg+xml;utf-8,' + Icons.IconMarkerUser,
              size: new google.maps.Size(50, 55),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 32)
            }}
          >
            <div>Вы здесь</div>
          </MarkerWithLabel>
          }
        </Fragment>
      )
    } else return null
  }
}

const mapStateToProps = (state) => {
  return {location: state.location}
}
export default connect(mapStateToProps, {getLocation})(GetUserLocation)
