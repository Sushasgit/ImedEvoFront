import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
//import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from './appointment-form.scss'

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

class AppointmentFormClinic extends Component {
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
          <Form className={styles.appointment} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div style={{marginRight:'15px'}}>
            <Field
              name="doctorName"
              type="text"
              component={renderInput}
              label="ФИО врача"
            />

            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>
            </div>

            <div style={{marginRight:'15px'}}>
              <Field
                name="name"
                type="text"
                component={renderInput}
                label="Имя"/>
              <Field
                name="date"
                type="date"
                component={renderInput}
                label="Дата"/>
            </div>

            <div style={{marginRight:'15px'}}>
              <Field
                name="phone"
                type="text"
                component={renderInput}
                label="Телефон"/>
             <button className={styles.appointment__btn} action="submit"> Записаться </button>
            </div>

            {this.renderAlert()}
          </Form>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'appointment-form-clinic'})
export default connect(mapStateToProps, actions)(form(AppointmentFormClinic))

