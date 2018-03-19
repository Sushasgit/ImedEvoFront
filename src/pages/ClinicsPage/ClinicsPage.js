import React, {Component} from 'react';
import RandomClinicResultContainer from '../../containers/RandomDoctorResultContainer/RandomClinicResultContainer';
import logoStyles from '../../pages/SearchResultPage/search-page.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class ClinicsPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className={logoStyles.container__search_result}>
                        <Header/>
                        <SearchPanel/>
                    </div>
                    <RandomClinicResultContainer/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ClinicsPage;
