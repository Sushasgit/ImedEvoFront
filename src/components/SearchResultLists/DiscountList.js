import React from 'react';
import DiscountData from '../SearchResultData/DiscountData'
import styles from '../SearchResult/search-result.scss'

export default ({ discounts }) => {
  console.log(discounts)
  if (!discounts || discounts.length === 0 ) { return (<p className={styles.title_not_found}>По Вашему запросу ничего не найдено</p>); }
  const discountList = discounts.map((discounts, index) => {
    return (<DiscountData discounts={discounts} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'100%', overflow:'auto'}}>
      {discountList}
    </div>
  );
};
