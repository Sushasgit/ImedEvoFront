import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import { history } from '../../history'
import Modal from '../customComponents/Modal'
import styles from  './help-form.scss'
import LogoItem from '../LogoItem/LogoItem'

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

const renderTextArea = (field) => {
  const {label, type, textarea, meta: {error, touched}} = field
  return (
    <div>
      <label>{label}:</label>
      <textarea
        {...textarea}
        type={type}
        className="form-control"/>
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

class HelpForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      isModalOpen: false,
      isInnerModalOpen: false
    }
  }

  //TODO New request to server, when API endpoint will create.
  //temporary dession

  handleFormSubmit () {
    setTimeout(() => {
      this.setState({
        isModalOpen: true
      })
    }, 2000)

    setTimeout(() => {
      history.push(`/`)
    }, 5000)
  }


  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Что-то пошло не так</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const phoneFormatter = (number) => {
      if (!number) return ''
      const splitter = /.{1,3}/g
      number = number.substring(0, 13)
      return number.substring(0, 10).match(splitter).join('-') + number.substring(10)
    }
    const phoneParser = (number) => number ? number.replace(/-/g, '') : ''
    const {handleSubmit} = this.props

    return (
      <Fragment>
        <section className={styles.help_banner}>
          <h5>Необходима <span>помощь</span>? Напишите нам и мы обязательно поможем!</h5>
        </section>


        <section className={styles.help}>
          <Modal
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}>
            <LogoItem/>
            <h4>СПАСИБО, СООБЩЕНИЕ ОТПРАВЛЕНО. МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ.</h4>
          </Modal>

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
              name="description"
              type="text"
              component={renderTextArea}
              label="Описание"/>

            {this.renderAlert()}
            <button action="submit" className={styles.btn__help}>Отправить</button>
          </Form>
        </section>
      </Fragment>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.phone || formProps.phone.length < 13) {
    errors.phone = 'Формат номера +380 XX XXX XXXX'
  }
  if (!formProps.email) {
    errors.email = 'Пожалуйста введите email'
  }

  return errors
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'help', validate})
export default connect(mapStateToProps, null)(form(HelpForm))
