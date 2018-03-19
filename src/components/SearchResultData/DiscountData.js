import React from 'react';
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SearchResult/search-result.scss'

export default ({ discounts, index }) => {

  return (
    <article className={styles.doctors}>
      <div className={styles.doctors__info}>
        <img src={require('../../images/default-placeholder.png')} className="user-image" alt={`discount-${discounts.name}`}/>
        <p className={styles.doctors__position}>Акция:{discounts.name}</p>
      </div>

      <div className={styles.doctors__main}>
        <div className={styles.h_container}>
          <h2 className={styles.doctors__title}><span>{discounts.name}</span> </h2>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={discounts.range}
          />
        </div>

        <p className={styles.doctors_description}>{discounts.description}</p>
        <div className={styles.h_container}>
          {/*<button className={styles.doctors__btn}>Записаться на прием</button>*/}
        </div>

        <div className={styles.h_container}>
          <p className={styles.doctors__address}> Скидка:{discounts.discount}</p>
          <p className={styles.doctors__price}><Icons.IconPrice/>Стоимость: {discounts.price} грн</p>
        </div>
      </div>

    </article>
  );
};