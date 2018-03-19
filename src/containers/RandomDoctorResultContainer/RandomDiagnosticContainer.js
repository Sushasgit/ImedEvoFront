import React, {Component, Fragment} from 'react';
import RandomDiagnostics from '../../components/RandomResults/RandomDiagnostics';
import * as actions from '../../actions/diagnosticsActions';
import {connect} from 'react-redux';

class RandomDiagnosticContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            diagnostics: []
        }
    }

    componentDidMount() {
        this.props.getAllDiagnostics()
    }

    render() {
        return (
            <Fragment>
                <RandomDiagnostics {...this.props.allResults} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    allResults: state.allResults
});

function mapDispatchToProps(dispatch) {
    return {
        getAllDiagnostics: () => dispatch(actions.getAllDiagnostics()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDiagnosticContainer)

