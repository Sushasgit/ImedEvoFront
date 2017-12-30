import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation-menu.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'

class NavigationMenu extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render () {
    return (
      <nav>
        <ul className={styles.navigation__menu}>
          <li>
            <Link to="/doctors">
              <Icons.IconDoctor/>
              Врачи
            </Link>
          </li>
          <li>
            <Link to="/clinics">
              <Icons.IconHospital/>
              Клиники
            </Link>
          </li>
          <li>
            <Link to="/laboratories">
              <Icons.IconMicroScope/>
              Лаборатории
            </Link>
          </li>
          <li>
            <Link to="/diagnostics">
              <Icons.IconHeart/>
              Диагностика
            </Link>
          </li>
          <li>
            <Link to="/sale">
              <Icons.IconSales/>
              Акции
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu
