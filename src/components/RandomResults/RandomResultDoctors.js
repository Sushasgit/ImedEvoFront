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
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render () {
    console.log(this.state.doctors.length)
    return (
      <div style={{display:'flex'}}>
        <div style={{width:'50%', height:'700px', overflow:'scroll'}}>

          {this.state.doctors.length > 0 &&
            <DoctorList  {...this.state}/>
          }

          {this.state.doctors.length === 0 &&
          <h4 className={styles.title_not_found}>По вашему запросу ничего не найдено</h4>
          }
        </div>
          <div className={styles.map}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
              loadingElement={<div style={{height: `700px`}}/>}
              containerElement={<div style={{height: `800px`}}/>}
              mapElement={<div style={{height: `700px`, width: '700px'}}/>}
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
