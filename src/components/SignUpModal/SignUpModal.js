import React, { Component, Fragment } from 'react'
import SignUpForm from './SignUpForm'
import * as Icons from '../SvgIcons/SvgIcons.js'
import buttonStyles from '../../sass/components/button.scss'

class SignUpModal extends Component {

    render () {
        return (
            <Fragment>
                <button
                    className={buttonStyles.btn_close_modal}
                    onClick={() => {this.props.hideModal()}}>

                    <Icons.IconCloseModal/>
                </button>
                <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
                <SignUpForm/>
            </Fragment>
        )
    }
}



export default SignUpModal;