import React, { Component, Fragment } from 'react'
import Map from '../../components/Map/Map'
import DiscountList from '../SearchResultLists/DiscountList'
import { connect } from 'react-redux'
import styles from  '../SearchResult/search-result.scss'


import 'rc-checkbox/assets/index.css'


class RandomDiscounts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      discounts:[],
      isLoading: true
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      discounts: nextProps,
      isLoading:nextProps.isLoading
    })
  }

  render () {
    console.log(this.state)
    return (
      <Fragment>
      {this.state &&
      <div className={styles.h_col2_container}>
        <div className={styles.random_results}>
          {!this.state.isLoading &&
           <DiscountList {...this.state.discounts}/>
          }
        </div>
        <div className={styles.map}>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `700px`}}/>}
            containerElement={<div style={{height: `800px`}}/>}
            mapElement={<div style={{height: `700px`, width: '700px'}}/>}
            {...this.state.discounts}
          />
        </div>

      </div>

      }
    </Fragment>
    )
  }
}


export default RandomDiscounts;

