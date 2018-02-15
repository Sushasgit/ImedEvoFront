import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styles from '../../pages/Homepage/home-page.scss'
import logoStyles from './search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import SearchResult from '../../components/SearchResult/SearchResult'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class SearchResultPage extends Component {

  render () {
    return (
      <Fragment>
        <div>
          <div className={logoStyles.container__search_result}>
            <Header/>
            <SearchPanel />
          </div>
          <SearchResult/>
        </div>
        <Footer/>
      </Fragment>

    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // searchUserAction: bindActionCreators(getSearchResult, dispatch),
  }
}

function mapStateToProps (state) {
  return {
    searchResult: state.searchResult,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage)

