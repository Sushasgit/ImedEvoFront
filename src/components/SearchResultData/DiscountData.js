import React from 'react';
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SearchResult/search-result.scss'

export default ({ discount, index }) => {

  return (
    <article className={styles.doctors}>
      <div className={styles.doctors__info}>
        <img src={discount.picture} className="user-image" alt='discount-image'/>
        <p className={styles.doctors__position}>Клиника:{discount.nameClinic}</p>
      </div>

      <div className={styles.doctors__main}>
        <div className={styles.h_container}>
          <h2 className={styles.doctors__title}><span>{discount.nameClinic}</span> </h2>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={discount.range}
          />
        </div>

        <p className={styles.doctors_description}>{discount.about}</p>
        <div className={styles.h_container}>
          <a className={styles.doctors__link} href="/">Читать отзывы(39)</a>
          <button className={styles.doctors__btn}>Записаться на прием</button>
        </div>

        <div className={styles.h_container}>
          <p className={styles.doctors__address}><Icons.IconPlace/>{discount.address}</p>
          <p className={styles.doctors__price}><Icons.IconPrice/>Консультация: {discount.price} грн</p>
        </div>
      </div>

    </article>
  );
};