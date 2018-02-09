import React, { Component } from 'react';
import RandomResultDoctors from '../../components/RandomResults/RandomResultDoctors'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import FilterDoctorsPanel from '../../components/FilterPanel/FilterDoctorsPanel'
import Header from '../../components/Header/Header'

class DoctorsPage extends Component {
  render() {
    return (
      <div>
        <div  className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <FilterDoctorsPanel/>
       <RandomResultDoctors/>
      </div>
    );
  }
}

export default DoctorsPage;
