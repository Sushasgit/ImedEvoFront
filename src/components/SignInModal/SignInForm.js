import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
import { Link } from 'react-router-dom'
import styles from  '../SignUpModal/sign-up-modal.scss'

const renderInput = (field) => {
  const {label, type, input, meta: {error, touched}} = field

  return (
    <div>
      <label>{label}:</label>
      <input
        {...input}
        type={type}
        className="form-control"/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  )
}

class SignInForm extends Component {
  constructor (props) {
    super(props)
  }

  handleFormSubmit ({email, password}) {
    this.props.signinUser({email, password})
  }

  renderAlert () {
    const {errorMessage} = this.props
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>{errorMessage}
        </div>
      )
    }
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <section className={styles.signup}>
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>

            <Field
              name="password"
              type="password"
              component={renderInput}
              label="Пароль"/>

            {this.renderAlert()}
            <button action="submit" className={styles.signin}>Войти</button>
          </Form>
          <Link  to="/forgot">Забыли пароль?</Link>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'signin'})
export default connect(mapStateToProps, actions)(form(SignInForm))
