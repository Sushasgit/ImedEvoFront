import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DoctorList from '../SearchResultLists/DoctorList'
import ClinicList from '../SearchResultLists/ClinicList'
import DiagnosticsList from '../SearchResultLists/DiagnosticsList'
import LaboratoriesList from '../SearchResultLists/LaboratoriesList'
import DiscountList from '../SearchResultLists/DiscountList'
import Map from '../../components/Map/Map'

import styles from  './search-result.scss'
import FilterDoctorsPanel from '../FilterPanel/FilterDoctorsPanel'
import FilterClinicsPanel from '../FilterPanel/FilterClinicsPanel'

export default class TabPanelResults extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <section>
        <Tabs>
          <TabList>
            <Tab>Врачи</Tab>
            <Tab>Клиники</Tab>
            <Tab>Лаборатории</Tab>
            <Tab>Диагностические центры</Tab>
            <Tab>Акции</Tab>
          </TabList>

          <TabPanel>
            <FilterDoctorsPanel/>
            <article className={styles.h_col2_container}>
              <div style={{width:'50%'}}>
              <DoctorList {...this.props}/>
              </div>
              <div className={styles.map_container}>
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                  loadingElement={<div style={{height: `700px`}}/>}
                  containerElement={<div style={{height: `800px`}}/>}
                  mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                  {...this.props}
                />
              </div>
            </article>
          </TabPanel>

          <TabPanel>
            <FilterClinicsPanel/>
            <article className={styles.h_col2_container}>
              <div style={{width:'50%'}}>
            <ClinicList {...this.props}/>
            <div className={styles.map_container}>
            </div>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `700px`}}/>}
                containerElement={<div style={{height: `800px`}}/>}
                mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                {...this.props}
              />
            </div>
            </article>
          </TabPanel>

          <TabPanel>
            <article className={styles.h_col2_container}>
              <div style={{width:'50%'}}>
            <LaboratoriesList {...this.props}/>
              </div>
              <div className={styles.map_container}>
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                  loadingElement={<div style={{height: `700px`}}/>}
                  containerElement={<div style={{height: `800px`}}/>}
                  mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                  {...this.props}
                />
              </div>
            </article>
          </TabPanel>

          <TabPanel>
          <article className={styles.h_col2_container}>
            <div style={{width:'50%'}}>
            <DiagnosticsList {...this.props}/>
            </div>
            <div className={styles.map_container}>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `700px`}}/>}
                containerElement={<div style={{height: `800px`}}/>}
                mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                {...this.props}
              />
            </div>
          </article>
          </TabPanel>
          <TabPanel>
            <article className={styles.h_col2_container}>
              <div style={{width:'50%'}}>
              <DiscountList {...this.props}/>
              </div>
              <div className={styles.map_container}>
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                  loadingElement={<div style={{height: `700px`}}/>}
                  containerElement={<div style={{height: `800px`}}/>}
                  mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                  {...this.props}
                />
              </div>
            </article>
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

