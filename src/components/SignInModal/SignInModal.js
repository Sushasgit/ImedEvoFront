import React, { Component, Fragment } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
import Modal from 'react-responsive-modal'
import SignInForm from './SignInForm'
//import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import 'react-responsive-modal/lib/react-responsive-modal.css'
import 'react-responsive-modal/lib/css'

class SignInModal extends Component {
  constructor (props) {
    super(props)

    this.state =
      {
      open: false,
      }
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  render () {
    const {open} = this.state
    return (
      <Fragment>
        <button
          className={styles.login__button}
          onClick={this.onOpenModal}>
          Войти
        </button>

        <Modal
          styles={{
            width: '1200px'
          }}
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          {...this.props}
          animationDuration={1000}
          open={open} onClose={this.onCloseModal} little>

          <SignInForm/>
        </Modal>
      </Fragment>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!'
  }
  return errors
}

function mapStateToProps (state) {
  return {errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(SignInModal)