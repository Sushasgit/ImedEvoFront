import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './reg-clinic.scss'
import ClinicRegistrationForm from '../../components/ClinicRegistrationForm/ClinicRegistrationForm'
import LogoItem from '../../components/LogoItem/LogoItem'

class RegistrationClinicPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ClinicRegistrationForm/>
        <Footer/>
      </div>

    );
  }
}

export default RegistrationClinicPage;
