import React, { Component, Fragment } from 'react'
import data from '../../constants/testClinicCard.json'
import ProfileMap from '../Map/ProfileMap'
import styles from './clinic-profile.scss'
import RatingStars from '../customComponents/RatingStars'
import * as FontAwesome from 'react-icons/lib/fa'
import Footer from '../Footer/Footer'
// import WidjetsClinic from '../WidjetsClinic/WidjetsClinic'

class ClinicProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clinic: [],
      range: 15,
      longitude: '30.6847044',
      latitude: '46.4939649',
      about: 'Consequat aliqua pariatur veniam commodo excepteur anim ex aute ut sint cillum. Reprehenderit ex consequat proident irure pariatur incididunt nostrud. Dolore sit id deserunt nostrud ullamco consectetur mollit sit Lorem laborum Lorem. Mollit velit exercitation anim voluptate magna ea eiusmod culpa veniam laboris enim pariatur.',
      address: '484 Blake Court, Roland, Puerto Rico, 2759',
      phone: '+1 (888) 516-2478',
      nameClinic: 'Медея',
      age: 20,
      expiriance: 28,
      picture: 'https://www.medcentre.com.ua/i/2013/04/into-sana_250.png',
      isActive: true,
      _id: '5a491e4af01da705108cb370',
      branches: [
        {
          nameBranch: 'МЦ на Неждановой',
          picture: 'https://www.medcentre.com.ua/i/2013/04/into-sana_250.png',
          address: '484 Blake Court, Roland, Puerto Rico, 2759',
          phone: '+1 (888) 516-2478',
        },
        {
          nameBranch: 'МЦ на Заболотного',
          picture: 'https://www.medcentre.com.ua/i/2013/04/into-sana_250.png',
          address: '484 Blake Court, Roland, Puerto Rico, 2759',
          phone: '+1 (888) 516-2478',
        },
        {
          nameBranch: 'МЦ на Неждановой',
          picture: 'https://www.medcentre.com.ua/i/2013/04/into-sana_250.png',
          address: '484 Blake Court, Roland, Puerto Rico, 2759',
          phone: '+1 (888) 516-2478',
        },
        {
          nameBranch: 'МЦ на Д. Ойстраха',
          picture: 'https://www.medcentre.com.ua/i/2013/04/into-sana_250.png',
          address: '484 Blake Court, Roland, Puerto Rico, 2759',
          phone: '+1 (888) 516-2478',
        },
      ],
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

  componentDidMount () {
    let th = this
    th.setState({
      clinic: data.clinic,
    })
  }

  render () {
    //TODO CREATE WIDJETS (top clinic and doctors)
    return (
      <Fragment>
        <div className={styles.h_background}>
          <header className={styles.logo}>
            <a href="">
              <img src={require('../../images/logo.png')} alt="logo"/>
              IMED
            </a>
          </header>

          <div>
            <div className={styles.container_clinic_card}>
              <section className={styles.clinic}>
                <article className={styles.clinic__info}>
                  <img src={this.state.picture}/>
                  <div className={styles.clinic__description}>
                    <div className={styles.h_container_rate}>
                      <div className={styles.clinic__name}>
                        <h2 className={styles.name}>{this.state.nameClinic}</h2>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="rgb(249, 215, 73)"
                          starWidthAndHeight="30px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}
                        />
                      </div>
                      <section className={styles.clinic__rating}>
                        <span>Комфорт:</span>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="#01b4f0"
                          starWidthAndHeight="25px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}

                        />
                        <span>Специалисты:</span>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="#01b4f0"
                          starWidthAndHeight="25px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}
                        />
                        <span>Доброжелательность:</span>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="#01b4f0"
                          starWidthAndHeight="25px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}
                        />
                        <span>Оборудование:</span>
                        <RatingStars
                          starSelectingHoverColor="rgb(249, 215, 73)"
                          starRatedColor="#01b4f0"
                          starWidthAndHeight="25px"
                          starSpacing='0px'
                          isSelectable={true}
                          rating={this.state.range}
                        />
                      </section>
                    </div>
                    <p>Про клинику</p>
                    <p>{this.state.about}</p>
                    <button className={styles.clinic__btn}>Записаться</button>
                  </div>
                </article>
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

              <section className={styles.clinic}>
                <h2 className={styles.clinic__title}>Филиалы</h2>
                <div className={styles.branches}>
                  {this.state.branches.map((branch, index) => {
                    return (
                      <section key={index} className={styles.branches__card}>
                        <img src={branch.picture}/>
                        <article className={styles.branches__address}>
                          <h3>МЦ на Неждановой</h3>
                          <ul className={styles.clinic__contacts}>
                            <li><FontAwesome.FaMapMarker />г. Одесса, ул. Варненская, 2</li>
                            <li><FontAwesome.FaPhone />(0482) 307-500, (0482) 343 -062</li>
                            <li><FontAwesome.FaEnvelope /> into-sana@ukr.net</li>
                            <li><FontAwesome.FaClockO />Пн-Вск: 08.00-20.00</li>
                          </ul>
                        </article>
                      </section>
                    )
                  })}
                </div>
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
          </div>
          <Footer/>
        </div>
      </Fragment>
    )

  }
}

export default ClinicProfile
