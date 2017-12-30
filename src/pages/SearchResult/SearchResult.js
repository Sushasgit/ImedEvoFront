import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header'
import { bindActionCreators } from 'redux';
import SearchPanel from '../../components/SearchPanel/SearchPanel'
// import {
//   getSearchResult,
// } from '../../actions/userAuthActions';

class SearchResult extends Component {

  componentDidMount(){
    getSearchResult()
  }
  render() {
    return (
      <div>
        <div className="container-search">
          <Header/>
          <SearchPanel/>
        </div>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchUserAction: bindActionCreators(getSearchResult, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

