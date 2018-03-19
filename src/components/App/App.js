import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { history } from '../../history';
import RequireAuth from '../../components/Authentication/Authentication';
import DynamicImport from '../../components/DynamicImport/DynamicImport'
import * as actions from '../../actions/checkUserAuth';
import styles from '../../common.scss';

const token = localStorage.getItem('id_token');


const HomePage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "homepage" */'../../pages/Homepage/HomePage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const DoctorsPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "doctorspage" */'../../pages/DoctorsPage/DoctorsPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ClinicsPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ClinicsPage" */'../../pages/ClinicsPage/ClinicsPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ClinicProfile = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ClinicProfile" */'../../components/ClinicCard/ClinicProfile')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const DoctorProfile = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "DoctorProfile" */'../../components/DoctorProfileCard/DoctorProfile')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const LaboratoriesPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "LaboratoriesPage" */'../../pages/LaboratoriesPage/LaboratoriesPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const DiagnosticsPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "DiagnosticsPage" */'../../pages/DiagnosticsPage/DiagnosticsPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const SalePage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "SalePage" */'../../pages/SalePage/SalePage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const SearchResultPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "SearchResultPage" */'../../pages/SearchResultPage/SearchResultPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const SpecialtySearchResultPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "SearchResultPage" */'../../pages/SpecialtySearchResult/SpecialtySearchResult')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const UserProfilePage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "UserProfilePage" */'../../pages/UserProfilePage/UserProfilePage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const BlogArticlePage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "BlogArticlePage" */'../../pages/BlogArticlePage/BlogArticlePage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const HelpPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "HelpPage" */'../../pages/HelpPage/HelpPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ForClinic = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ForClinic" */'../../pages/ForClinic/ForClinic')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ForgotPassword = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ForgotPassword" */'../../components/ForgotPassword/ForgotPassword')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ServiceRules = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ServiceRules" */'../../pages/ServiceRules/ServiceRules')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const PrivacyPolicy = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "PrivacyPolicy" */'../../pages/PrivacyPolicy/PrivacyPolicy')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const AboutUs = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "AboutUs" */'../../pages/AboutUs/AboutUs')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const Contacts = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "Contacts" */'../../pages/Contacts/Contacts')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const Promotion = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "Promotion" */'../../pages/Vacancy/Vacancy')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const Vacancy = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "Vacancy" */'../../pages/Vacancy/Vacancy')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const ChangePassword = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "ChangePassword" */'../../components/ChangePassword/ChangePassword')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const NotFound = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "NotFound" */'../../pages/NotFound/NotFound')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const RegistrationDoctorPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "RegistrationDoctorPage" */'../../pages/RegistrationDoctorPage/RegistrationDoctorPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

const RegistrationClinicPage = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "RegistrationClinicPage" */'../../pages/RegistrationClinicPage/RegistrationClinicPage')}>
        {(Component) => Component === null
            ? <img className={styles.loading} src={require('../../images/loading.gif')} alt='loading'/>
            : <Component {...props} />}
    </DynamicImport>
);

class App extends React.Component {

  constructor(props) {
    super(props);
    history.listen((location, action) => {});
  }

  render() {
    if (token) {
        console.log('test')
      const id = localStorage.getItem('id_user');
       this.props.getUser(token, id);
    }

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


const connectedApp = connect(mapStateToProps, actions)(App);
export { connectedApp as App };