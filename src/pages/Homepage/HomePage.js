import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import SliderComponent from '../../components/Slider/BlogComponent'
import Footer from '../../components/Footer/Footer'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import styles from './home-page.scss'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import DoctorsCategories from '../../components/DoctorsCatagories/DoctorsCategories'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard'



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
        <h2 className={styles.title__doctor} style={{textAlign:'center'}}>Ваш доктор</h2>
        <div style={{backgroundColor: '#eaedf2', marginTop: '36px', paddingBottom: '40px', marginBottom: '90px', paddingTop:'40px'}}>
          <DoctorsCard/>
        </div>

        <SliderComponent/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;