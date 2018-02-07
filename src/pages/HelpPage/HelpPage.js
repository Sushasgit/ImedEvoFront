import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HelpForm from '../../components/HelpForm/HelpForm'

class HelpPage extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <HelpForm/>
        <Footer/>
      </Fragment>
    );
  }
}

export default HelpPage;
