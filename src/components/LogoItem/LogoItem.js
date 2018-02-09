import React, { Component } from 'react';
import styles from './logoitem.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'
import { Link } from 'react-router-dom'

class LogoItem extends Component {

  render() {
    return (
        <div className={styles.logo}>
          <Icons.IconLogo/>
          <Link to="/">
            IMED
          </Link>
        </div>
    );
  }
}


export default LogoItem;

