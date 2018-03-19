import React, {Component, Fragment} from 'react';
import Header from '../../components/Header/Header';
import styles from './not-find.scss';

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <section className={styles.not_found}>
                    <h4>404</h4>
                    <h2>Страница не найдена</h2>
                </section>
            </Fragment>
        );
    }
}

export default NotFound;
