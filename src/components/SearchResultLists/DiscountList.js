import React from 'react';
import DiscountData from '../SearchResultData/DiscountData';

export default ({ discount }) => {
  if (!discount) { return (<p>Loading...</p>); }

  const discountList = discount.map((discount, index) => {
    return (<DiscountData discount={discount} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'700px', overflow:'auto'}}>
      {discountList}
    </div>
  );
};
