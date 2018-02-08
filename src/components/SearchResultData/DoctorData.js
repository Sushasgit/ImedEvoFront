import React from 'react';
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SearchResult/search-result.scss'
import { Link } from 'react-router-dom'

export default ({ doctor, index }) => {

  return (
    <article className={styles.doctors}>
      <div className={styles.doctors__info}>
        <Link to = {`/doctors/${doctor.id}`}>
        <img src={require('../../images/doctor-profile.png')} className="user-image" alt='doctor-photo'/>
        <p className={styles.doctors__position}>Клиника:{doctor.clinic}</p>
        </Link>
      </div>

      <div className={styles.doctors__main}>
        <div className={styles.h_container}>
          <Link to = {`/doctors/${doctor.id}`}>
            <h2 className={styles.doctors__title}><span>{doctor.user.firstName}</span> <span>{doctor.user.lastName}</span></h2>
          </Link>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={doctor.reting}
          />
        </div>

        <p className={styles.doctors_description}>
          <span className={styles.doctors_description__title}>Направление:</span>
          {doctor.doctorAchievements}
          </p>
        <p className={styles.doctors_description}>
          <span className={styles.doctors_description__title}>Категория:</span>
          {doctor.doctorGualification}
          </p>
        <p className={styles.doctors_description}>
          <span className={styles.doctors_description__title}>
            Образование:
          </span>
          {doctor.education}
        </p>
        <div className={styles.h_container}>
          <a className={styles.doctors__link} href="/">Читать отзывы(39)</a>
          <button className={styles.doctors__btn}>Записаться на прием</button>
        </div>

        <div className={styles.h_container}>
          <p className={styles.doctors__address}>
            <Icons.IconPlace/>
            <span>{doctor.user.city}</span>
            <span>{doctor.user.street}</span>
            <span>{doctor.user.house}</span>
          </p>
          <p className={styles.doctors__price}><Icons.IconPrice/>Консультация: {doctor.price} грн</p>
        </div>
      </div>

    </article>
  );
};