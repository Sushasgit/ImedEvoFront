import React from 'react';
import DiagnosticsData from '../SearchResultData/DiagnosticData';

export default ({ diagnostics }) => {
  if (!diagnostics) { return (<p>Loading...</p>); }

  const diagnosticList = diagnostics.map((diagnostic, index) => {
    return (<DiagnosticsData diagnostic={diagnostic} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'700px', overflow:'auto'}}>
      {diagnosticList}
    </div>
  );
};