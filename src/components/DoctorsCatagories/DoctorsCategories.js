import React, { Component } from 'react';
import styles from  './doctor-categories.scss'

class DoctorsCategories extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className="title">Специализации</h2>
        <a className="categories-link" href="">Посмотреть все специализации</a>
        <section className={styles.categories}>
          <article className={styles.cards}>
            <a href="">
              <img src={require('../../images/family-doctor-img.png')} alt=""/>
            </a>
            <h2 className={styles.cards__title}>
              Семейный доктор
            </h2>
          </article>

          <article className={styles.cards}>
            <a href="">
              <img src={require('../../images/cardiologist-img.png')} alt=""/>
            </a>
            <h2 className={styles.cards__title}>
             Кардиолог
            </h2>
          </article>
        </section>

        <section className={`${styles.categories} ${styles.search_categories__col3}`}>
        <article className={styles.cards}>
          <a href="">
            <img src={require('../../images/pediatrician-img.png')} alt=""/>
          </a>
          <h2 className={styles.cards__title}>
            Педиатр
          </h2>
        </article>

        <article className={styles.cards}>
          <a href="">
            <img src={require('../../images/dantist-img.png')} alt=""/>
          </a>
          <h2 className={styles.cards__title}>
            Стоматолог
          </h2>
        </article>

        <article className={styles.cards}>
          <a href="">
            <img src={require('../../images/gynecologist-img.png')} alt=""/>
          </a>
          <h2 className={styles.cards__title}>
            Гинеколог
          </h2>
        </article>
        </section>
      </div>
    );
  }
}

export default DoctorsCategories;
