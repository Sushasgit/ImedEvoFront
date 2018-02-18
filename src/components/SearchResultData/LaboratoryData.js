import React from 'react';
import RatingStars from '../customComponents/RatingStars'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SearchResult/search-result.scss'

export default ({ laboratory, index }) => {

  return (
    <article className={styles.doctors}>
      <div className={styles.doctors__info}>
        <img src={require('../../images/default-placeholder.png')} alt="laboratory"/>
        <p className={styles.doctors__position}>Лаборатория:{laboratory.name}</p>
      </div>

      <div className={styles.doctors__main}>
        <div className={styles.h_container}>
          <h2 className={styles.doctors__title}><span>{laboratory.name}</span> </h2>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={laboratory.rating}
          />
          <img src={require('../../images/experiment.png')} alt="laboratory-icon"/>
        </div>

        <p className={styles.doctors_description}>{laboratory.about}</p>
        <div className={styles.h_container}>
         <h3> <Icons.IconMail/>{`${laboratory.email}`}</h3>
          <h3><Icons.IconPhone/> {`${laboratory.phone}`}</h3>
        </div>

        <div className={styles.h_container}>
          <p className={styles.doctors__address}><Icons.IconPlace/>{laboratory.address}</p>
          <p className={styles.doctors__price}><Icons.IconPrice/>Консультация: {laboratory.price} грн</p>
        </div>
      </div>
    </article>
  );
};