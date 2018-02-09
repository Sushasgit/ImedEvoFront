import React, { Component } from 'react'
import Input from '../customComponents/SearchInput'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from './search-panel.scss'
import generalStyle from '../../common.scss'


class SearchPanel extends Component {
  render () {
    return (
      <div className={`${generalStyle.container} ${styles.search_box}`}>
        <form>
          <Input className={styles.search_box__input} placeholder="Врач, Клиника, Анализ, Процедура"/>

          <button className={styles.search_box__btn}>
            <Icons.IconSearch/>
          </button>
        </form>
      </div>
    )
  }
}

export default SearchPanel