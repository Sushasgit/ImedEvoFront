import React, { Component } from 'react';
import RandomResultClinic from '../../components/RandomResults/RandomResultClinic'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import FilterClinicsPanel from '../../components/FilterPanel/FilterClinicsPanel'
import Header from '../../components/Header/Header'

class ClinicsPage extends Component {
  render() {
    return (
    <div>
      <div>
        <div className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <FilterClinicsPanel/>
        <RandomResultClinic/>
      </div>
    </div>
    );
  }
}

export default ClinicsPage;
