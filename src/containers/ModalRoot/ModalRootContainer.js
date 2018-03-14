import {connect} from 'react-redux';
import * as Actions from '../../actions/modalActions';
import ModalRoot from './ModalRoot';

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        data: state.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
