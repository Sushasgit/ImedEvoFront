import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import SliderComponent from '../../components/Slider/BlogComponent'
import Footer from '../../components/Footer/Footer'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import styles from './home-page.scss'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import DoctorsCategories from '../../components/DoctorsCatagories/DoctorsCategories'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard'
import axios from 'axios'


class HomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.container__search}>
          <Header/>
          <SearchPanel/>
        </div>

        <NavigationMenu/>
        <DoctorsCategories/>
        <div style={{backgroundColor: '#eaedf2', marginTop: '100px', paddingBottom: '40px', marginBottom: '90px'}}>
          <div className="container">
            <h2 className="title">ВАШ ДОКТОР:</h2>
            <a className="categories-link" href="">Посмотреть всеx врачей</a>
          </div>
          <DoctorsCard/>
        </div>

        <SliderComponent/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;