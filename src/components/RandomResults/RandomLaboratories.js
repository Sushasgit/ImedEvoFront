import React, { Component } from 'react'
import data from '../../constants/test.json'
import Map from '../../components/Map/Map'
import LaboratoriesList from '../SearchResultLists/LaboratoriesList'
import { connect } from 'react-redux'
import styles from  '../SearchResult/search-result.scss'


import 'rc-checkbox/assets/index.css'


class RandomLaboratories extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clinics: [],
      doctors: [],
      laboratories:[]
    }
  }

  componentDidMount () {
    var th = this
    th.setState({
      laboratories: data.laboratories
    })
  }

  render () {
    return (
      <div className={styles.h_col2_container}>
        <div className={styles.random_results}>
          <LaboratoriesList {...this.state}/>
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

export default connect(mapStateToProps)(RandomLaboratories)
