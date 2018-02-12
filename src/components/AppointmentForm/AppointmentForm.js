import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
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
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

class AppointmentForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSubmmited: false,
    }
  }

  handleFormSubmit ({email}) {
    this.setState({isSubmmited: true})
    this.props.dispatch(reset('appointment-doctor'));
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
    const phoneFormatter = (number) => {
      if (!number) return ''
      const splitter = /.{1,3}/g
      number = number.substring(0, 13)
      return number.substring(0, 10).match(splitter).join('-') + number.substring(10)
    }
    const phoneParser = (number) => number ? number.replace(/-/g, '') : ''
    const doctor = this.props.data.user
    const doctorCard = this.props.data
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <div className={styles.appointment_doctor}>
          <h2 className={styles.appointment_doctor__title}>Запись на прием к:</h2>
          {doctor &&
          <h3 className={styles.appointment_doctor__subtitle}><span>{doctor.firstName}</span>
            <span>{doctor.lastName}</span></h3>
          }
          {!doctor &&
          <h3 className={styles.appointment_doctor__subtitle}>
            <span>
              {`${doctorCard.firstName} ${doctorCard.lastName}`}
            </span>
          </h3>
          }
        </div>

        <section className={styles.appointment_doctor__form}>
          {!this.state.isSubmmited &&

          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="fullName"
              type="text"
              component={renderInput}
              label="ФИО"/>

            <Field
              type="text"
              name="phone"
              placeholder={'NNN-NNN-NNNN'}
              component={renderInput}
              label="Телефон"
              format={phoneFormatter}
              parse={phoneParser}
            />

            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>

            <Field
              type="date"
              name="appointmentDate"
              component={renderInput}
              label="Дата записи"/>

            <Field
              type="time"
              name="appointmentTime"
              component={renderInput}
              label="Желаемое время записи"/>

            {this.renderAlert()}
            <button action="submit" className={styles.signin}>Записаться</button>
          </Form>
          }

          {this.state.isSubmmited && doctor &&
          <section className={styles.appointment_doctor__confirm}>
            {`Вы записаны на прием к ${doctor.firstName} ${doctor.lastName}.
            Как только доктор подтвердит запись, она появится в Вашем календаре. Спасибо!
            `}
          </section>
          }
          {this.state.isSubmmited && !doctor &&
          <section className={styles.appointment_doctor__confirm}>
            {`Вы записаны на прием к ${doctorCard.firstName} ${doctorCard.lastName}.
            Как только доктор подтвердит запись, она появится в Вашем календаре. Спасибо!
            `}
          </section>
          }
        </section>
      </Fragment>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.fullName) {
    errors.fullName = 'Это обязательное поле для заполнения'
  }

  if (!formProps.phone || formProps.phone.length < 13) {
    errors.phone = 'Формат номера +380 XX XXX XXXX'
  }
  if (!formProps.email) {
    errors.email = 'Пожалуйста введите email'
  }
  if (!formProps.appointmentDate) {
    errors.appointmentDate = 'Пожалуйста введите желаемую дату записи'
  }
  if (!formProps.appointmentTime) {
    errors.appointmentTime = 'Пожалуйста введите желаемое время записи'
  }
  return errors
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'appointment-doctor', validate})
export default connect(mapStateToProps)(form(AppointmentForm))
