import React, { Component, Fragment } from 'react'
import styles from '../ClinicCard/clinic-profile.scss'

class DoctorImage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            doctor: [],
            doctorPersonalInfo: [],
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            doctor: nextProps.data
        })
    }

    render () {
        const doctorInfo = this.state.doctor;
        console.log(doctorInfo);
        doctorInfo.image?console.log(doctorInfo.image.link):"";

        if(doctorInfo.image){
            return (
                <Fragment>
                   <img src={`${doctorInfo.image.link}`} alt="doctor-photo"/>
                </Fragment>
            )
        }else{
            return (
                <Fragment>
                    <img src={require('../../images/giphy.gif')} alt="loading"/>
                </Fragment>
            )

        }

    }
}

export default DoctorImage


































