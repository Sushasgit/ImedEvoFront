import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import './navigation-menu.css'

class NavigationMenu extends Component {
  render() {
    return (
      <nav>
        <ul className="navigation-menu">
          <li>
            <Link to="/doctors">
              <img src={require('../../images/doctors-icon.png')} alt="doctors-icon"/>
              Врачи
            </Link>
          </li>
          <li>
            <Link to="/clinics">
              <img src={require('../../images/clinics-icon.png')} alt="clinics-icon"/>
              Клиники
            </Link>
          </li>
          <li>
            <Link to="/laboratories">
              <img src={require('../../images/laboratories-icon.png')} alt="laboratories-icon"/>
              Лаборатории
            </Link>
          </li>
          <li>
            <Link to="/diagnostics">
              <img src={require('../../images/diagnostics-icon.png')} alt="diagnostics-icon"/>
              Диагностика
            </Link>
          </li>
          <li>
            <Link to="/sale">
              <img src={require('../../images/sale-icons.png')} alt="sale-icon"/>
              Акции
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationMenu;