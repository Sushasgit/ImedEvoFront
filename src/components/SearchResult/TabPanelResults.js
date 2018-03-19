import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DoctorList from '../SearchResultLists/DoctorList';
import ClinicList from '../SearchResultLists/ClinicList';
import DiagnosticsList from '../SearchResultLists/DiagnosticsList';
import LaboratoriesList from '../SearchResultLists/LaboratoriesList';
import DiscountList from '../SearchResultLists/DiscountList';
import Map from '../../components/Map/Map';
import styles from './search-result.scss';


class TabPanelResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clinics: [],
            doctors: [],
            diagnostics: [],
            laboratories: [],
            discount: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            doctors: nextProps.searchResult.doctors,
            clinics: nextProps.searchResult.clinics,
            diagnostics: nextProps.searchResult.diagnostics,
            laboratories: nextProps.searchResult.laboratories,
            discount: nextProps.searchResult.discount,
        });
    }

    render() {
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
                        <article className={styles.h_col2_container}>
                            <div className={styles.h_col2_container_result}>
                                <DoctorList {...this.state}/>
                            </div>
                            <div className={styles.map_container}>
                                <Map
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{height: `700px`}}/>}
                                    containerElement={<div style={{height: `800px`}}/>}
                                    mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                                    {...this.state}
                                />
                            </div>
                        </article>
                    </TabPanel>

                    <TabPanel>
                        <article className={styles.h_col2_container}>
                            <div className={styles.h_col2_container_result}>
                                <ClinicList {...this.state}/>
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
                            <div className={styles.h_col2_container_result}>
                                <LaboratoriesList {...this.state}/>
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
                            <div className={styles.h_col2_container_result}>
                                <DiagnosticsList {...this.state}/>
                            </div>
                            <div className={styles.map_container}>
                                <Map
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{height: `700px`}}/>}
                                    containerElement={<div style={{height: `800px`}}/>}
                                    mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                                    {...this.state}
                                />
                            </div>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article className={styles.h_col2_container}>
                            <div className={styles.h_col2_container_result}>
                                <DiscountList {...this.state}/>
                            </div>
                            <div className={styles.map_container}>
                                <Map
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{height: `700px`}}/>}
                                    containerElement={<div style={{height: `800px`}}/>}
                                    mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                                    {...this.state}
                                />
                            </div>
                        </article>
                    </TabPanel>
                </Tabs>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchResult: state.searchResult,
        modal: state.modal,
    };
}

export default connect(mapStateToProps)(TabPanelResults);