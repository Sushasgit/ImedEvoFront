import React from 'react';
import LaboratoryData from '../SearchResultData/LaboratoryData';

export default ({ laboratories }) => {
  if (!laboratories) { return (<p>Loading...</p>); }

  const laboratoriesList = laboratories.map((laboratory, index) => {
    return (<LaboratoryData laboratory={laboratory} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{ height:'700px', overflow:'auto'}}>
      {laboratoriesList}
    </div>
  );
};