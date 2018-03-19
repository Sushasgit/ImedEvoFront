import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RandomLaboratories from '../../components/RandomResults/RandomLaboratories';
import * as actions from '../../actions/laboratoriesActions';


class RandomDoctorResultContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            laboratories: []
        }
    }

    componentDidMount() {
        this.props.getAllLaboratories()
    }

    render() {
        return (
            <Fragment>
                <RandomLaboratories {...this.props.allResults} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    allResults: state.allResults
});

function mapDispatchToProps(dispatch) {
    return {
        getAllLaboratories: () => dispatch(actions.getAllLaboratories()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDoctorResultContainer)

