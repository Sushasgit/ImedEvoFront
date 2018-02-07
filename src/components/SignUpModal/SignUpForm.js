import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
import styles from  './sign-up-modal.scss'

const renderInput = (field) => {
  const {label, type, input, meta: {error, touched}} = field
  return (
    <div>
      <label>{label}:</label>
      <input {...input} type={type}
             className="form-control"/>
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

class SignUpForm extends Component {
  constructor (props) {
    super(props)
  }


  handleFormSubmit (formProps) {
    this.props.signupUser(formProps)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Что-то  пошло не так</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const phoneFormatter = (number) => {
      if (!number) return '';
      const splitter = /.{1,3}/g;
      number = number.substring(0, 13);
      return number.substring(0, 10).match(splitter).join('-') + number.substring(10);
    };
    const phoneParser = (number) => number ? number.replace(/-/g, '') : '';
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <section className={styles.signup}>
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              type="text"
              name="lastName"
              placeholder="Фамилия"
              component={renderInput}
              label="Фамилия"
            />

            <Field
              type="text"
              name="firstName"
              placeholder="Имя"
              component={renderInput}
              label="Имя">
            </Field>

            <Field
              type="text"
              name="secondName"
              placeholder="Отчество"
              component={renderInput}
              label="Отчество">
            </Field>

            <Field
              type="date"
              name="birthDate"
              component={renderInput}
              label="Дата Рождения">
            </Field>

            <Field
              model="registrationUser.phone"
              type="text"
              name="phone"
              placeholder={'NNN-NNN-NNNN'}
              component={renderInput}
              label="Телефон"
              format={phoneFormatter}
              parse={phoneParser}

            >
            </Field>

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

            <Field
              name="passwordConfirm"
              type="password"
              component={renderInput}
              label="Подтвердить пароль"/>


            <div className={styles.registration__checkboxes}>
              <Field
                name="rememberMe"
                type="checkbox"
                component={renderInput}
                label="Запомнить меня"
              >
              </Field>

              <Field
                name="emailCampign"
                type="checkbox"
                component={renderInput}
                label="Подписаться на рассылку">
              </Field>

              <Field
                required
                name="termConditions"
                type="checkbox"
                component={renderInput}
                label="Принимаю условия пользовательского соглашения">
              </Field>
            </div>
            {this.renderAlert()}
            <button action="submit" className={styles.btn__signup}>Зарегистрироваться</button>
          </Form>

        </section>
      </Fragment>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.termConditions) {
    errors.termConditions = 'Необходимо подтверждение пользовательского соглашения'
  }

  if (!formProps.phone || formProps.phone.length < 13 ) {
    errors.phone = 'Формат номера +380 XX XXX XXXX'
  }
  if (!formProps.email) {
    errors.email = 'Пожалуйста введите email'
  }
  if (!formProps.password) {
    errors.password = 'Пожалуйста введите пароль'
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Пожалуйста введите подтверждение пароля'
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Пароли должны совпадать'
  }

  return errors
}





function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'signup', validate})
export default connect(mapStateToProps, actions)(form(SignUpForm))
