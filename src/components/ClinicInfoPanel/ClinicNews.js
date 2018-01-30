import React, { Component, Fragment } from 'react'
import styles from './clinic-news.scss'

class ClinicNews extends Component {
  render () {
    return (
      <section className={styles.news}>
        <h2>Новости клиники</h2>
        <p>
          В этом году клиника Into-Sana была зарегистрирована как центр для проведения онлайн теста OLA - первой части
          экзамена для получения Европейского диплома по анестезиологии.
        </p>

        <button className={styles.news__btn}>Читать еще</button>
      </section>
    )
  }
}

export default ClinicNews
