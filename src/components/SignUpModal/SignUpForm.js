import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field, Form} from 'redux-form'
import * as actions from '../../actions/AuthSActions'
import * as modalActions from '../../actions/modalActions'
import styles from './sign-up-modal.scss'
import InputMask from 'react-input-mask'
import inputStyles from '../../sass/components/input.scss'
import formStyles from '../../sass/components/form.scss'
import buttonStyles from '../../sass/components/button.scss'

const renderInput = (field) => {
    const {label, type, input, meta: {error, touched}} = field;
    return (
        <div>
            <label className={inputStyles.label}>{label}:</label>
            <input {...input} type={type}
                   className={inputStyles.input}/>
            {touched && error && <div className={styles.error}>{error}</div>}
        </div>
    )
};

const renderInputPhone = (field) => {
    const {label, input, meta: {error, touched}} = field;
    return (
        <div>
            <label className={inputStyles.label}>{label}:</label>
            <InputMask className={inputStyles.input} {...input} mask="+380\ 99 999 99 99" maskChar=" "/>
            {touched && error && <div className={styles.error}>{error}</div>}
        </div>
    )
};

class SignUpForm extends Component {

    handleFormSubmit(formProps) {
        this.props.signupUser(formProps)
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className={styles.error__message}>
                    <strong>{this.props.errorMessage}</strong>
                </div>
            )
        }
    }

    render() {
        const {handleSubmit} = this.props;
        console.log(this.props.registrationSuccess);
        return (
            <Fragment>
                {!this.props.registrationSuccess.registrationSuccess &&
                <section className={formStyles.form}>
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
                            component={renderInputPhone}
                            label="Телефон"
                        />


                        <Field
                            name="username"
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
                        <div className={formStyles.form__btn}>
                            <button action="submit"
                                    className={`${buttonStyles.btn} ${buttonStyles.btn_blue}`}>Зарегистрироваться
                            </button>
                        </div>
                    </Form>

                </section>
                }

                {this.props.registrationSuccess.registrationSuccess &&
                <div>
                    <h4 style={{textAlign: 'center', color: '#245999', fontSize: '1.6em'}}>
                        Вы зарегестрировались успешно! Авторизируйтесь пожалуйста здесь</h4>
                    <button
                        className={`${buttonStyles.btn} ${buttonStyles.btn_blue}`}
                        onClick={() => {
                            this.props.hideModal();
                            this.props.showModal('isShowingSignInModal')
                        }}>
                        Войти
                    </button>

                </div>
                }
            </Fragment>
        )
    }
}

function validate(formProps) {

    const errors = {};

    function isValidDate(dateString) {
        let regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx)) return false;
        let d = new Date(dateString);
        if (!d.getTime() && d.getTime() !== 0) return false;
        return d.toISOString().slice(0, 10) === dateString;
    }

    function isValidDateName(dateString) {

        return /^\S{1,}$/.test(dateString)
    }

    if (!formProps.lastName || !isValidDateName(formProps.lastName)) {
        errors.lastName = 'Введите пожалуйста фамилию'
    }


    if (!formProps.firstName || !isValidDateName(formProps.firstName)) {
        errors.firstName = 'Введите пожалуйста имя'
    }

    if (formProps.birthDate && !isValidDate(formProps.birthDate) && !formProps.birthDate) {
        errors.birthDate = 'Введите правильную дату рождения'
    }

    if (!formProps.termConditions) {
        errors.termConditions = 'Необходимо подтверждение пользовательского соглашения'
    }

    if (!formProps.phone) {
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

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (id) => {
            dispatch(modalActions.showModal(id));
        },
        hideModal: () => {
            dispatch(modalActions.hideModal());
        },

        signupUser: (formProps) => {
            dispatch(actions.signupUser(formProps));
        }
    };
};


function mapStateToProps(state) {
    return {
        registrationSuccess: state.auth,
        modal: state.modal,
        errorMessage: state.auth.error
    }
}

const form = reduxForm({form: 'signup', validate});
export default connect(mapStateToProps, mapDispatchToProps)(form(SignUpForm))