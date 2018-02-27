import React, { Component, Fragment } from 'react'
import Map from '../../components/Map/Map'
import DoctorList from '../SearchResultLists/DoctorList'
import styles from  '../SearchResult/search-result.scss'
import 'rc-checkbox/assets/index.css'
import axios from 'axios';
import * as constants from '../../constants/constants'

class SpecialityResultSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading:true,
      clinics:[],
      doctors: [],
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      doctors: nextProps,
      isLoading:nextProps
    })
  }

  render () {
    return (
      <Fragment>
        {this.state &&
        <div className={styles.h_col2_container}>
          <div className={styles.random_results}>

            {this.state.isLoading.isLoading &&
            <img src={require('../../images/loading.gif')}/>
            }

            {!this.state.isLoading.isLoading &&
            <DoctorList  {...this.state.doctors}/>
            }

          </div>
          <div className={styles.map}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
              loadingElement={<div className={styles.map_container} />}
              containerElement={<div className={styles.map_container}/>}
              mapElement={<div className={styles.map} />}
              {...this.props.doctors}
            />
          </div>
        </div>
        }
      </Fragment>
    )
  }
}

export default SpecialityResultSearch;