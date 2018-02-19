import React from 'react';
import DiagnosticsData from '../SearchResultData/DiagnosticData'
import styles from '../SearchResult/search-result.scss'

export default ({ diagnostics }) => {
  if (!diagnostics || diagnostics.length === 0 ) { return (<p className={styles.title_not_found}>По Вашему запросу ничего не найдено</p>); }

  const diagnosticList = diagnostics.map((diagnostic, index) => {
    return (<DiagnosticsData diagnostic={diagnostic} index={index} key={`user-${index}`} />);
  });

  return (
    <div style={{height:'100%', overflow:'auto'}}>
      {diagnosticList}
    </div>
  );
};