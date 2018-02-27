import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'rc-checkbox/assets/index.css'
import TabPanelResults from './TabPanelResults'
import 'react-tabs/style/react-tabs.scss';

class SearchResultPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clinics: [],
      doctors: [],
      diagnostics:[],
      laboratories:[],
      discount:[]
    }
  }
  componentDidMount () {
    this.setState({
      doctors: this.props.searchResult.doctors,
      clinics: this.props.searchResult.clinics,
    })

  }

  render () {
    return (
      <div>
        <TabPanelResults {...this.state}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchResult
})

export default connect(mapStateToProps)(SearchResultPage)
