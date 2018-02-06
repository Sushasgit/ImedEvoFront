import React, { Component,Fragment } from 'react';
import styles from './header.scss'
import LogoItem from '../LogoItem/LogoItem'
import SignUpModal from '../SignUpModal/SignUpModal'
import SignInModal from '../SignInModal/SignInModal'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Fragment>
        <header className={styles.header__container}>
          <LogoItem/>
          <div className={styles.container__buttons}>
              <SignUpModal/>
              <SignInModal/>
          </div>
        </header>
      </Fragment>
    );
  }
}


export default Header;
