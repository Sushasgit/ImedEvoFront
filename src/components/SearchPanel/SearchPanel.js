import React, { Component } from 'react'
import Input from '../customComponents/SearchInput'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from './search-panel.scss'
import generalStyle from '../../common.scss'
import { connect } from 'react-redux'
import userSearch from  '../../actions/searchActions'

class SearchPanel extends Component {
  state = {
    query: '',
    results: []
  }


  handleInputChange (e) {
    this.setState({
      query: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.userSearch(this.state.query)
  }

  render () {
    return (
      <div className={`${generalStyle.container} ${styles.search_box}`}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label style={{width: '100%'}}>
            <Input
              className={styles.search_box__input}
              placeholder="Врач, Клиника, Анализ, Процедура"
              onChange={this.handleInputChange.bind(this)}
            />
          </label>

          <button className={styles.search_box__btn}>
            <Icons.IconSearch/>
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {searchResult: state.searchResult}
}
export default connect(mapStateToProps, {userSearch})(SearchPanel);

