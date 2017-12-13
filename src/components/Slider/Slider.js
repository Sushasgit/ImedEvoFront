import React, { Component } from 'react'
import Slider from 'react-slick'
import ArrowLeft from '../../images/arrow-left.png'
import ArrowRight from '../../images/arrow-right.png'
import './style-slider.css'

function SampleNextArrow (props) {

  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', content: `url(${ArrowRight})`, height: '48px', width: '25px'}}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', content: `url(${ArrowLeft})`, height: '48px', width: '25px'}}
      onClick={onClick}
    />
  )
}

class SliderComponent extends Component {
  render () {
    let settings = {
      className: 'slider__wrapper',
      dots: false,
      adaptiveHeight:true,
      infinite: true,
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,

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
      <div className='slider'>
        <span className='slider__hr'/>
        <Slider {...settings}>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Мультивитамины:
                польза или вред?</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img2.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Отложение солей - миф?</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img3.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                fbutton cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
          <div>
            <div className='blog-preview'>
              <h2 className='blog-preview__header'>Здоровое питание</h2>
              <div className='blog-preview__img-wrapper'>
                <img src={require('../../images/img1.png')} alt='' className='blog-preview__img'/>
              </div>
              <p className='blog-preview__text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <button className='blog-preview__btn'>Читать</button>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default SliderComponent