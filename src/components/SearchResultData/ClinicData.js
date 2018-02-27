import React from 'react';
import * as Icons from '../SvgIcons/SvgIcons.js'
import RatingStars from '../customComponents/RatingStars'
import styles from  '../SearchResult/search-result.scss'
import { Link } from 'react-router-dom'
import AppointmentClinicModal from '../AppointmentForm/AppointmentClinicModal'

export default ({ clinic, index }) => {
  return (
    <article className={styles.clinic}>

      <div className={styles.clinic__info}>
        <Link to = {`/clinics/${clinic.id}`}>
        <img src={require('../../images/placeholder-clinic.png')} className="user-image" alt="clinic-photo"/>
        <p className={styles.clinic__address}><Icons.IconPlace/>{clinic.address}</p>
        <p className={styles.clinic__hours}><Icons.IconTime/>{clinic.workingHours}</p>
        </Link>
      </div>

      <div className={styles.clinic__main}>
        <div className={styles.h_container}>
          <Link className={styles.clinic__title} to = {`/clinics/${clinic.id}`}>
             Клиника: {clinic.clinicName}
          </Link>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={clinic.rating}
          />
        </div>
        <p className={styles.clinic_description}>
          {clinic.description}
        </p>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <Link to = {`/clinics/${clinic.id}`}>Подробнее</Link>
          <AppointmentClinicModal data={clinic}/>
        </div>

      </div>
    </article>

  );
};
