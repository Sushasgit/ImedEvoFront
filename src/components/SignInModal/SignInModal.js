import React, {Component, Fragment} from 'react'
import SignInForm from './SignInForm'
import buttonStyles from '../../sass/components/button.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'

class SignInModal extends Component {

    render() {
        return (
            <Fragment>
                <button
                    className={buttonStyles.btn_close_modal}
                    onClick={() => {
                        this.props.hideModal()
                    }}>

                    <Icons.IconCloseModal/>
                </button>
                <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
                <SignInForm/>
            </Fragment>
        )
    }
}

export default SignInModal;