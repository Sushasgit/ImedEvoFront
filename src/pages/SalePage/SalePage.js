import React, { Component } from 'react';
import RandomDiscountsContainer from '../../containers/RandomDoctorResultContainer/RandomDiscountsContainer'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Header from '../../components/Header/Header'

class DiagnosticsPage extends Component {
  render() {
    console.log(this.state)
    return (
      <div>
        <div  className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <RandomDiscountsContainer/>
      </div>
    );
  }
}

export default DiagnosticsPage;
