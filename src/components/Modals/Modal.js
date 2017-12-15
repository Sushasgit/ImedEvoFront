import React, { Component } from 'react';
import './modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div className="modal-overlay-div" />
        <div className="modal-content-div"  onClick={this.onOverlayClick.bind(this)}>
          <div className="modal-dialog-div"c onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
