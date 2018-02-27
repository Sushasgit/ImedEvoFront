import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './modal.scss'

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={styles.outerStyle} style={{display: this.props.isModalOpen ? 'block' : 'none'}}>
      <div className={styles.overlay}  onClick={this.props.closeModal}/>
      <button className={styles.close} onClick={this.props.closeModal}/>
      <div className={styles.modal} >
        {this.props.children}
      </div>
    </div>)
  }
}



Modal.PropTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  style:PropTypes.shape({
    modal: PropTypes.object,
    overlay: PropTypes.object
  })
};

export default Modal;