import React, { Component } from 'react'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from '../SignUpModal/sign-up-modal.scss'
import { Field, Form } from 'react-redux-form'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import LogoItem from '../LogoItem/LogoItem'

class SignInUpModal extends Component {
  render () {
    return (
      <div className={styles.registration__content}>
        <Icons.CloseButton onClick={this.props.close}/>
        <div className={styles.registration__body}>
          <Form model="registrationUser">
            <h2 className={styles.registration__title}>Войти</h2>

            <Field model="registrationUser.email">
              <label>
                <input type="email" placeholder="Email"/>
              </label>
            </Field>

            <Field model="registrationUser.password">
              <label>
                <input type="password" placeholder="Пароль"/>
              </label>

            </Field>

            <Link to="/"> Забыли пароль? </Link>
            <div>
              <div className="col-sm-6 col-sm-offset-3">
                <input
                  className={styles.registration__signin_button}
                  type="submit"
                  value="Войти"
                  onClick={e => this.onRegistrationSubmit(e)}
                />
              </div>
            </div>
          </Form>
          <LogoItem/>
        </div>
      </div>
    )
  }
}

export default SignInUpModal
