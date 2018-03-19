import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field, Form} from 'redux-form'
import * as actions from '../../actions/loginActions'
import {Link} from 'react-router-dom'
import formStyles from '../../sass/components/form.scss'
import inputStyles from '../../sass/components/input.scss'
import buttonStyles from '../../sass/components/button.scss'

const renderInput = (field) => {
    const {label, type, input, meta: {error, touched}} = field

    return (
        <div>
            <label className={inputStyles.label}>{label}:</label>
            <input
                {...input}
                type={type}
                className={inputStyles.input}/>
            {touched && error && <div className="error">{error}</div>}
        </div>
    )
}

class SignInForm extends Component {

    handleFormSubmit({username, password}) {
        this.props.signinUser({username, password})
    }

    renderAlert() {
        const {errorMessage} = this.props
        if (errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{errorMessage}
                </div>
            )
        }
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <Fragment>
                <section className={formStyles.form}>
                    <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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

                        {this.renderAlert()}
                        <div className={formStyles.form__btn}>
                            <button action="submit" className={`${buttonStyles.btn} ${buttonStyles.btn_blue}`}>Войти
                            </button>
                        </div>
                    </Form>
                    <Link style={{textAlign: 'center', display: 'inherit'}} to="/forgot">Забыли пароль?</Link>
                </section>
            </Fragment>
        )
    }
}



function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        modal: state.modal,
    }
}

const form = reduxForm({form: 'signin'})
export default connect(mapStateToProps, actions)(form(SignInForm))
