import React, { Component, Fragment } from 'react';
import styles from  './doctor-categories.scss'
import { Link } from 'react-router-dom'
import * as Icons from '../SvgIcons/SvgIcons.js'

class DoctorsCategories extends Component {
  render() {
    return (
      <Fragment>
        <h2 className={styles.title}>Специализации</h2>
        <section className={styles.specialisation}>
          <section className={styles.specialisation__card}>
            <header>
              <img src={require('../../images/senior-woman.png')}/>
              <span className={styles.specialisation__icon}>
                <Icons.IconFamilyDoctor/>
              </span>
            </header>
            <h3 className={styles.specialisation__title}>Семейный доктор</h3>
            <p className={styles.specialisation__description}>
              На сайте вы можете выбрать семейного доктора, узнать сколько стоит прием,
              какие услуги оказывает врач, и записаться на консультацию, осмотр или лечение.
            </p>
            <Link className={styles.specialisation__link} to="/">Перейти</Link>
          </section>

          <section className={styles.specialisation__card}>
            <header>
              <img src={require('../../images/doctor-measuring.png')}/>
              <span className={styles.specialisation__icon}>
                <Icons.IconCardiologist/>
              </span>
            </header>

            <h3 className={styles.specialisation__title}>Кардилог</h3>
            <p className={styles.specialisation__description}>
              На сайте вы можете выбрать взрослого или детского доктора кардиолога, узнать сколько стоит прием,
              какие услуги оказывает врач, и записаться на консультацию, осмотр или лечение.
            </p>
            <Link className={styles.specialisation__link} to="/">Перейти</Link>
          </section>

          <section className={styles.specialisation__card}>
            <header>
              <img src={require('../../images/pediatrisian.png')}/>
              <span className={styles.specialisation__icon}>
                <Icons.IconPediatrician/>
            </span>
            </header>

            <h3 className={styles.specialisation__title}>Педиатр</h3>
            <p className={styles.specialisation__description}>
              На сайте вы можете выбрать педиатра, узнать сколько стоит прием, какие услуги оказывает врач,
              и записаться на консультацию, осмотр или лечение.
            </p>
            <Link className={styles.specialisation__link} to="/">Перейти</Link>
          </section>

          <section className={styles.specialisation__card}>
            <header>
              <img src={require('../../images/doctor-dentist.png')}/>
              <span className={styles.specialisation__icon}>
                <Icons.IconDantist/>
              </span>
            </header>
            <h3 className={styles.specialisation__title}>Стоматолог</h3>
            <p className={styles.specialisation__description}>
              На сайте вы можете выбрать детского или взрослого стоматолога, узнать сколько стоит прием, какие
              услуги оказывает врач, и записаться на консультацию, осмотр или лечение.
            </p>
            <Link className={styles.specialisation__link} to="/">Перейти</Link>
          </section>

          <section className={styles.specialisation__card}>
            <header>
              <img src={require('../../images/service-9.jpg')}/>
              <span className={styles.specialisation__icon}>
                <Icons.IconGinecologiest/>
              </span>
            </header>

            <h3 className={styles.specialisation__title}>Гинеколог</h3>
            <p className={styles.specialisation__description}>
              На сайте вы можете выбрать взрослого или детского гинеколога, узнать сколько стоит прием, какие услуги
              оказывает врач, и записаться на консультацию, осмотр или лечение.
            </p>
            <Link className={styles.specialisation__link} to="/">Перейти</Link>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default DoctorsCategories;
