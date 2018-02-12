import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import styles from './header.scss'
import LogoItem from '../LogoItem/LogoItem'
import SignUpModal from '../SignUpModal/SignUpModal'
import SignInModal from '../SignInModal/SignInModal'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
console.log(this.props)
    const userID = this.props.user.id
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
              <Link to="/"> Главная </Link>
              <Link to={`/profile/${userID}`}> Профиль </Link>
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
