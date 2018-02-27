import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import styles from './header.scss'
import LogoItem from '../LogoItem/LogoItem'
import SignUpModal from '../SignUpModal/SignUpModal'
import SignInModal from '../SignInModal/SignInModal'
import { Link } from 'react-router-dom'
import * as helpers from '../../helpers/helpers'

class Header extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    const userID = helpers.getId()
    return (
      <Fragment>

        <header className={styles.header__container}>
          <LogoItem/>
          <div className={styles.container__buttons}>
            {!this.props.authenticated &&
              <div>
                <SignUpModal/>
                <SignInModal/>
              </div>
            }
            {this.props.authenticated &&
            <div>
              <Link className={styles.container__button_home} to="/"> Главная </Link>
              <Link className={styles.container__button_profile} to={`/profile/${userID}`}> Профиль </Link>
            </div>
            }
          </div>
        </header>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user:state.auth.user
  };
}

export default connect(mapStateToProps)(Header);
