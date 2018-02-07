import React, { Component } from 'react';
import RandomDiagnostics from '../../components/RandomResults/RandomDiagnostics'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Header from '../../components/Header/Header'

class DiagnosticsPage extends Component {
  render() {
    return (
      <div>
        <div  className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <RandomDiagnostics/>
      </div>
    );
  }
}

export default DiagnosticsPage;
