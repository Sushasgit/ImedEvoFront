import React from 'react';
import ClinicData from '../SearchResultData/ClinicData';
import styles from '../SearchResult/search-result.scss'

export default ({ clinics }) => {
  if (!clinics || clinics.length === 0 ) { return (<p className={styles.title_not_found}>По Вашему запросу ничего не найдено</p>); }

  const clinicList = clinics.map((clinic, index) => {
    return (<ClinicData  clinic={clinic} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'100%', overflow:'auto'}}>
      {clinicList}
    </div>
  );
};