import React, { Component } from 'react';

class LogoItem extends Component {

  render() {
    return (
        <div className="logo">
          <a href="">
            <img src={require('../../images/logo.png')} alt="logo"/>
            IMED
          </a>
        </div>
    );
  }
}


export default LogoItem;

