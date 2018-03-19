import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as constants from '../../constants/constants';
import styles from '../ClinicCard/clinic-profile.scss';
import {history} from '../../history';
import DoctorProfileCard from './DoctorProfileCard';

class DoctorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
            doctorPersonalInfo: [],
        }
    }

    componentDidMount() {
        let id = this.props.match.params.doctorId;

        axios.get(`${constants.ROOT_URL}/doctors/${id}`)
            .then(response => {
                let doctor = response.data['doctor'];
                this.setState({
                    doctor: doctor,
                    doctorPersonalInfo: doctor.user
                })
            })
            .catch((error) => {
                console.log(error);
                history.push(`/notFound`);
            });
    }


    render() {
        return (
            <Fragment>
                <div className={styles.h_background}>
                    <Header/>
                    <DoctorProfileCard {...this.state.doctor}/>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default DoctorProfile;
