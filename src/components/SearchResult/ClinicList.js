import React from 'react';
import ClinicData from './ClinicData';

export default ({ clinics }) => {
  if (!clinics) { return (<p>Loading...</p>); }

  const clinicList = clinics.map((clinic, index) => {
    return (<ClinicData  clinic={clinic} index={index} key={`user-${index}`} />);
  });

  return (
    <div>
      {clinicList}
    </div>
  );
};