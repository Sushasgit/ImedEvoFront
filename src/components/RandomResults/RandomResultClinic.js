import React, { Component, Fragment } from 'react';
import Map from '../../components/Map/Map';
import ClinicList from '../SearchResultLists/ClinicList';
import styles from '../SearchResult/search-result.scss';
import 'rc-checkbox/assets/index.css';

class RandomResultClinic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            doctors: [],
            clinics: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            clinics: nextProps,
            isLoading: nextProps.isLoading
        })
    }

    render() {
        return (
            <Fragment>
                {this.state &&
                <div className={styles.h_col2_container}>
                    <div className={styles.random_results}>
                        {this.state.isLoading &&
                        <img src={require('../../images/loading.gif')} alt="loading"/>
                        }

                        {!this.state.isLoading &&
                        <ClinicList {...this.state.clinics}/>
                        }

                    </div>
                    <div className={styles.map}>
                        <Map
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
                            loadingElement={<div style={{height: `700px`}}/>}
                            containerElement={<div style={{height: `800px`}}/>}
                            mapElement={<div style={{height: `700px`, width: '700px'}}/>}
                            {...this.state.clinics}
                        />
                    </div>
                </div>
                }

            </Fragment>
        )
    }
}


export default RandomResultClinic;
