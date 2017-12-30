import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideModal, showModal } from '../../actions/modalActions';
import SingUpModal from '../../components/SignUpModal/SignUpModal';
import SingInModal from '../../components/SignInModal/SignInModal';

const MODAL_COMPONENTS = {
  SING_IN: SingInModal,
  REGISTRATION: SingUpModal,
};

class ModalRoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      close: false
    };

    this.onClose = this.onClose.bind(this);
    this.onChangeModal = this.onChangeModal.bind(this);
  }

  onClose() {
    if (this.props.dontClose) return;
    this.setState({ close: true });

    setTimeout(() => {
      this.props.hideModal();
      this.setState({ close: false });
    }, 200);
  }

  onChangeModal(e, name) {
    e.preventDefault();
    this.props.showModal(name);
  }

  render() {
    const { modalName, history } = this.props;

    if (!modalName) {
      return null;
    }
    const SpecificModal = MODAL_COMPONENTS[modalName];
    return (
      <div className={
          this.state.close ? 'modal-container close' : 'modal-container modal-registration modal-registration--background'
        }
      >
        <SpecificModal
          close={this.onClose}
          changeModal={this.onChangeModal}
          location={history.location}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    ...state.modalName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: bindActionCreators(hideModal, dispatch),
    showModal: bindActionCreators(showModal, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

