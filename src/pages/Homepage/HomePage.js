import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import SliderComponent from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import './home-page.css'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import DoctorsCategories from '../../components/DoctorsCatagories/DoctorsCategories'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard'

class HomePage extends Component {
  render() {
    return (
    <div>
      <div className="container-search">
        <Header/>
        <SearchPanel/>

      </div>
      <NavigationMenu/>
      <DoctorsCategories/>
      <DoctorsCard/>

      <SliderComponent/>
      <Footer/>
    </div>
    );
  }
}

export default HomePage;