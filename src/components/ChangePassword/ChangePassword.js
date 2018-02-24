import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'
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
      {touched && error && <div className="error">{error}</div>}
    </div>
  )
}

class ChangePassword extends Component {

  componentDidMount(){
    let token =  this.props.match.params.token;
    console.log(token)
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
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <Header/>
        <section className={styles.recover_password}>
          <Form>
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

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'recover_password'})
export default connect(mapStateToProps)(form(ChangePassword))

