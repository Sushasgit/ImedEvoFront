import React from 'react';
import DiscountData from '../SearchResultData/DiscountData'
import styles from '../SearchResult/search-result.scss'

export default ({ discount }) => {
  if (!discount || discount.length === 0) { return (<p className={styles.title_not_found}>По Вашему запросу ничего не найдено</p>); }

  const discountList = discount.map((discount, index) => {
    return (<DiscountData discount={discount} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'700px', overflow:'auto'}}>
      {discountList}
    </div>
  );
};
