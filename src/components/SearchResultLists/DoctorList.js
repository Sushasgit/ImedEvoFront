import React, {Fragment} from 'react';
import DoctorData from '../SearchResultData/DoctorData';

export default ({ doctors }) => {
  if (!doctors) { return (<p>Loading...</p>); }

  const doctorsList = doctors.map((doctor, index) => {
    return (<DoctorData doctor={doctor} index={index} key={`user-${index}`} />);
  });

  return (
   <Fragment>
      {doctorsList}
   </Fragment>
  );
};