import React from 'react';
import DoctorData from '../SearchResultData/DoctorData';
import styles from '../SearchResult/search-result.scss';

export default ({ doctors }) => {

  if (!doctors || doctors.length === 0 ) { return (<p className={styles.title_not_found}>По Вашему запросу ничего не найдено</p>); }

  const doctorsList = doctors.map((doctor, index) => {
    return (<DoctorData doctor={doctor} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'100%', overflow:'auto'}}>
      {doctorsList}
    </div>
  );
};