import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import RandomResultDoctors from '../../components/RandomResults/RandomResultDoctors';
import * as actions from '../../actions/getAllActions';
import styles from '../../components/FilterPanel/filter-panel.scss';
import * as Icons from '../../components/SvgIcons/SvgIcons.js';

class RandomDoctorResultContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            clinics: [],
            doctors: [],
            orderRating: true,
            orderLastName: true,
            orderPrice: true,
            orderWorkExperience: true,
            isPediatrician: false
        }
    }

    //TODO REFACTOR!!! Think about creating individual component for filters

    componentDidMount() {
        this.props.getAllDoctors()
    }

    filterName() {
        this.setState(prevState => ({orderLastName: !prevState.orderLastName}));
        this.props.filterDoctors(this.props, this.state.orderLastName)
    }

    filterRating() {
        this.setState(prevState => ({orderRating: !prevState.orderRating}));
        this.props.filterDoctorsRating(this.props, this.state.orderRating)
    }

    filterPrice() {
        this.setState(prevState => ({orderPrice: !prevState.orderPrice}));
        this.props.filterDoctorsPrice(this.props, this.state.orderPrice)
    }

    filterExperience() {
        this.setState(prevState => ({orderWorkExperience: !prevState.orderWorkExperience}));
        this.props.filterDoctorsExperience(this.props, this.state.orderWorkExperience)
    }

    filterPediatrician(e) {
        let onlyPediatrician = e.target.checked;
        onlyPediatrician ? this.props.filterPediatrician(this.props, e.target.checked) : this.props.getAllDoctors()
    }

    render() {
        return (
            <Fragment>
                <nav className={styles.sort}>
                    <ul className={styles.filter}>
                        <li>
                            <button onClick={this.filterPrice.bind(this)}>
                                По стоимости
                                {this.state.orderPrice &&
                                <Icons.IconArrowDown/>
                                }
                                {!this.state.orderPrice &&
                                <Icons.IconArrowUp/>
                                }
                            </button>
                        </li>

                        <li>
                            <button onClick={this.filterRating.bind(this)} className="dropdown">
                                Рейтинг
                                {this.state.orderRating &&
                                <Icons.IconArrowDown/>
                                }
                                {!this.state.orderRating &&
                                <Icons.IconArrowUp/>
                                }
                            </button>
                        </li>

                        <li>
                            <button onClick={this.filterName.bind(this)} className="dropdown">
                                Фамилии
                                {this.state.orderLastName &&
                                <Icons.IconArrowDown/>
                                }
                                {!this.state.orderLastName &&
                                <Icons.IconArrowUp/>
                                }
                            </button>
                        </li>

                        <li>
                            <button onClick={this.filterExperience.bind(this)} className="dropdown">
                                Стаж
                                {this.state.orderWorkExperience &&
                                <Icons.IconArrowDown/>
                                }
                                {!this.state.orderWorkExperience &&
                                <Icons.IconArrowUp/>
                                }
                            </button>
                        </li>

                        <li>
                            <label>Работает с детьми</label>
                            <input
                                onChange={this.filterPediatrician.bind(this)}
                                className={styles.filter_checkbox}
                                type="checkbox"
                                defaultChecked={this.state.isPediatrician}
                            />
                        </li>
                    </ul>
                </nav>
                <RandomResultDoctors {...this.props.allResults} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    allResults: state.allResults
});

function mapDispatchToProps(dispatch) {
    return {
        getAllDoctors: () => dispatch(actions.getAllDoctors()),
        filterDoctors: (doctors, orderLastName) => dispatch(actions.filterDoctors(doctors, orderLastName)),
        filterDoctorsRating: (doctors, orderRating) => dispatch(actions.filterDoctorsRating(doctors, orderRating)),
        filterDoctorsPrice: (doctors, orderPrice) => dispatch(actions.filterDoctorsPrice(doctors, orderPrice)),
        filterDoctorsExperience: (doctors, workExperience) => dispatch(actions.filterDoctorsExperience(doctors, workExperience)),
        filterPediatrician: (doctors, isPediatrician) => dispatch(actions.filterPediatrician(doctors, isPediatrician)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDoctorResultContainer)

