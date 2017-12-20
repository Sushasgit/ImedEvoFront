import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/Homepage/HomePage';
import {Route} from 'react-router';
import { Router } from 'react-router';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
import ClinicsPage from './pages/ClinicsPage/ClinicsPage';
import LaboratoriesPage from './pages/LaboratoriesPage/LaboratoriesPage';
import DiagnosticsPage from './pages/DiagnosticsPage/DiagnosticsPage';
import SalePage from './pages/SalePage/SalePage';
import RegistrationDoctorPage from './pages/RegistrationDoctorPage/RegistrationDoctorPage';
import ModalRoot from './components/Modals/Modal';


class App extends Component {

  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/doctors" component={DoctorsPage} />
            <Route exact path="/clinics" component={ClinicsPage} />
            <Route exact path="/laboratories" component={LaboratoriesPage} />
            <Route exact path="/diagnostics" component={DiagnosticsPage} />
            <Route exact path="/sale" component={SalePage} />
            <Route exact path="/signupdoctor" component={RegistrationDoctorPage} />
            <ModalRoot {...this.props} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
