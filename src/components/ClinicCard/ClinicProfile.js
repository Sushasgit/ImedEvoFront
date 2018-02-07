import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ProfileMap from '../Map/ProfileMap'
import styles from './clinic-profile.scss'
import RatingStars from '../customComponents/RatingStars'
import * as FontAwesome from 'react-icons/lib/fa'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors'
import ClinicInfoPanel from '../ClinicInfoPanel/ClinicInfoPanel'
// import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'

class ClinicProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clinic: [],
    }
  }

  componentDidMount () {
    let id = this.props.match.params.clinicId;
    console.log(id)
    const ROOT_URL = "http://54.37.125.178:8080";
    axios.get(`${ROOT_URL}/clinics/${id}`)
      .then(response => {
        console.log(response.data)
        let clinic = response.data;
        let th = this
        th.setState({
          clinic: clinic,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render () {
    //TODO CREATE WIDJETS (top clinic and doctors)
    //TODO Change image when it will return from server
    console.log(this.state.clinic.nameClinic)
    console.log(this.state)
    let clinic = this.state
    console.log(clinic.clinic)
    return (
      <Fragment>
        <div className={styles.h_background}>
          <Header/>
          <ClinicInfoPanel/>
          <div className={styles.profile}>
            <div className={styles.container_clinic_card}>
              <section className={styles.clinic}>
                <article className={styles.clinic__info}>
                  <img src="https://placeholdit.co//i/150x150?&bg=4775d1&text=Clinic Photo" alt="clinic-photo"/>

                  {/*<img src={this.state.picture}/>*/}
                  <div className={styles.clinic__description}>
                    <div className={styles.h_container_rate}>
                      <div className={styles.clinic__name}>
                        <h2 className={styles.name}>{clinic.clinic.clinicName}</h2>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="rgb(249, 215, 73)"
                          starWidthAndHeight="30px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}
                        />
                      </div>
                    </div>
                    <p>Про клинику</p>
                    <p>
                      Медицинский центр  основан более 10 лет назад (2005 год) кандидатом медицинских наук
                      врачом-ревматологом, возглавлявшим Городской ревматологический центр города Киева более
                      40 лет, Тер-Вартаньян Семеном Христофоровичем. Стремление к оказанию современной и эффективной
                      медицинской помощи пациентам с ревматическими болезнями объединило в центре несколько поколений
                      квалифицированных ревматологов.
                    </p>
                  </div>
                </article>
              </section>
              <section className={styles.clinic}>
                <section className={styles.clinic__rating}>
                  <div>
                  <h3>Комфорт:</h3>
                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="#4775d1"
                    starWidthAndHeight="25px"
                    starSpacing='0px'
                    isSelectable={true}
                    rating={this.state.range}
                  />
                  <h3>Специалисты:</h3>
                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="#4775d1"
                    starWidthAndHeight="25px"
                    starSpacing='0px'
                    isSelectable={true}
                    rating={this.state.range}
                  />
                  </div>
                  <div>
                  <h3>Доброжелательность:</h3>
                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="#4775d1"
                    starWidthAndHeight="25px"
                    starSpacing='0px'
                    isSelectable={true}
                    rating={this.state.range}
                  />
                  <h3>Оборудование:</h3>
                  <RatingStars
                    starSelectingHoverColor="rgb(249, 215, 73)"
                    starRatedColor="#4775d1"
                    starWidthAndHeight="25px"
                    starSpacing='0px'
                    isSelectable={true}
                    rating={this.state.range}
                  />
                  </div>
                </section>
              </section>

              <section className={styles.clinic}>
                <div className={styles.clinic__main_info}>
                  <div className={styles.directions}>
                    <ul className={styles.clinic__contacts}>
                      <li><FontAwesome.FaMapMarker />г. Одесса, ул. Варненская, 2</li>
                      <li><FontAwesome.FaPhone />(0482) 307-500, (0482) 343 -062</li>
                      <li><FontAwesome.FaEnvelope /> into-sana@ukr.net</li>
                      <li><FontAwesome.FaClockO />Пн-Вск: 08.00-20.00</li>
                    </ul>
                    <div className={styles.clinic__area}>
                      <ul>
                        <li><FontAwesome.FaCheck />Гастроэнтерология</li>
                        <li><FontAwesome.FaCheck />Акушерство и гинекология</li>
                        <li><FontAwesome.FaCheck />Ангиографические иссл-ия</li>
                        <li><FontAwesome.FaCheck />Диагностика</li>
                        <li><FontAwesome.FaCheck />Кардиология</li>
                        <li><FontAwesome.FaCheck />Компьютерная томография</li>
                        <li><FontAwesome.FaCheck />Магнітно-резонансна томографія</li>
                        <li><FontAwesome.FaCheck />Мамографія</li>
                        <li><FontAwesome.FaCheck />Урологія</li>
                        <li><FontAwesome.FaCheck />Хірургія</li>
                      </ul>
                      <ul>
                        <li><FontAwesome.FaCheck />Неврологія</li>
                        <li><FontAwesome.FaCheck />Нейрофункціональні досліждення</li>
                        <li><FontAwesome.FaCheck />Оториноларингологія</li>
                        <li><FontAwesome.FaCheck />Педіатрія</li>
                        <li><FontAwesome.FaCheck />Проктологія</li>
                        <li><FontAwesome.FaCheck />Рентгенографія</li>
                        <li><FontAwesome.FaCheck />Травматологія и ортопедія</li>
                        <li><FontAwesome.FaCheck />УЗД</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.clinic__map}>
                    <ProfileMap {...this.state}/>
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

export default ClinicProfile
