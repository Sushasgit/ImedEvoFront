import React, { Component, Fragment } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'

import SignUpForm from './SignUpForm'
import Modal from '../customComponents/Modal'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  './sign-up-modal.scss'



class SignUpModal extends Component {
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
  }

  openModal () {
    this.setState({
      isModalOpen: true
    })
  }

  render () {

    return (
      <Fragment>

        <button className={styles.sign_up_button} onClick={this.openModal}>Регистрация</button>
        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
         >
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
            <SignUpForm/>

          <button
            className={styles.close}
            style={{
            margin: 0,
            width: 'auto',
            marginTop: 10,
            backgroundColor:'transparent',
            position:'absolute',
            top:'-48px',
            right:'-60px',
            border:'none'
          }} onClick={this.closeModal}>

            <Icons.IconCloseModal/>
          </button>

        </Modal>


      </Fragment>
    )
  }
}


export default SignUpModal;