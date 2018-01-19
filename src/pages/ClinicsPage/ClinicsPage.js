import React, { Component } from 'react';
import RandomResultClinic from '../../components/SearchResult/RandomResultClinic'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'

class ClinicsPage extends Component {
  render() {
    return (
    <div>
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
        <RandomResultClinic/>
      </div>
    </div>
    );
  }
}

export default ClinicsPage;
