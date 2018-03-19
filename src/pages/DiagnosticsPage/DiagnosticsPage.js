import React, {Component} from 'react';
import RandomDiagnosticContainer from '../../containers/RandomDoctorResultContainer/RandomDiagnosticContainer';
import logoStyles from '../../pages/SearchResultPage/search-page.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class DiagnosticsPage extends Component {
    render() {
        return (
            <div>
                <div className={logoStyles.container__search_result}>
                    <Header/>
                    <SearchPanel/>
                </div>
                <RandomDiagnosticContainer/>
                <Footer/>
            </div>
        );
    }
}

export default DiagnosticsPage;
