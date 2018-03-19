import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import styles from './header.scss'
import LogoItem from '../LogoItem/LogoItem'
import { Link } from 'react-router-dom'
import * as helpers from '../../helpers/helpers'
import ModalRoot from '../../containers/ModalRoot/ModalRootContainer'
import * as actions from '../../actions/modalActions'
import buttonStyles from '../../sass/components/button.scss'
import helperStyles from '../../sass/helpers.scss'

class Header extends Component {

    render() {

        const userID = helpers.getId();
        return (
            <Fragment>
                <header className={styles.header__container}>
                    <LogoItem/>
                    <div className={styles.container__buttons}>
                        {!this.props.authenticated &&
                        <div>
                            <button
                                className={`${buttonStyles.btn} ${buttonStyles.btn_blue} ${helperStyles.mr_10}`}
                                onClick={() => this.props.showModal('isShowingSignInModal')}>
                                Вход
                            </button>

                            <button
                                className={`${buttonStyles.btn} ${buttonStyles.btn_orange} ${helperStyles.mr_10}`}
                                onClick={() => this.props.showModal('isShowingSignUpModal')}>
                                Регистрация
                            </button>
                            <ModalRoot/>
                        </div>
                        }
                        {this.props.authenticated &&
                        <div>
                            <Link className={styles.container__button_home} to="/"> Главная </Link>
                            <Link className={styles.container__button_profile}
                                  to={`/profile/${userID}`}> Профиль </Link>
                        </div>
                        }
                    </div>
                </header>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (id) => {
            dispatch(actions.showModal(id));
        },
        hideModal: () => {
            dispatch(actions.hideModal());
        },
    };
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user,
        modal: state.modal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
