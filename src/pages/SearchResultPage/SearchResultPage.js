import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../pages/Homepage/home-page.scss'
import logoStyles from './search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import SearchResult from '../../components/SearchResult/SearchResult'

// import {
//   getSearchResult,
// } from '../../actions/userAuthActions';

class SearchResultPage extends Component {

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
          <SearchResult/>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // searchUserAction: bindActionCreators(getSearchResult, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);

