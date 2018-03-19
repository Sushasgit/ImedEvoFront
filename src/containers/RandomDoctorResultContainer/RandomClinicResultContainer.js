import React, {Component, Fragment} from 'react'
import * as actions from '../../actions/clinicActions'
import {connect} from 'react-redux'
import styles from '../../components/FilterPanel/filter-panel.scss'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'
import 'rc-checkbox/assets/index.css'
import RandomResultClinic from '../../components/RandomResults/RandomResultClinic'

class RandomDoctorResultContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            clinics: [],
            doctors: [],
            orderRating: true,
            orderLastName: true,
        }
    }

    //TODO REFACTOR!!! Think about creating individual component for filters

    componentDidMount() {
        this.props.getAllClinics()
    }

    filterName() {
        this.setState(prevState => ({orderLastName: !prevState.orderLastName}));
        this.props.filterClinicName(this.props, this.state.orderLastName)
    }

    filterRating() {
        this.setState(prevState => ({orderRating: !prevState.orderRating}));
        this.props.filterClinicRating(this.props, this.state.orderRating)
    }

    render() {
        return (
            <Fragment>
                <nav className={styles.sort}>
                    <ul className={styles.filter}>
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
                                По названию
                                {this.state.orderLastName &&
                                <Icons.IconArrowDown/>
                                }
                                {!this.state.orderLastName &&
                                <Icons.IconArrowUp/>
                                }
                            </button>
                        </li>

                    </ul>
                </nav>
                <RandomResultClinic {...this.props.allResults} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    allResults: state.allResults
})

function mapDispatchToProps(dispatch) {
    return {
        getAllClinics: () => dispatch(actions.getAllClinics()),
        filterClinicName: (clinics, orderLastName) => dispatch(actions.filterClinicName(clinics, orderLastName)),
        filterClinicRating: (clinics, orderRating) => dispatch(actions.filterClinicRating(clinics, orderRating)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDoctorResultContainer)

