import React, {Component} from 'react';
import logoStyles from '../../pages/SearchResultPage/search-page.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import RandomLaboratoryContainer from '../../containers/RandomDoctorResultContainer/RandomLaboratoryContainer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class LaboratoriesPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className={logoStyles.container__search_result}>
                        <Header/>
                        <SearchPanel/>
                    </div>
                    <RandomLaboratoryContainer/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LaboratoriesPage;
