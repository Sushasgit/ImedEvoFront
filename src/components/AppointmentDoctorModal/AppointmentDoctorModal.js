import React, { Component, Fragment } from 'react';
import AppointmentDoctorForm from './AppointmentDoctorForm';
import * as Icons from '../SvgIcons/SvgIcons.js';
import buttonStyles from '../../sass/components/button.scss';

class AppointmentDoctorModal extends Component {
    render() {
        return (
            <Fragment>
                <button
                    className={buttonStyles.btn_close_modal}
                    onClick={() => {this.props.hideModal()}}>

                    <Icons.IconCloseModal/>
                </button>

                    <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')}
                         alt="unsplash"/>
                    <AppointmentDoctorForm />
            </Fragment>
        )
    }
}

export default AppointmentDoctorModal;