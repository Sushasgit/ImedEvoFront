import React, { Component, Fragment } from 'react'
import AppointmentForm from './AppointmentForm'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'
import * as  constants  from '../../constants/constants'

class AppointmentModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({clinic: nextProps.data})
  }

  closeModal () {
    this.setState({
      isModalOpen: false
    })
    document.body.classList.remove(constants.MODAL_OPEN_CLASS);
  }

  openModal () {
    this.setState({
      isModalOpen: true,
      originalBodyOverflow: document.body.style.overflow
    })
    document.body.classList.add(constants.MODAL_OPEN_CLASS);
  }

  render () {
    return (
      <Fragment>
        <button onClick={this.openModal} className={styles.appointment_button}>Записаться на прием</button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}>
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
          <AppointmentForm {...this.props}/>

          <button
            className={styles.close}
            onClick={this.closeModal}>
            <Icons.IconCloseModal/>
          </button>
        </Modal>
      </Fragment>
    )
  }
}

export default AppointmentModal;