import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import { history } from '../../history'
import Modal from '../customComponents/Modal'
import LogoItem from '../LogoItem/LogoItem'
import styles from  './for-clinic.scss'

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

class ForClinicForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      isModalOpen: false,
      isInnerModalOpen: false
    }
  }

  //TODO New request to server, when API endpoint will create (temporary decision).

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

  render() {
    const {handleSubmit} = this.props
    return (
      <Fragment>
        <section className={styles.banner}>
          {/*<img src={require('../../images/doctors-for-clinic.jpg')}/>*/}
          <div className={styles.banner__info}>
            <h5>Вы врач или представитель клиники?</h5>
            <p>
              Позвольте потенциальным клиентам узнать больше о ваших услугах.
              Присоединяйтесь к нашему порталу и получайте больше клиентов уже сейчас.
              Введите email и мы отправим Вам все необходимые инструкции для прохождения регистрации
            </p>
          </div>
        </section>
        <section className={styles.for_clinics}>
          <Modal
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}>
            <LogoItem/>
            <h4>СПАСИБО, СООБЩЕНИЕ ОТПРАВЛЕНО. МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ.</h4>
          </Modal>

          <Form className={styles.contact} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>
            {this.renderAlert()}
            <button action="submit" className={styles.btn__for_clinic}>Отправить</button>
          </Form>
        </section>
      </Fragment>
    );
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

const form = reduxForm({form: 'clinicForm'})
export default connect(mapStateToProps, null)(form(ForClinicForm))

