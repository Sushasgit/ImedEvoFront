import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as constants from '../../constants/constants'
import styles from './blog.scss'

class BlogComponent extends Component {
  render () {

    return (
        <section className={`container ${styles.blog}`}>
          <article className={styles.article}>
            <h2 className={styles.article__headline}>
              Аллергия на холод
            </h2>
            <img className={styles.article__img} src={require('../../images/allergy.jpg')}  alt=""/>
            <p className={styles.article__description}>
              Детская кожа у детей нежнее и тоньше, чем у взрослых, поэтому реагирует на холод быстрее и дольше.
            </p>
            <Link to="/blog" className={styles.article__btn}>Читать дальше</Link>
          </article>

          <article className={styles.article}>
            <h2 className={styles.article__headline}>
              Как пережить жару будущей маме?
            </h2>
            <img className={styles.article__img} src={require('../../images/pregnancy.jpg')}  alt=""/>
            <p className={styles.article__description}>
              Летняя жара доставляет немало хлопот даже тем беременным, которые знают о токсикозе только от подруг. Во многих случаях...
            </p>
            <Link to="/blog" className={styles.article__btn}>Читать дальше</Link>
          </article>

          <article className={styles.article}>
            <h2 className={styles.article__headline}>
              Зубы мудрости: лечить или удалять
            </h2>
            <img className={styles.article__img} src={require('../../images/teeth.jpg')}  alt=""/>
            <p className={styles.article__description}>
              Лабораторная диагностика необходима медицине как важнейший источник информации об организме
            </p>
            <Link to="/blog" className={styles.article__btn}>Читать дальше</Link>
          </article>

        </section>
    )
  }
}

export default BlogComponent
