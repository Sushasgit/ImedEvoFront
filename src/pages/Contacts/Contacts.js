import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Contacts extends Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <h2>Контакты</h2>
        <Footer/>
      </Fragment>
    )
  }
}

export default Contacts;
