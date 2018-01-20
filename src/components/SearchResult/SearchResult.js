import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../../constants/test.json'
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
    var th = this
    th.setState({
      clinics: data.clinics,
      doctors: data.doctors,
      diagnostics:data.diagnostics,
      laboratories:data.laboratories,
      discount:data.discounts
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <TabPanelResults {...this.state}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  someProp: state.someProp
})

export default connect(mapStateToProps)(SearchResultPage)
