import React, { Component } from 'react';
import './header.css'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { showModal } from '../../actions/modalActions';

class Header extends Component {
  constructor() {
    super();
    console.log(this.props)
    this.onSingIn = this.onSingIn.bind(this);
  }

  onSingIn(e, name) {
    e.preventDefault();
    this.props.openModal(name);
    console.log(this.props);
  }

  render() {
    return (
      <header className="container header">
          <div className="logo">
            <a href="">
              <img src={require('../../images/logo.png')} alt="logo"/>
              IMED
            </a>
          </div>

        <div className="container-buttons">
            <button  className="login-button" onClick={this.handleClick}>Login</button>
            <button  className="sign-up-button" onClick={e => this.onSingIn(e, 'REGISTRATION')}>Signup</button>
            <button className="language-button">Rus</button>
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

