import React, { Component, Fragment } from 'react'
import axios from 'axios';
import styles from './clinic-profile.scss'
import * as constants from '../../constants/constants'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { history } from '../../history';
import ClinicProfileData from './ClinicProfileData'


class ClinicProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clinic: [],
      coordinatesLatitude:null,
      coordinatesLongitude: null,
    }
  }

  componentDidMount () {
    let id = this.props.match.params.clinicId;
      axios.get(`${constants.ROOT_URL}/clinics/${id}`)
        .then(response => {
          console.log(response.data);
          let clinic = response.data;
          let th = this;
          th.setState({
            clinic: clinic,
            coordinatesLatitude: parseFloat(clinic.coordinatesLatitude),
            coordinatesLongitude: parseFloat(clinic.coordinatesLongitude)
          })
        })
        .catch((error) => {
          history.push(`/notFound`);
        });

  }

  render () {
    //TODO CREATE WIDJETS (top clinic and doctors)
    //TODO Change image when it will return from server
    return (
      <Fragment>
        <div>
        <div className={styles.h_background}>
          <Header/>
          <ClinicProfileData {...this.state.clinic}/>
        </div>
        </div>
        <Footer/>
      </Fragment>
    )

  }
}

export default ClinicProfile
