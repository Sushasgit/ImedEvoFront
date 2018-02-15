import React, { Component,Fragment } from 'react'
import RandomDoctorResultContainer from '../../containers/RandomDoctorResultContainer/RandomDoctorResultContainer'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class DoctorsPage extends Component {
  render () {
    return (
      <Fragment>
        <div className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <RandomDoctorResultContainer/>
        <Footer/>
      </Fragment>
    )
  }
}

export default DoctorsPage;
