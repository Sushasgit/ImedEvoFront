import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import './regis-doctors-page.scss';
import DoctorsRegistrationForm from '../../components/DoctorsRegistrationForm/DoctorsRegistrationForm';
import LogoItem from '../../components/LogoItem/LogoItem';

class RegistrationDoctorPage extends Component {
    render() {
        return (
            <div>
                <div className="h-background">
                    <div className="container-search--doctors">
                        <LogoItem/>
                    </div>
                </div>
                <DoctorsRegistrationForm/>
                <Footer/>
            </div>

        );
    }
}

export default RegistrationDoctorPage;

