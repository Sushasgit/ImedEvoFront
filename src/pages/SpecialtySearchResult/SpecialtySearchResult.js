import React, { Component, Fragment } from 'react'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SpecialityResultSearch from '../../components/SpecialityResultSearch/SpecialityResultSearch'
import axios from 'axios';
import * as constants from '../../constants/constants'

class SpecialtySearchResultPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clinics:[],
      doctors: [],
    }
  }

  //TODO REFACTOR!! Need differents API for request and it have to allow English (Change structure components)
  //TODO IMPORTANT TO REFACTOR

  componentDidMount () {
    let doctorSpecialty = this.props.match.params.doctorSpecialty;
    console.log(doctorSpecialty)
    if(doctorSpecialty === 'family-doctor' ) {
      axios.get(`${constants.ROOT_URL}/search/byanyparams?params=Уролог`)
        .then(response => {
          this.setState({
            doctors: response.data.doctors,
          })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    else if (doctorSpecialty === 'cardiologist' ) {
      axios.get(`${constants.ROOT_URL}/search/byanyparams?params=Кардиолог`)
        .then(response => {
          this.setState({
            doctors: response.data.doctors,
          })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    else if (doctorSpecialty === 'pediatrician' ) {
      axios.get(`${constants.ROOT_URL}/doctors/getall`)
        .then(response => {
          this.setState({
            doctors:response.data.filter(item => {return item.pediatrician === true;})
          })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    else if (doctorSpecialty === 'dantist' ) {
      axios.get(`${constants.ROOT_URL}/search/byanyparams?params=Стоматолог`)
        .then(response => {
          this.setState({
            doctors: response.data.doctors,
          })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    else if (doctorSpecialty === 'ginecologiest' ) {
      axios.get(`${constants.ROOT_URL}/search/byanyparams?params=Гинеколог`)
        .then(response => {
          this.setState({
            doctors: response.data.doctors,
          })
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }

  render () {
    return (
      <Fragment>
        <div className={logoStyles.container__search_result}>
          <Header/>
          <SearchPanel />
        </div>
        <SpecialityResultSearch {...this.state}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default SpecialtySearchResultPage;
