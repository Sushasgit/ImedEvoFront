import React from 'react'
import LaboratoryData from '../SearchResultData/LaboratoryData'
import styles from '../SearchResult/search-result.scss'

export default ({laboratories}) => {
  if (!laboratories || laboratories.length === 0) { return (<p className={styles.title_not_found}> По Вашему запросу ничего не найдено</p>) }

  const laboratoriesList = laboratories.map((laboratory, index) => {
    return (<LaboratoryData laboratory={laboratory} index={index} key={`user-${index}`}/>)
  })

  return (
    <div style={{height: '100%', overflow: 'auto'}}>
      {laboratoriesList}
    </div>
  )
};