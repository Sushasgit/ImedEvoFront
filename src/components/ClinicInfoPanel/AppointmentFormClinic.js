import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form, reset } from 'redux-form'
import Modal from '../customComponents/Modal'
import * as Icons from '../SvgIcons/SvgIcons.js'
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

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({
      isModalOpen: false
    })
  }

  openModal () {
    this.setState({
      isModalOpen: true
    })
  }

  handleFormSubmit ({email, password}) {
    this.props.dispatch(reset('appointment-form-clinic'));
    this.setState({
      isModalOpen: true
    })
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
          <div style={{marginRight: '15px'}}>
            <Field
              name="clinicName"
              type="text"
              component={renderInput}
              label="Название клиники"
            />
            <Field
              name="doctorName"
              type="text"
              component={renderInput}
              label="ФИО врача"
            />
            <Field
              name="specialization"
              type="text"
              component={renderInput}
              label="Специализация врача"
            />
          </div>

          <div style={{marginRight: '15px'}}>
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

            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>
          </div>

          <div style={{marginRight: '15px'}}>
            <Field
              name="phone"
              type="text"
              component={renderInput}
              label="Телефон"/>
            <button className={styles.appointment__btn} action="submit"> Записаться</button>
          </div>

          {this.renderAlert()}
        </Form>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}>
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
          <p className={styles.appointment__confirm}>
            Ваша запись принята. В ближайшее время с Вами свяжется наш администратор для подтвеждения записи. Спасибо!
          </p>
          <button
            className={styles.close}
            style={{
              margin: 0,
              width: 'auto',
              marginTop: 10,
              backgroundColor: 'transparent',
              position: 'absolute',
              top: '-48px',
              right: '-60px',
              border: 'none'
            }} onClick={this.closeModal}>
            <Icons.IconCloseModal/>
          </button>
        </Modal>
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
export default connect(mapStateToProps)(form(AppointmentFormClinic))

