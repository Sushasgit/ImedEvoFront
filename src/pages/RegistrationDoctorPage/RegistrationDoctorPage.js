import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './regis-doctors-page.css'
import DoctorsRegistrationForm from '../../components/DoctorsRegistrationForm/DoctorsRegistrationForm'

class RegistrationDoctorPage extends Component {
  render() {
    return (
      <div>
        RegistrationDoctorPage
        <Header/>
        <DoctorsRegistrationForm/>
        <Footer/>
      </div>
    );
  }
}

export default RegistrationDoctorPage;

