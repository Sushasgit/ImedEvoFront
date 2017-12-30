import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, Form } from 'react-redux-form';
import * as Icons from '../SvgIcons/SvgIcons.js'
import {
  registrationAsync,
} from '../../actions/userAuthActions';
import styles from  './sign-up-modal.scss'


class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      update: false
      };
    this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
  }

  onRegistrationSubmit(e) {
    e.preventDefault();
    let form = this.props.registrationUserForm;
    let { email, password, phone,name,birthDate } = this.props.registrationUser;
    this.props.registrationUserAction({ email, password, phone, birthDate, name });
  }

  render() {
    return (
        <div className={styles.registration__content}>
          <Icons.CloseButton onClick={this.props.close}/>
          <div className={styles.registration__body}>
        <Form model="registrationUser">
          <h2 className={styles.registration__title} >Регистрация</h2>

          <Field model="registrationUser.lastName">
            <label>
              <input  type="text" placeholder="Фамилия" />
            </label>
          </Field>

          <Field model="registrationUser.name">
            <label>
              <input  type="text" placeholder="Имя" />
            </label>
          </Field>

          <Field model="registrationUser.secondName">
            <label>
              <input  type="text" placeholder="Отчество" />
            </label>
          </Field>

          <Field model="registrationUser.birthDate">
            <label>Дата Рождения</label>
              <input className="form-control" type="date" />
          </Field>

          <Field model="registrationUser.phone">
            <label>
              <input className="form-control" type="text" placeholder="+38 (...)... .. .." />
            </label>
          </Field>

          <Field model="registrationUser.email">
            <label>
              <input className="form-control" type="email" placeholder="Email" />
            </label>
          </Field>

          <Field model="registrationUser.password">
            <label>
              <input className="form-control" type="password" placeholder="Пароль"/>
            </label>

          </Field>

          <Field model="registrationUser.rePassword">
            <label>
              <input className="form-control" type="password" placeholder="Повторите пароль" />
            </label>
          </Field>

          <div className={styles.registration__checkboxes}>
            <Field model="registrationUser.rememberMe">
              <input type="checkbox"/><label>Запомнить меня</label>
            </Field>


            <Field model="registrationUser.emailCampign">
              <input type="checkbox" /><label>Подписаться на рассылку</label>
            </Field>

            <Field model="registrationUser.termCondition">
              <input type="checkbox"/><label>Принимаю условия пользовательского
              соглашения</label>
            </Field>
          </div>
          <div>
            <div className="col-sm-6 col-sm-offset-3">
              <input
                className={styles.registration__signin_button}
                type="submit"
                value="Зарегистрироваться"
                onClick={e => this.onRegistrationSubmit(e)}
              />
            </div>
          </div>
        </Form>
            <div className={styles.registration__logo}>
              <a href="">
                <img src={require('../../images/logo.png')} alt="logo"/>
                IMED
              </a>
            </div>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registrationUserAction: bindActionCreators(registrationAsync, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    registrationUser: state.registrationUser,
    registrationUserForm: state.registrationUserForm
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationModal);