import React, { Component, Fragment } from 'react'
import styles from '../ClinicCard/clinic-profile.scss'

class DoctorProfileData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      doctor: [],
      doctorPersonalInfo: [],
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      doctor: nextProps.data
    })
  }
  render () {
    const doctorInfo = this.state.doctor
    return (

      <Fragment>
        <h2 className={styles.name}>
          <span>{`${doctorInfo.lastName} ${doctorInfo.firstName} ${doctorInfo.patronymic}`}</span>
        </h2>

      </Fragment>
    )

  }
}

export default DoctorProfileData;

































