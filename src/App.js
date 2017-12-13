import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage'
import {Route} from 'react-router';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage'
import ClinicsPage from './pages/ClinicsPage/ClinicsPage'
import LaboratoriesPage from './pages/LaboratoriesPage/LaboratoriesPage'
import DiagnosticsPage from './pages/DiagnosticsPage/DiagnosticsPage'
import SalePage from './pages/SalePage/SalePage'
import RegistrationDoctorPage from './pages/RegistrationDoctorPage/RegistrationDoctorPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/doctors" component={DoctorsPage} />
        <Route exact path="/clinics" component={ClinicsPage} />
        <Route exact path="/laboratories" component={LaboratoriesPage} />
        <Route exact path="/diagnostics" component={DiagnosticsPage} />
        <Route exact path="/sale" component={SalePage} />
        <Route exact path="/signupdoctor" component={RegistrationDoctorPage} />
      </div>
    );
  }
}

export default App;
