import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ProfileMap from '../Map/ProfileMap'
import RatingStars from '../customComponents/RatingStars'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors'
import ClinicInfoPanel from '../ClinicInfoPanel/ClinicInfoPanel'
import DoctorProfileData from './DoctorProfileData'
import * as constants from '../../constants/constants'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'
import styles from '../ClinicCard/clinic-profile.scss'
import { history } from '../../history';
import ClinicProfileData from '../ClinicCard/ClinicProfileData'
import DoctorProfileCard from './DoctorProfileCard'


class DoctorProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      doctor: [],
      doctorPersonalInfo:[],
    }
  }

  componentDidMount () {
    let id = this.props.match.params.doctorId

      axios.get(`${constants.ROOT_URL}/doctors/${id}`)
        .then(response => {
          let doctor = response.data['doctor'];
          this.setState({
            doctor: doctor,
            doctorPersonalInfo: doctor.user
          })
        })
        .catch((error) => {
          console.log(error)
          history.push(`/notFound`);
        });
    }


  render () {
    return (
      <Fragment>
        <div className={styles.h_background}>
          <Header/>
          <ClinicInfoPanel/>
          <DoctorProfileCard {...this.state.doctor}/>
          </div>
        <Footer/>
      </Fragment>
    )

  }
}

export default DoctorProfile;
