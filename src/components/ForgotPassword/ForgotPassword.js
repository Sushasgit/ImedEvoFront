import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import * as actions from  '../../actions/forgotPasswordActions'
import Header from '../../components/Header/Header'
import Footer from '../Footer/Footer'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'
import * as constants from '../../constants/constants'

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

  componentWillMount(){
    document.body.classList.remove(constants.MODAL_OPEN_CLASS)
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
    const {message} = this.props
    if (message) {
      return (
        <div className="alert alert-danger">
          <strong className={styles.message}>{message}</strong>
        </div>
      )
    }
  }

  handleFormSubmit ({email}) {
    this.props.forgotPassword({email})
  }

  render () {
    const {handleSubmit} = this.props
    const message = this.props.message
    return (
      <Fragment>
        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        >
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
        {message !== "" && this.renderAlert()}
        {message === "" &&
        <div>
          <h4 className={styles.forgot_title}>Для восстановления пароля введите свой email</h4>
          <Form className={styles.forgot} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"/>
            <button action="submit" className={styles.forgot_btn}>Отправить</button>
          </Form>
        </div>
        }
        <Footer/>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
     message: state.message.message
  }
}

const form = reduxForm({form: 'forgotPassword'})
export default connect(mapStateToProps, actions)(form(ForgotPassword))

