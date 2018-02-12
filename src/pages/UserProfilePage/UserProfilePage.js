import React, { Component, Fragment } from 'react'
import RatingStars from '../../components/customComponents/RatingStars'
import * as FontAwesome from 'react-icons/lib/fa'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import WidjetsClinic from '../../components/WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../../components/WidjetsDoctors/WidjetsDoctors'
import { connect } from 'react-redux'
import CalendarComponent from './CalendarComponent'
import styles from '../../components/ClinicCard/clinic-profile.scss'
import ProfileData from './ProfileData'

class UserProfilePage extends Component {

  // componentDidMount() {
  //   let id = this.props.match.params.userID
  //   const ROOT_URL = "http://54.37.125.178:80";
  //   let userData = localStorage.getItem('testData');
  //   let userDataObj = JSON.parse(userData)
  //   console.log(userDataObj)
  //   if (axios.defaults.headers.common.hasOwnProperty('Authorization')) {
  //     delete axios.defaults.headers.common.Authorization;
  //   }
  //   axios(`${ROOT_URL}/users/getuser/${id}`,
  //
  //     {
  //       withCredentials:true,
  //
  //       auth: {
  //         Username:userData.email,
  //         password:userData.password,
  //       }
  //     })
  //     .then(response => {
  //       console.log(response)})
  //     .catch(error => {
  //       {console.log("Error: " + error)}
  //     });
  // }


  constructor (props) {
    super(props)
    this.state = {
      feedbacks: [
        {
          feedbackText: 'Dr Ojjeh is simply the best! No wait time, he is very gentle and funny, never had any pain during any of my visits. Because of him I don’t mind going to the dentist.',
          date: 'Оставлен: Январь 2018',
          range: 5
        },
        {
          feedbackText: 'Dr. Ojjeh has been our dentist for many years, he is an outstanding doctor, he truly cares about his patients, he explains everything in details, we are very happy with his care. we would go anywhere else.',
          date: 'Оставлен:Январь 2018',
          range: 1
        },
        {
          feedbackText: 'Dr Ojjeh is simply the best! No wait time, he is very gentle and funny, never had any pain during any of my visits. Because of him I don’t mind going to the dentist.',
          date: 'Оставлен: Январь 2018',
          range: 5
        },
        {
          feedbackText: 'Dr. Ojjeh has been our dentist for many years, he is an outstanding doctor, he truly cares about his patients, he explains everything in details, we are very happy with his care. we would go anywhere else.',
          date: 'Оставлен: Январь 2018',
          range: 5,
        }
      ]
    }
  }

  render () {
    const user = this.props.user
    return (
      <Fragment>
        <div className={styles.h_background}>
          <Header/>
          <div style={{marginTop:'-101px'}} className={styles.profile}>
            <div className={styles.container_clinic_card}>
              <section className={styles.clinic}>
                <article className={styles.clinic__info}>
                    <ProfileData user={user}/>
                </article>
              </section>
              <section className={styles.clinic}>
                <h2 className={styles.clinic__title}>Текущие записи</h2>
                <CalendarComponent/>
              </section>

              <section className={styles.clinic}>
                <section className={styles.clinic__feedback}>
                  <h2 className={styles.clinic__title}>Отзывы</h2>
                  <div className={styles.feedback}>
                    {this.state.feedbacks.map((feedback, index) => {
                      return (
                        <section key={index} className={styles.feedback__card}>
                          <div className={styles.h_row}>
                            <div className={styles.feedback__range}>
                              <div className={styles.feedback__range_item}>
                                <FontAwesome.FaTrash/> <span>5</span>
                                <p>Комфорт</p>
                              </div>

                              <div className={styles.feedback__range_item}>
                                <FontAwesome.FaAmbulance/><span>5</span>
                                <p>Специалисты</p>
                              </div>

                              <div className={styles.feedback__range_item}>
                                <FontAwesome.FaDollar/><span>5</span>
                                <p>Доброжелательность</p>
                              </div>
                            </div>
                            <RatingStars
                              starSelectingHoverColor="rgb(249, 215, 73)"
                              starRatedColor="rgb(249, 215, 73)"
                              starWidthAndHeight="30px"
                              starSpacing='0px'
                              isSelectable={true}
                              rating={this.state.range}
                            />
                          </div>
                          <p>{feedback.feedbackText}</p>
                          <time>
                            {feedback.date}
                          </time>
                        </section>
                      )
                    })}
                  </div>
                </section>
              </section>
            </div>
            <div className={styles.h_widjets}>
             <div className={styles.top__rated}>
              <h3 className={styles.widjet_info_title}>ТОП клиники:</h3>
              <WidjetsClinic/>
            </div>
            <div className={styles.top__rated}>
              <h3 className={styles.widjet_info_title}>ТОП врачей:</h3>
              <WidjetsDoctors/>
            </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    )

  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user:state.auth.user
  };
}
export default connect(mapStateToProps)(UserProfilePage);

