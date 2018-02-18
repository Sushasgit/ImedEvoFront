import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MapAboutUs from '../../components/Map/MapAboutUs'
import styles from './about-us.scss'

class AboutUs extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Fragment>
        <Header/>
        <section className={styles.about_us}>
          <div className={styles.about_us__banner_info}>
            <h5>Заботимся о главном</h5>
            <p>
              Основная задача нашего проекта – сделать процесс записи к врачу максимально прозрачным, удобным и быстрым.
              Ежедневно команда экспертов своего дела, старается сделать невозможное для того, чтобы у наших пациентов
              была возможность получать только самые качественные услуги от высококвалифицированных специалистов.
            </p>
          </div>
        </section>

        <section className={styles.about_us__info}>
          <h5>Хорошие врачи стали доступней</h5>
          <p>
            IMED — это сервис по поиску врачей. Мы стремимся помочь людям оперативно найти хорошего доктора и
            записаться к нему на приём. Для этого мы создали базу врачей, собираем отзывы у пациентов после приёма и
            публикуем их на сайте. Мы предоставляем максимально подробную информацию о специалисте (опыт, квалификация,
            специализация, расписание), которая формирует его рейтинг.
          </p>
        </section>

        <section className={styles.about_us__advantages}>
          <div className={styles.about_us__advantages_item}>
            <img src={require('../../images/clock.png')} alt="clock-icon"/>
            <h3>ЭКОНОМИЯ ВРЕМЕНИ</h3>
            <p>Благодаря актуальному расписанию вы можете записаться на приём в удобное для вас время</p>
          </div>

          <div className={styles.about_us__advantages_item}>
            <img src={require('../../images/review.png')} alt="review-icon"/>
            <h3>НАСТОЯЩИЕ ОТЗЫВЫ</h3>
            <p>IMED публикует проверенные отзывы пациентов, которые помогут вам найти нужного специалиста.</p>
          </div>

          <div className={styles.about_us__advantages_item}>
            <img src={require('../../images/discount.png')} alt="discount-icon"/>
            <h3>ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</h3>
            <p>Запись на приём с помощью IMED теперь не только удобнее, но и выгоднее, чем в клинике.</p>
          </div>
        </section>
        <h5  className={styles.about_us_title}>Нас можно  найти здесь:</h5>
        <MapAboutUs />
        <Footer/>
      </Fragment>
    )
  }
}

export default AboutUs;
