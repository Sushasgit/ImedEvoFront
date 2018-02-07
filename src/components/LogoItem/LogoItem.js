import React, { Component } from 'react';
import styles from './logoitem.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'

class LogoItem extends Component {

  render() {
    return (
        <div className={styles.logo}>
          <Icons.IconLogo/>
          <a href="">
            IMED
          </a>
        </div>
    );
  }
}


export default LogoItem;

