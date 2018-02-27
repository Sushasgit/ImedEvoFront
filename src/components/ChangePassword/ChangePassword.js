import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/forgotPasswordActions'
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

class ChangePassword extends Component {
  constructor (props) {
    super(props)
  }

  renderAlert () {
    const {message} = this.props
    if (message) {
      return (
        <div className="alert alert-danger">
          <strong>{message}</strong>
        </div>
      )
    }
  }

  handleFormSubmit ({email}) {
    let token = this.props.match.params.token
    this.props.changePassword({email, token})
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <Header/>
        <section className={styles.recover_password}>
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="newPassword"
              type="password"
              component={renderInput}
              label="Новый пароль"/>

            <Field
              name="password"
              type="password"
              component={renderInput}
              label="Подтвердите пароль"/>

            {this.renderAlert()}
            <button action="submit" className={styles.signin}>Изменить пароль</button>
          </Form>
        </section>
        <Footer/>
      </Fragment>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.password) {
    errors.password = 'Пожалуйста введите пароль'
  }

  if (formProps.password !== formProps.newPassword) {
    errors.password = 'Пароли должны совпадать'
  }
  return errors
}

function mapStateToProps (state) {
  return {
    message: state.message.message
  }
}

const form = reduxForm({form: 'recover_password'}, validate)
export default connect(mapStateToProps, actions)(form(ChangePassword))

