import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ProfileMap from '../Map/ProfileMap'
import RatingStars from '../customComponents/RatingStars'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors'
import ClinicInfoPanel from '../ClinicInfoPanel/ClinicInfoPanel'
import DoctorProfileData from './DoctorProfileData'
import * as constants from '../../constants/constants'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'
import * as FontAwesome from 'react-icons/lib/fa'
import styles from '../ClinicCard/clinic-profile.scss'



class DoctorProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      doctor: [],
      doctorPersonalInfo:[],
    }
  }

  componentDidMount () {
    let id = this.props.match.params.doctorId;
    axios.get(`${constants.ROOT_URL}/doctors/${id}`)
      .then(response => {
        console.log(response.data['doctor'])
        let doctor = response.data['doctor'];
        console.log(doctor)
        this.setState({
          doctor:doctor,
          doctorPersonalInfo: doctor.user
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render () {
    let doctor = this.state.doctor;
    console.log(doctor)
    return (
      <Fragment>
        <div className={styles.h_background}>
          <Header/>
          <ClinicInfoPanel/>
          {doctor &&
          <div className={styles.profile}>
            <div className={styles.container_clinic_card}>
              <section className={styles.clinic}>
                <article className={styles.clinic__info}>
                  <img src={require('../../images/doctor-profile.png')} alt="doctor-photo"/>
                  <div className={styles.clinic__description}>
                    <div className={styles.h_container_rate}>
                      <div className={styles.clinic__name}>

                        <DoctorProfileData data={doctor.user}/>

                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="rgb(249, 215, 73)"
                          starWidthAndHeight="30px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={doctor.reting}
                        />
                      </div>
                    </div>
                    <h2 className={styles.about_doctor_title}>Про врача</h2>
                    <h3 className={styles.doctor_qualification_title}>{doctor.doctorQualification}</h3>
                    <h3 className={styles.doctor_qualification_title}>{doctor.doctorAchievements}</h3>
                  </div>
                </article>
                <section className={styles.clinic__rating_doctor_profile}>
                  <div className={styles.doctor_container}>
                    <Icons.IconEducation/>
                    <h3 className={styles.general_doctor_info}>
                      {doctor.education}
                    </h3>
                  </div>
                  <div className={styles.doctor_container}>
                    <Icons.IconPrice/>
                    <h3 className={styles.general_doctor_info}>
                      {`${doctor.price} грн`}
                    </h3>
                  </div>

                  <div className={styles.doctor_container}>
                    <Icons.IconExperience/>
                    <h3 className={styles.general_doctor_info}>
                      {doctor.workExperience}
                    </h3>
                  </div>
                </section>
              </section>
              <section className={styles.clinic}>
              </section>
              <section className={styles.clinic}>
                <div className={styles.clinic__main_info}>
                  <div className={styles.doctor__map}>
                    <ProfileMap {...this.state.doctor}/>
                  </div>
                  <div className={styles.work_place}>
                    <table className={styles.appointment__table}>
                      <tbody>
                      <tr>
                        <th>Название клиники</th>
                        <th>Время</th>
                        <th>Дени недели</th>
                      </tr>
                      <tr>
                        <td>Интосана</td>
                        <td>9:00 - 12:00</td>
                        <td>Понедельник, Четверг</td>
                      </tr>
                      </tbody>
                    </table>
                    <table className={styles.appointment__table}>
                      <tbody>
                      <tr>
                        <th>Название клиники</th>
                        <th>Время</th>
                        <th>Дени недели</th>
                      </tr>
                      <tr>
                        <td>Одрекс</td>
                        <td>9:00 - 12:00</td>
                        <td>Понедельник, Среда, Пятница</td>
                      </tr>
                      </tbody>

                    </table>
                  </div>
                </div>
              </section>

              <section className={styles.clinic}>
                <section className={styles.clinic__feedback}>
                  <h2 className={styles.clinic__title}>Отзывы</h2>
                  <div className={styles.feedback}>

                    <section className={styles.feedback__card}>
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet consequuntur error eum
                        iste omnis pariatur quia ut. Adipisci distinctio enim ipsum obcaecati sint soluta tempora
                        velit. Dolore, eaque, illum!
                      </p>
                      <time>
                        Оставлен: Январь 2018
                      </time>
                    </section>
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
          }
        </div>
        <Footer/>
      </Fragment>
    )

  }
}

export default DoctorProfileCard
