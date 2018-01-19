import React, { Component } from 'react'
import Input from '../customComponents/SearchInput'
import styles from './search-panel.scss'
import generalStyle from '../../common.scss'


class SearchPanel extends Component {
  render () {
    return (
      <div className={`${generalStyle.container} ${styles.search_box}`}>
        <form>
          <Input className={styles.search_box__input} placeholder="Врач, Клиника, Анализ, Процедура"/>
          <Input className={styles.search_box__input} placeholder="Город, Район, Адрес"/>
          <button className={styles.search_box__btn}>
            <img src={require('../../images/search-button.png')} alt="search-icon"/>
          </button>
        </form>
      </div>
    )
  }
}

export default SearchPanel