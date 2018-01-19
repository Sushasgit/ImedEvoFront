import React, { Component } from 'react';
import styles from './logoitem.scss'

class LogoItem extends Component {

  render() {
    return (
        <div className={styles.logo}>
          <a href="">
            <img src={require('../../images/logo.png')} alt="logo"/>
            IMED
          </a>
        </div>
    );
  }
}


export default LogoItem;

