import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/AuthSActions'
import Header from '../../components/Header/Header'
import Footer from '../Footer/Footer'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'

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

//TODO Show different modals according to response

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
    }

    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({
      isModalOpen: true
    })
  }

  openModal () {
    this.setState({
      isModalOpen: true
    })
  }

  renderAlert () {
    const {errorMessage} = this.props
    if (errorMessage) {

      this.openModal()
    }
  }

  handleFormSubmit ({email}) {
    this.props.ForgotPassword({email})

    this.renderAlert()
  }

  render () {
    console.log(this.props)
    const {handleSubmit, errorMessage} = this.props
    return (
      <Fragment>
        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        >
          <div className="alert alert-danger">
            <strong>{errorMessage}</strong>
          </div>

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
        <Header/>
        <h4 className={styles.forgot_title}>Для восстановления пароля введите свой email</h4>
        <Form className={styles.forgot} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            type="email"
            component={renderInput}
            label="Email"/>
          <button action="submit" className={styles.forgot_btn}>Отправить</button>
        </Form>
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

const form = reduxForm({form: 'forgotPassword'})
export default connect(mapStateToProps, actions)(form(ForgotPassword))

