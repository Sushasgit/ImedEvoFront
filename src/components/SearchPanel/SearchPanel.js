import React, { Component } from 'react'
import Input from '../customComponents/SearchInput'
import './search-panel.css'



class SearchPanel extends Component {
  render () {
    return (
      <div className="container search-box">
        <form>
          <Input className="search-box__input" placeholder="Врач, Клиника, Анализ, Процедура"/>
          <Input className="search-box__input" placeholder="Город, Район, Адрес"/>
          <button className="search-box__btn">
            <img src={require('../../images/search-button.png')}/>
          </button>
        </form>
      </div>
    )
  }
}

export default SearchPanel