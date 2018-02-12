import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './vacancy.scss'


class Vacancy extends Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <h2 className={styles.vacancy__title}>Наши вакансии</h2>
        <section className={styles.vacancy}>
          <header>
            <img src={require('../../images/growth.png')}  alt="invest-icon"/>
            <h3 className={styles.vacancy__title}>
              Требуется инвестор
            </h3>
          </header>
          <p className={styles.vacancy__subtitle}>
            IMED - это портал для поиска врачей, клиник, это возможность для пользователя найти лучшего специалиста в своем городе.
          </p>
          <footer className={styles.vacancy__footer}>
            <span>Мы ждем тебя)</span>
          </footer>

        </section>
        <Footer/>
      </Fragment>
    )
  }
}

export default Vacancy;
