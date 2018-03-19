import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ClinicRegistrationForm from '../../components/ClinicRegistrationForm/ClinicRegistrationForm';

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
