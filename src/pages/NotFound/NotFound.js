import React, { Component } from 'react';
import Header from '../../components/Header/Header'

class NotFound extends Component {
  render() {
    console.log(this.state)
    return (
      <div>
       <Header/>
        <h4>404</h4>
        <h2>Страница не найдена</h2>
      </div>
    );
  }
}

export default NotFound;
