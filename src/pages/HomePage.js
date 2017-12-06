import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'

class HomePage extends Component {
  render() {
    return (
    <div>
    	<Header/>
      <Slider/>
      <Footer/>
    </div>
    );
  }
}

export default HomePage;