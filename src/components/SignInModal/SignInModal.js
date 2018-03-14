import React, { Component, Fragment } from 'react'
import SignInForm from './SignInForm'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'
import * as  constants  from '../../constants/constants'
import buttonStyles from '../../sass/components/button.scss'

class SignInModal extends Component {

  render () {
    return (
      <Fragment>
          <button
              className={buttonStyles.btn_close_modal}
              onClick={() => {this.props.hideModal()}}>

              <Icons.IconCloseModal/>
          </button>
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
          <SignInForm/>
      </Fragment>
    )
  }
}



export default SignInModal;