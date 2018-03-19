import React from 'react';
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SearchResult/search-result.scss'

export default ({ diagnostic, index }) => {

  return (
    <article className={styles.doctors}>
      <div className={styles.doctors__info}>
        <img src={require('../../images/default-placeholder.png')} className="user-image" alt={`diagnostic-${diagnostic.name}`} />
        <p className={styles.doctors__position}>Диагностика:{diagnostic.name}</p>
      </div>

      <div className={styles.doctors__main}>
        <div className={styles.h_container}>
          <h2 className={styles.doctors__title}><span>{diagnostic.name}</span> </h2>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={diagnostic.rating}
          />
          <img src={require('../../images/examination.png')} alt="diagnostic-icon"/>
        </div>

        <p className={styles.doctors_description}>{diagnostic.about}</p>
        <div className={styles.h_container}>
          <h3> <Icons.IconMail/>{`${diagnostic.email}`}</h3>
          <h3><Icons.IconPhone/> {`${diagnostic.phone}`}</h3>
        </div>

        <div className={styles.h_container}>
          <p className={styles.doctors__address}><Icons.IconPlace/>{diagnostic.address}</p>
          <p className={styles.doctors__price}><Icons.IconPrice/>Консультация: {diagnostic.price} грн</p>
        </div>
      </div>

    </article>
  );
};