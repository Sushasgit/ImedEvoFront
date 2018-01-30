import React, { Component, Fragment } from 'react';
import ClinicAppointment from './ClinicAppointment'
import ClinicSchedule from './ClinicSchedule'
import ClinicNews from './ClinicNews'
import styles from './panel-info.scss'

class ClinicInfoPanel extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.panel_info}>
          <ClinicNews/>
          <ClinicSchedule/>
          <ClinicAppointment/>
        </div>
      </Fragment>
    );
  }
}

export default ClinicInfoPanel;
