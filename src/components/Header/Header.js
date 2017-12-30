import React, { Component } from 'react';
import styles from './header.scss'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { showModal } from '../../actions/modalActions';
import LogoItem from '../LogoItem/LogoItem'

class Header extends Component {
  constructor(props) {
    super(props);

    this.onSingIn = this.onSingIn.bind(this);
  }

  onSingIn(e, name) {
    e.preventDefault();
    this.props.openModal(name);
    console.log(this.props);
    console.log(this.props.openModal(name))
  }

  render() {
    return (
      <header className='container'>
        <LogoItem/>
        <div className={styles.container__buttons}>
            <button  className={styles.login__button} onClick={this.handleClick}>Войти</button>
            <button  className={styles.sign_up_button} onClick={e => this.onSingIn(e,'REGISTRATION')}>Регистрация</button>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    // user: state.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: bindActionCreators(showModal, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
