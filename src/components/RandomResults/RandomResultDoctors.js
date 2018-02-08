import React, { Component } from 'react'
import axios from 'axios';
import Map from '../../components/Map/Map'
import DoctorList from '../SearchResultLists/DoctorList'

import { connect } from 'react-redux'
import styles from  '../SearchResult/search-result.scss'

import 'rc-checkbox/assets/index.css'

class RandomResultDoctors extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading:true,
      clinics:[],
      doctors: [],
    }
  }

  componentDidMount () {
    const ROOT_URL = "http://54.37.125.178:8080";
    axios.get(`${ROOT_URL}/doctors/getall`)
      .then(response => {
        console.log(response.data)
        let doctors = response.data;
        let th = this
        th.setState({
          doctors:doctors,
          isLoading:false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render () {
    console.log(this.state.doctors.length)
    return (
      <div className={styles.h_col2_container}>
        <div className={styles.random_results}>

          {this.state.clinics.length===0 && this.state.isLoading &&
          <img src={require('../../images/loading.gif')}/>
          }

          {this.state.doctors.length > 0 && !this.state.isLoading &&
            <DoctorList  {...this.state}/>
          }

          {this.state.doctors.length === 0 && !this.state.isLoading &&
          <h4 className={styles.title_not_found}>По вашему запросу ничего не найдено</h4>
          }
        </div>
          <div className={styles.map}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
              loadingElement={<div className={styles.map_container} />}
              containerElement={<div className={styles.map_container}/>}
              mapElement={<div className={styles.map} />}
              {...this.state}
            />
          </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  someProp: state.someProp
})

export default connect(mapStateToProps)(RandomResultDoctors)
