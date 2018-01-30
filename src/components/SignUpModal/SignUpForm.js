import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from  '../../actions/AuthSActions';
//import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  './sign-up-modal.scss'

const renderInput = (field) => {
  const { label, type, input, meta: { error, touched } } = field;
  return (
    <div>
      <label>{label}:</label>
      <input {...input} type={type}
             className="form-control" />
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit(formProps) {

    this.props.signupUser(formProps);

  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
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
          component={renderInput}
          label="+38 (...)... .. ..">
        </Field>

        <Field
          name="email"
          type="email"
          component={renderInput}
          label="Email" />

        <Field
          name="password"
          type="password"
          component={renderInput}
          label="Пароль" />

        <Field
          name="passwordConfirm"
          type="password"
          component={renderInput}
          label="Подтвердить пароль" />


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
            model="registrationUser.termCondition"
            name="termCondition"
            type="checkbox"
            component={renderInput}
            label="Подписаться на рассылку"
          >
          </Field>
        </div>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </Form>

        </section>
      </Fragment>
    );

  }
}


function validate(formProps) {
  const errors = {};
  const { password, passwordConfirm, email  } = formProps;

  if (!email) {
    errors.email = 'Please enter an email';
  }

  if (!password) {
    errors.password = 'Please enter a password';
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (password !== passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}


const form = reduxForm({ form: 'signup', validate });
export default connect(mapStateToProps, actions)(form(SignUpForm));
