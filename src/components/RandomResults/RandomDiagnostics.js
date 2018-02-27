import React, { Component } from 'react'
import Map from '../../components/Map/Map'
import DiagnosticsList from '../SearchResultLists/DiagnosticsList'
import styles from  '../SearchResult/search-result.scss'

import 'rc-checkbox/assets/index.css'


class RandomDiagnostics extends Component {
  constructor (props) {
    super(props)

    this.state = {
      diagnostics:[]
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      diagnostics: nextProps,
      isLoading:nextProps.isLoading
    })
  }
  render () {
    return (
      <div className={styles.h_col2_container}>
        <div className={styles.random_results}>
          <DiagnosticsList {...this.state.diagnostics}/>

        </div>
        <div className={styles.map}>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `700px`}}/>}
            containerElement={<div style={{height: `800px`}}/>}
            mapElement={<div style={{height: `700px`, width: '700px'}}/>}
            {...this.state.diagnostics}
          />
        </div>

      </div>
    )
  }
}

export default RandomDiagnostics;

