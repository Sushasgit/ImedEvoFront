import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { history } from '../../history';
import HomePage from '../../pages/Homepage/HomePage';
import DoctorsPage from '../../pages/DoctorsPage/DoctorsPage';
import ClinicsPage from '../../pages/ClinicsPage/ClinicsPage';
import LaboratoriesPage from '../../pages/LaboratoriesPage/LaboratoriesPage';
import DiagnosticsPage from '../../pages/DiagnosticsPage/DiagnosticsPage';
import SalePage from '../../pages/SalePage/SalePage';
import RegistrationDoctorPage from '../../pages/RegistrationDoctorPage/RegistrationDoctorPage';
import RegistrationClinicPage from '../../pages/RegistrationClinicPage/RegistrationClinicPage';
import SearchResultPage from '../../pages/SearchResultPage/SearchResultPage';
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage';
import DoctorProfile from '../../components/DoctorProfileCard/DoctorProfile';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import ClinicProfile from '../../components/ClinicCard/ClinicProfile';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import ServiceRules from '../../pages/ServiceRules/ServiceRules';
import BlogArticlePage from '../../pages/BlogArticlePage/BlogArticlePage';
import ForClinic from '../../pages/ForClinic/ForClinic';
import HelpPage from '../../pages/HelpPage/HelpPage';
import NotFound from '../../pages/NotFound/NotFound';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Contacts from '../../pages/Contacts/Contacts';
import Vacancy from '../../pages/Vacancy/Vacancy';
import Promotion from '../../pages/Promotion/Promotion';
import SpecialtySearchResultPage from '../../pages/SpecialtySearchResult/SpecialtySearchResult';
import RequireAuth from '../../components/Authentication/Authentication';
import ChangePassword from '../../components/ChangePassword/ChangePassword';
import * as actions from 'actions/checkUserAuth';

const token = localStorage.getItem('id_token');


class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {});
  }

  render() {
    if (token) {
      const id = localStorage.getItem('id_user');
       this.props.getUser(token, id);
    }

    const { alert } = this.props;
    return (
        <div>
          <div>
            <Router history={history}>
              <ScrollToTop>
              <div>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/doctors" component={DoctorsPage} />
                  <Route exact path="/clinics" component={ClinicsPage} />
                  <Route exact path="/clinics/:clinicId" component={ClinicProfile} />
                  <Route exact path="/doctors/:doctorId" component={DoctorProfile} />
                  <Route exact path="/laboratories" component={LaboratoriesPage} />
                  <Route exact path="/diagnostics" component={DiagnosticsPage} />
                  <Route exact path="/sale" component={SalePage} />
                  <Route exact path="/signupdoctor" component={RegistrationDoctorPage} />
                  <Route exact path="/signupclinic" component={RegistrationClinicPage} />
                  <Route exact path="/searchresult" component={SearchResultPage} />
                  <Route exact path="/searchresult/:doctorSpecialty" component={SpecialtySearchResultPage} />
                  <Route exact path="/profile/:userID" component={RequireAuth(UserProfilePage)}/>
                  <Route exact path="/blog" component={BlogArticlePage}/>
                  <Route exact path="/help" component={HelpPage}/>
                  <Route exact path="/forClinic" component={ForClinic}/>
                  <Route exact path="/forgot" component={ForgotPassword}/>
                  <Route exact path="/rules" component={ServiceRules}/>
                  <Route exact path="/privacy" component={PrivacyPolicy}/>
                  <Route exact path="/about" component={AboutUs}/>
                  <Route exact path="/contacts" component={Contacts}/>
                  <Route exact path="/vacancy" component={Vacancy}/>
                  <Route exact path="/promotion" component={Promotion}/>
                  <Route path="/forgot/resetpassword:token" component={ChangePassword}/>
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
              </ScrollToTop>
            </Router>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {

}


const connectedApp = connect(mapStateToProps,actions)(App);
export { connectedApp as App };