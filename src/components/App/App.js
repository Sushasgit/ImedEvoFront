import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../history';
import { alertActions } from '../../actions/alertActions';
//import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import HomePage from '../../pages/Homepage/HomePage';
import DoctorsPage from '../../pages/DoctorsPage/DoctorsPage';
import ClinicsPage from '../../pages/ClinicsPage/ClinicsPage';
import LaboratoriesPage from '../../pages/LaboratoriesPage/LaboratoriesPage';
import DiagnosticsPage from '../../pages/DiagnosticsPage/DiagnosticsPage';
import SalePage from '../../pages/SalePage/SalePage';
import RegistrationDoctorPage from '../../pages/RegistrationDoctorPage/RegistrationDoctorPage';
import SearchResultPage from '../../pages/SearchResultPage/SearchResultPage';
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage';
import ClinicProfile from '../../components/ClinicCard/ClinicProfile';
import BlogArticlePage from '../../pages/BlogArticlePage/BlogArticlePage';
import NotFound from '../../pages/NotFound/NotFound';


class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {

      // dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
        <div>
          <div>
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <div>
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/doctors" component={DoctorsPage} />
                <Route exact path="/clinics" component={ClinicsPage} />
                <Route exact path="/clinics/:clinicId" component={ClinicProfile} />
                <Route exact path="/laboratories" component={LaboratoriesPage} />
                <Route exact path="/diagnostics" component={DiagnosticsPage} />
                <Route exact path="/sale" component={SalePage} />
                <Route exact path="/signupdoctor" component={RegistrationDoctorPage} />
                <Route exact path="/searchresult" component={SearchResultPage} />
                <Route exact path="/profile/:userID" component={UserProfilePage} />
                <Route exact path="/article" component={BlogArticlePage}/>
                <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };