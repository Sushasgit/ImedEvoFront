import React, { Component, Fragment } from 'react';
import AppointmentFormClinic from './AppointmentFormClinic'
import styles from './appointment-form.scss'

class ClinicAppointment extends Component {
  render() {
    return (
   <section className={styles.appointment_form}>
     <h2 className={styles.appointment_form__title}>Записаться на прием</h2>
     <AppointmentFormClinic/>
   </section>
    );
  }
}

export default ClinicAppointment;
