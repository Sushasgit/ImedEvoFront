import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ForClinicForm from '../../components/ForClinicForm/ForClinicForm'

class ForClinic extends Component {
  render() {
    return (
     <Fragment>
       <Header/>
          <ForClinicForm/>
       <Footer/>
     </Fragment>
    );
  }
}

export default ForClinic;

