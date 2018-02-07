import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../../constants/test.json'
import 'rc-checkbox/assets/index.css'
import axios from 'axios';
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
    const ROOT_URL = "http://54.37.125.178:8080";
    axios.get(`${ROOT_URL}/doctors/getall`)
      .then(response => {
       console.log(response.data)
        let doctors = response.data;
        let th = this
        th.setState({
          doctors:doctors,
        })
      })
      .catch((error) => {
          console.log(error)
      });

    axios.get(`${ROOT_URL}/clinics/getall`)
      .then(response => {
        console.log(response.data)
        let clinics = response.data;
        let th = this
        th.setState({
          clinics:clinics,
        })
      })
      .catch(() => {

      });

    let th = this
    th.setState({
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
