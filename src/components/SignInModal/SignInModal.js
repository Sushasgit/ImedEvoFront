import React, { Component, Fragment } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
import SignInForm from './SignInForm'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'


class SignInModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({
      isModalOpen: false
    })
    document.body.style.overflow = this.state.originalBodyOverflow;
  }

  openModal () {
    this.setState({
      isModalOpen: true,
      originalBodyOverflow: document.body.style.overflow
    })
    document.body.style.overflow = 'hidden';
  }
  render () {
    return (
      <Fragment>
        <button
          className={styles.login__button}
          onClick={this.openModal}>
          Войти
        </button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        >
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
          <SignInForm/>

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



export default SignInModal;