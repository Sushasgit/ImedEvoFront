import React, {Component} from 'react';
import styles from './filter-panel.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'
import {connect} from 'react-redux'

class FilterDoctorsPanel extends Component {

    render() {
        return (
            <nav className={styles.sort}>
                <ul className={styles.filter}>
                    <li><a href="#">Количество отзывов</a></li>
                    <li><a className="dropdown" href="/">Пол <Icons.IconArrowDown/></a>
                        <ul>
                            <label>
                                <input type="checkbox"/>
                                Все
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Женский
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Мужской
                            </label>
                        </ul>
                    </li>

                    <li>
                        <button className="dropdown" href="#">
                            Рейтинг
                            <Icons.IconArrowDown/>
                        </button>
                    </li>

                    <li>
                        <button className="dropdown" href="#">
                            Фамилии
                            <Icons.IconArrowDown/>
                        </button>

                    </li>


                    <li>
                        <button className="dropdown" href="#">
                            Популярность
                            <Icons.IconArrowDown/>
                        </button>
                    </li>

                    <li>
                        <button className="dropdown" href="#">
                            Стаж
                            <Icons.IconArrowDown/>
                        </button>
                    </li>

                    <li>
                        <label>Педиатр</label>
                        <input className={styles.filter_checkbox} type="checkbox"/>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {searchResult: state.searchResult}
};

export default connect(mapStateToProps)(FilterDoctorsPanel);
