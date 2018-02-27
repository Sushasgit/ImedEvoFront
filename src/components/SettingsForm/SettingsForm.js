import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/updateUserActions'
import styles from  '../SignUpModal/sign-up-modal.scss'

const renderInput = (field) => {
  const {label, type, defaultValue,input, meta: {error, touched}} = field

  return (
    <div>
      <label>{label}:</label>
      <input
        {...input}
        type={type}
        defaultValue={defaultValue}
        className="form-control"/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  )
}

class SettingsForm extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      "firstName": this.props.user.firstName,
      "lastName": this.props.user.lastName,
      "phone": this.props.user.phone,
      "city":this.props.user.city,
      "street":this.props.user.street
    };

    this.props.initialize(initData);
  }

  handleFormSubmit (formProps) {
    this.props.updateUser(formProps)
  }

  render () {
    const {handleSubmit} = this.props
    const user = this.props.user
    return (
      <Fragment>
        <section className={styles.signup}>
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

            <Field
              name="firstName"
              type="text"
              component={renderInput}
              label="Имя"

            />

            <Field
              name="lastName"
              type="text"
              component={renderInput}
              label="Фамилия"/>

            <Field
              name="city"
              type="text"
              component={renderInput}
              label="Город"/>

            <Field
              name="street"
              type="text"
              component={renderInput}
              label="Улица"/>

            <Field
              name="house"
              type="text"
              component={renderInput}
              label="Дом"/>

            <Field
              name="phone"
              type="text"
              component={renderInput}
              label="Телефон"/>

            <Field
              name="password"
              type="password"
              component={renderInput}
              label="Пароль"/>


            <button action="submit" className={styles.signin}>Изменить</button>
          </Form>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    user:state.auth.user
  }
}

const form = reduxForm({form: 'settings'})
export default connect(mapStateToProps, actions)(form(SettingsForm))
