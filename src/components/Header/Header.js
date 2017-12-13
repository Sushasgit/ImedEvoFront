import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
          <div className="logo">
            <a href="#">
              <img src={require('../../images/logo.png')} alt="logo"/>
              IMED
            </a>
          </div>

        <div className="container-buttons">
            <button className="login-button">Login</button>

            <button className="language-button">Rus</button>
        </div>

      </header>
    );
  }
}

export default Header;