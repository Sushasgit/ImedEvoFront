import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navigation-menu.css'
import * as Icons from '../SvgIcons/SvgIcons.js'

class NavigationMenu extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      opened: false
    }
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render () {
    const { opened } = this.state;
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

        <div className="navNarrow">
          <Icons.MenuButton className="icon" onClick={this.toggleBox}/>
          {opened && (
            <div className="narrowLinks">

              <Link to="/doctors">
                <img src={require('../../images/doctors-icon.png')} alt="doctors-icon"/>
                Врачи
              </Link>

              <Link to="/clinics">
                <img src={require('../../images/clinics-icon.png')} alt="clinics-icon"/>
                Клиники
              </Link>

              <Link to="/laboratories">
                <img src={require('../../images/laboratories-icon.png')} alt="laboratories-icon"/>
                Лаборатории
              </Link>

              <Link to="/diagnostics">
                <img src={require('../../images/diagnostics-icon.png')} alt="diagnostics-icon"/>
                Диагностика
              </Link>

              <Link to="/sale">
                <img src={require('../../images/sale-icons.png')} alt="sale-icon"/>
                Акции
              </Link>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default NavigationMenu
