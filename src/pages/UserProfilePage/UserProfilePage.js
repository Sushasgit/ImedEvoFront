import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/customComponents/Modal';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WidjetsClinic from '../../components/WidjetsClinic/WidjetsClinic';
import WidjetsDoctors from '../../components/WidjetsDoctors/WidjetsDoctors';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import CalendarComponent from './CalendarComponent';
import styles from '../../components/ClinicCard/clinic-profile.scss';
import ProfileData from './ProfileData';
import * as Icons from '../../components/SvgIcons/SvgIcons.js';
import * as  constants from '../../constants/constants';
import stylesModal from '../../components/SignUpModal/sign-up-modal.scss';
import * as actions from '../../actions/appointmentsGetAllUser';

class UserProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    componentDidMount() {
        this.props.getAppoinmentsUser()
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
        document.body.classList.remove(constants.MODAL_OPEN_CLASS)
    }

    openModal() {
        this.setState({
            isModalOpen: true,
        });
        document.body.classList.add(constants.MODAL_OPEN_CLASS)
    }

    renderAlert() {
        const {message} = this.props;
        if (message) {
            return (
                <div className="alert alert-danger">
                    <strong className={styles.message}>{message}</strong>
                </div>
            )
        }
    }

    render() {
        const user = this.props.user;
        const message = this.props.message;
        return (
            <Fragment>
                <div className={styles.h_background}>
                    <Modal
                        isModalOpen={this.state.isModalOpen}
                        closeModal={this.closeModal}>

                        <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')}
                             alt="unsplash"/>

                        <h2 className={styles.settings__title}> Настройки профиля</h2>

                        {message === '' && <SettingsForm user={user}/>}

                        {message !== '' && this.renderAlert()}
                        <button
                            className={stylesModal.close}
                            onClick={this.closeModal}>

                            <Icons.IconCloseModal/>
                        </button>
                    </Modal>

                    <Header/>

                    <div
                        style={{marginTop: '-101px'}}
                        className={styles.profile}>
                        <div className={styles.container_clinic_card}>
                            <section className={styles.clinic}>
                                <article className={styles.clinic__info}>
                                    <ProfileData user={user}/>
                                    <button onClick={this.openModal} className={styles.settings}>
                                        <Icons.IconEdit/>
                                    </button>
                                </article>
                            </section>

                            <section className={styles.clinic}>
                                <h2 className={styles.clinic__title}>Текущие записи</h2>
                                <CalendarComponent {...this.props}/>
                            </section>

                            <section className={styles.clinic}>
                                <section className={styles.clinic__feedback}>
                                    <h2 className={styles.clinic__title}>Здесь будут Ваши отзывы</h2>
                                    <div className={styles.feedback}>
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div className={styles.h_widjets}>
                            <div className={styles.top__rated}>
                                <h3 className={styles.widjet_info_title}>ТОП клиники:</h3>
                                <WidjetsClinic/>
                            </div>
                            <div className={styles.top__rated}>
                                <h3 className={styles.widjet_info_title}>ТОП врачей:</h3>
                                <WidjetsDoctors/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )

    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user,
        message: state.auth.message,
        events: state.events.events
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAppoinmentsUser: () => dispatch(actions.getAppoinmentsUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)

