import { connect } from 'react-redux';
import * as Actions from '../../actions/modalActions';
import SignInModal from '../../components/SignInModal/SignInModal';

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        data: state.data,
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (id) => {
            dispatch(Actions.showModal(id));
        },
        hideModal: () => {
            dispatch(Actions.hideModal());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);