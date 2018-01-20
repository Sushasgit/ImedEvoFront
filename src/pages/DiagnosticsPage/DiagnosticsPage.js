import React, { Component } from 'react';
import RandomDiagnostics from '../../components/RandomResults/RandomDiagnostics'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'

class DiagnosticsPage extends Component {
  render() {
    return (
      <div>
        <div  className={logoStyles.container__search_result}>
          <div className={logoStyles.logo__container}>
            <a style={{paddingBottom:'50px'}} className={logoStyles.logo} href="">
              <img src={require('../../images/logo.png')} alt="logo"/>
              IMED
            </a>
          </div>
          <SearchPanel />
        </div>
        <RandomDiagnostics/>
      </div>
    );
  }
}

export default DiagnosticsPage;
