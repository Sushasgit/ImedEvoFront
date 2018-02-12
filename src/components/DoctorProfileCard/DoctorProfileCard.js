import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ProfileMap from '../Map/ProfileMap'
import styles from '../ClinicCard/clinic-profile.scss'
import RatingStars from '../customComponents/RatingStars'
import * as FontAwesome from 'react-icons/lib/fa'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors'
import ClinicInfoPanel from '../ClinicInfoPanel/ClinicInfoPanel'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'


class DoctorProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      doctor: [],
      doctorPersonalInfo:[],
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  componentDidMount () {
    let id = this.props.match.params.doctorId;
    const ROOT_URL = "http://54.37.125.178:8080";
    axios.get(`${ROOT_URL}/doctors/${id}`)
      .then(response => {
        console.log(response.data)
        let doctor = response.data;
        let th = this
        th.setState({
          doctor:doctor,
          doctorPersonalInfo: doctor.user
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render () {
    let doctor = this.state.doctorPersonalInfo;
    console.log(this.state.doctor)
    let doctorAchievements = this.state.doctor;
    return (
      <Fragment>
        <div className={styles.h_background}>
          <Header/>
          <ClinicInfoPanel/>
          <div className={styles.profile}>
            <div className={styles.container_clinic_card}>
              <section className={styles.clinic}>
                <article className={styles.clinic__info}>
                  <img src={require('../../images/doctor-profile.png')} alt="doctor-photo"/>
                  {/*<img src={this.state.picture}/>*/}
                  <div className={styles.clinic__description}>
                    <div className={styles.h_container_rate}>
                      <div className={styles.clinic__name}>
                        <h2 className={styles.name}>
                          {/*<span>{`${doctor.lastName} ${doctor.firstName} ${doctor.patronymic}`}</span>*/}
                          </h2>
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
                    <h2>{doctorAchievements.doctorAchievements}</h2>
                    <h3>{doctorAchievements.doctorGualification}</h3>
                    <p>Про врача</p>
                    <p>
                      Медицинский центр  основан более 10 лет назад (2005 год) кандидатом медицинских наук
                      врачом-ревматологом, возглавлявшим Городской ревматологический центр города Киева более
                      40 лет, Тер-Вартаньян Семеном Христофоровичем. Стремление к оказанию современной и эффективной
                      медицинской помощи пациентам с ревматическими болезнями объединило в центре несколько поколений
                      квалифицированных ревматологов.
                    </p>
                  </div>
                </article>
                <section className={styles.clinic__rating_doctor_profile}>
                  <div className={styles.doctor_container}>
                    <Icons.IconEducation/>
                    <h3 className={styles.general_doctor_info}>
                      {doctorAchievements.education}
                    </h3>
                  </div>
                  <div className={styles.doctor_container}>
                    <Icons.IconPrice/>
                    <h3 className={styles.general_doctor_info}>
                      {`${doctorAchievements.price} грн`}
                    </h3>
                  </div>

                  <div className={styles.doctor_container}>
                    <Icons.IconExperience/>
                    <h3 className={styles.general_doctor_info}>
                      {`${doctorAchievements.workExperience} лет`}
                    </h3>
                    </div>
                </section>
              </section>
              <section className={styles.clinic}>

              </section>

              <section className={styles.clinic}>
                <div className={styles.clinic__main_info}>
                  <div className={styles.doctor__map}>
                    <ProfileMap {...this.state}/>
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

              {/*<section className={styles.clinic}>*/}
              {/*<h2 className={styles.clinic__title}>Филиалы</h2>*/}
              {/*<div className={styles.branches}>*/}
              {/*<section  className={styles.branches__card}>*/}
              {/*<article className={styles.branches__address}>*/}
              {/*<h3>МЦ на Неждановой</h3>*/}
              {/*<ul className={styles.clinic__contacts}>*/}
              {/*<li><FontAwesome.FaMapMarker />г. Одесса, ул. Варненская, 2</li>*/}
              {/*<li><FontAwesome.FaPhone />(0482) 307-500, (0482) 343 -062</li>*/}
              {/*<li><FontAwesome.FaEnvelope /> into-sana@ukr.net</li>*/}
              {/*<li><FontAwesome.FaClockO />Пн-Вск: 08.00-20.00</li>*/}
              {/*</ul>*/}
              {/*</article>*/}
              {/*</section>*/}
              {/*</div>*/}
              {/*</section>*/}

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
        </div>
        <Footer/>
      </Fragment>
    )

  }
}

export default DoctorProfileCard
