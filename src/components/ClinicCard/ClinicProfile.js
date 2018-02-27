import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ProfileMap from '../Map/ProfileMap'
import styles from './clinic-profile.scss'
import RatingStars from '../customComponents/RatingStars'
import * as constants from '../../constants/constants'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors'
import ClinicInfoPanel from '../ClinicInfoPanel/ClinicInfoPanel'
import ActivityTable from './ActivityTable'
import { history } from '../../history';
import ClinicProfileData from './ClinicProfileData'


class ClinicProfile extends Component {
  constructor (props) {
    super(props)
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
          console.log(response.data)
          let clinic = response.data;
          let th = this
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
    let clinic = this.state
    return (
      <Fragment>
        <div>
        <div className={styles.h_background}>
          <Header/>
          <ClinicInfoPanel/>
          <ClinicProfileData {...this.state.clinic}/>
        </div>
        </div>
        <Footer/>
      </Fragment>
    )

  }
}

export default ClinicProfile
