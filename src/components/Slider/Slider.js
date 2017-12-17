import React, { Component } from 'react'
import Slider from 'react-slick'
import './style-slider.css'



class SliderComponent extends Component {
  render () {
    let settings = {
      className: 'slider__wrapper',
      dots: false,
      infinite: true,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1,

      initialSlide: 0,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    }

    return (
      <div style={{backgroundColor:"#f4f4f4",padding:'80px 0'}}>
        <div className="container">
          <h2 className="doctor-categories-title">Специализации</h2>
          <a className="doctor-categories-link" href="#">Посмотреть все специализации</a>
        </div>

      <div className='slider'>
        <Slider {...settings}>

          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img1.png')} alt='' className='blog-preview__img'/>
              </div>

              <p className='blog-preview__text'>
                Здоровый образ жизни человека, направленный на профилактику болезней и укрепление здоровья
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Мультивитамины:
                польза или вред?</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img2.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Диетология направлена на рационализацию и индивидуализацию питания, но в первую очередь — на обеспечение безопасности питания.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Отложение солей - миф?</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img3.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Область медицины, изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Область медицины, изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Область медицины, изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/slider-img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Область медицины, изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    )
  }
}

export default SliderComponent