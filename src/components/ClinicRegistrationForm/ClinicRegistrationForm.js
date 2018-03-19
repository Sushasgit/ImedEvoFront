import React, {Component} from 'react';
import styles from './clinic-reg.scss';
import {connect} from 'react-redux';
import {reduxForm, Field, Form} from 'redux-form';
import * as actions from '../../actions/signupClinicActions';


const standartInput = (field) => {
    const {label, type, input, meta: {error, touched}} = field
    return (
        <div className={styles.cf_form_name_new}>
            <label>{label}</label>
            <input {...input} type={type}
                   className=""/>
            {touched && error && <div className={styles.error}>{error}</div>}
        </div>
    )
}

const time = (field) => {
    const {type, input} = field
    return (
        <div className="">
            <label></label>
            <input {...input} type={type}
                   className=""/>
        </div>
    )
}

const textarea = (field) => {
    const {label} = field
    return (
        <label className={styles.cf_form_services}> {label}
            <textarea/>
        </label>
    )
}


class ClinicRegistrationForm extends Component {

    handleFormSubmit(formProps) {
        this.props.signupClinic(formProps)
    }

    render() {

        const phoneFormatter = (number) => {
            if (!number) return '';
            const splitter = /.{1,3}/g;
            number = number.substring(0, 13);
            return number.substring(0, 10).match(splitter).join('-') + number.substring(10);
        };
        const phoneParser = (number) => number ? number.replace(/-/g, '') : '';
        const {handleSubmit} = this.props;

        return (
            <div className={styles.clinic_form}>
                <h2 className={styles.cf_tit}>Форма регистрации Клиники</h2>
                <div className={styles.cf_wrap}>
                    <div className={styles.cf_left}>
                        <div className={styles.cf_left_logo}>
                            <div className={styles.cf_left_logo_load_logo}>
                                <img src={require('../../images/paper-clip.png')} alt="logo"/>
                                <a className={styles.cf_left_logo_load_btn}>Загрузить логотип*</a>
                            </div>
                            <div className={styles.cf_left_logo_load_licence}>
                                <img src={require('../../images/paper-clip.png')} alt="licence"/>
                                <a className={styles.cf_left_logo_load_btn}>Загрузить Лицензию*</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cf_right}>
                        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className={styles.cf_form}>
                            <div className={styles.cf_form_firstline}>
                                <Field
                                    type="text"
                                    name="clinicName"
                                    component={standartInput}
                                    label="Название Клиники*:"
                                />
                                <Field
                                    type="text"
                                    name="address"
                                    component={standartInput}
                                    label="Адрес Клиники*:"
                                />
                                <div className={styles.cf_form_add_branch}>
                                    <div className={styles.cf_form_add_branch_plus}>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <p className={styles.cf_form_add_branch_plus_text}>Добавить отделение</p>
                                </div>
                            </div>
                            <div className={styles.cf_form_secondline}>
                                <Field
                                    type="tel"
                                    name="phoneNumber"
                                    component={standartInput}
                                    label="Телефон:"
                                    format={phoneFormatter}
                                    parse={phoneParser}
                                />
                                <Field
                                    type="email"
                                    name="email"
                                    component={standartInput}
                                    label="E-mail:"
                                />
                            </div>
                            <div className={styles.cf_form_thirdline}>
                                <p className={styles.cf_form_schedule_tit}>График работы: </p>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day}>Пн:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleMnStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="сlinicscheduleMnEnd"
                                        component={time}
                                    />
                                </div>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day_add}>Вт:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleTueStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="clinicscheduleTueEnd"
                                        component={time}
                                    />
                                </div>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day_add}>Cp:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleWedStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="clinicscheduleWedEnd"
                                        component={time}
                                    />
                                </div>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day_add}>Чт:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleThuStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="clinicscheduleThuEnd"
                                        component={time}
                                    />
                                </div>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day_add}>Пт:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleFriStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="clinicscheduleFriEnd"
                                        component={time}
                                    />
                                </div>
                                <div className={styles.cf_form_shedule_day}>
                                    <p className={styles.cf_form_day_add}>Сб:</p>
                                    <Field
                                        type="time"
                                        name="clinicscheduleSatStart"
                                        component={time}
                                    />
                                    <span> - </span>
                                    <Field
                                        type="time"
                                        name="clinicscheduleSatEnd"
                                        component={time}
                                    />
                                </div>
                            </div>
                            <Field
                                name="services"
                                component={textarea}
                                label="Описание предоставляемых услуг:"
                            />
                            <button action="submit" className={styles.cf_form_submit}>Зарегистрироваться</button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}


function validate(formProps) {
    const errors = {}

    if (!formProps.phoneNumber || formProps.phoneNumber.length < 13) {
        errors.phoneNumber = 'Формат номера +380 XX XXX XXXX'
    }
    if (!formProps.email) {
        errors.email = 'Пожалуйста введите email'
    }
    if (!formProps.clinicName) {
        errors.clinicName = "Пожалуйста введите имя"
    }
    if (!formProps.address) {
        errors.address = "Пожалуйста укажите адрес"
    }
    return errors
}

function mapStateToProps(state) {
    return {
        error: state.signupClinic.error
    }
}

const form = reduxForm({form: 'signupClinic', validate});

export default connect(mapStateToProps, actions)(form(ClinicRegistrationForm));




