import React, { Component } from 'react';
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import RandomLaboratories from '../../components/RandomResults/RandomLaboratories'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


class LaboratoriesPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div  className={logoStyles.container__search_result}>
            <Header/>
            <SearchPanel />
          </div>
          <RandomLaboratories/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default LaboratoriesPage;
