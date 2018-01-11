import React, { Component } from 'react'
import data from '../../constants/test.json'
import Map from '../../components/Map/Map'
import DoctorList from './DoctorList'
import ClinicList from './ClinicList'
import { connect } from 'react-redux'
import styles from  './search-result.scss'
import Checkbox from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'
import FilterDoctorsPanel from '../FilterPanel/FilterDoctorsPanel'
import FilterClinicsPanel from '../FilterPanel/FilterClinicsPanel'

class SearchResultPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clinics: [],
      doctors: [],
      onlyClinics: false,
      onlyDoctors: false
    }
    this.handleInputClinicsChange = this.handleInputClinicsChange.bind(this)
    this.handleInputDoctorsChange = this.handleInputDoctorsChange.bind(this)
  }

  componentDidMount () {
    var th = this
    th.setState({
      clinics: data.clinics,
      doctors: data.doctors
    })
  }

  handleInputClinicsChange (e) {
    (!this.state.onlyClinics) ? this.setState({onlyClinics: true,}) : this.setState({onlyClinics: false,})
    console.log('clinics' + this.state.onlyClinics)
  }

  handleInputDoctorsChange (e) {
    (!this.state.onlyDoctors) ? this.setState({onlyDoctors: true,}) : this.setState({onlyDoctors: false,})
    console.log('doctors' + this.state.onlyDoctors)
  }

  render () {
    const onlyClinics = this.state.onlyClinics
    const onlyDoctors = this.state.onlyDoctors
    return (
      <div>
        <div className={styles.filter}>

          <section className={styles.filters}>
            <form style={{width: '29%'}}>
              <h2 className={styles.title}>Показать:</h2>
              <label>
                <Checkbox
                  onChange={this.handleInputDoctorsChange}
                />
                Только врачи
              </label>
              <label>
                <Checkbox
                  onChange={this.handleInputClinicsChange}
                />
                Только клиники
              </label>
            </form>

            {onlyDoctors && !onlyClinics &&
            <div style={{display: 'flex', alignItems: 'center', width: '60%'}}>
              <h2 className={styles.title}>Сортировать по:</h2>
              <FilterDoctorsPanel/>
            </div>
            }
            {onlyClinics && !onlyDoctors &&
            <div style={{display: 'flex', alignItems: 'center', width: '60%'}}>
              <h2 className={styles.title}>Сортировать по:</h2>
              <FilterClinicsPanel/>
            </div>
            }

            {!onlyDoctors && !onlyClinics &&
            <p className={styles.filter__item}>По вашему запросу найдено
              : {this.state.doctors.length + ' врачей и ' + this.state.clinics.length + ' клиник'}</p>
            }
            {onlyDoctors && onlyClinics &&
            <p className={styles.filter__item}>По вашему запросу найдено
              : {this.state.doctors.length + ' врачей и ' + this.state.clinics.length + ' клиник'}</p>
            }
          </section>
        </div>
        <div className={styles.result}>
          <div className={styles.result__item}>
            {!onlyDoctors &&
            <ClinicList {...this.state}/>
            }
            {!onlyClinics &&
            <DoctorList {...this.state}/>
            }
            {!onlyClinics && !onlyDoctors &&
            <div>
              <DoctorList {...this.state}/>
              <ClinicList {...this.state}/>
            </div>
            }
            {onlyClinics && onlyDoctors &&
            <div>
              <DoctorList {...this.state}/>
              <ClinicList {...this.state}/>
            </div>
            }
          </div>

          <div className={styles.map}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
              loadingElement={<div style={{height: `700px`}}/>}
              containerElement={<div style={{height: `800px`}}/>}
              mapElement={<div style={{height: `700px`, width: '700px'}}/>}
              {...this.state}
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  someProp: state.someProp
})

export default connect(mapStateToProps)(SearchResultPage)
