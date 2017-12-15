import React, { Component } from 'react';
import './doctor-cards.css'
import RatingStars from '../customComponents/RatingStars'

class DoctorsCard extends Component {
  render() {
    return (
      <div className="container">
        <article className="doctor-widjet">
          <div className="doctor-widjet__description">
            <img src={require('../../images/doctor-photo.png')} alt=''/>
            <p>
              «Грамотный специалист, помогла справиться с атопическим дерматитом за 2 недели.
              Прекрасно находит общий язык с детьми, даже с таким непоседой как наш Павлик...»
            </p>
          </div>

          <div className="doctor-widjet__rate">
            <h3 className="doctor-widjet__name">Долгушина Елена Игоревна</h3>
            <span>Педиатр</span>
            <RatingStars
              starSelectingHoverColor="rgb(249, 215, 73)"
              starRatedColor="rgb(249, 215, 73)"
              starWidthAndHeight="20px"
              starSpacing='0px'
              isSelectable={false}
              rating={3}/>

          <table>
          <tr>
            <td>Пунктуальность</td>
            <td>
              <RatingStars
                starRatedColor="rgb(78, 179, 237)"
                starWidthAndHeight="20px"
                starSpacing='0px'
                rating={4}/>
            </td>
          </tr>
          <tr>
            <td>Вежливость</td>
            <td>
              <RatingStars
                starRatedColor="rgb(78, 179, 237)"
                starWidthAndHeight="20px"
                starSpacing='0px'
                rating={2}/>
            </td>
          </tr>
          <tr>
            <td>Доброжелательность</td>
            <td>
              <RatingStars
                starRatedColor="rgb(78, 179, 237)"
                starWidthAndHeight="20px"
                starSpacing='0px'
                rating={3}/>
            </td>
          </tr>
            <tr>
              <td>Помог(ла)решить проблему</td>
              <td>
                <RatingStars
                  starRatedColor="rgb(78, 179, 237)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  rating={3}/>
              </td>
            </tr>
        </table>
          <button> Записаться на прием</button>
          </div>
      </article>

        <article className="doctor-widjet">
          <div className="doctor-widjet__description">
            <img src={require('../../images/doctor-photo.png')} alt=''/>
            <p>
              «Грамотный специалист, помогла справиться с атопическим дерматитом за 2 недели.
              Прекрасно находит общий язык с детьми, даже с таким непоседой как наш Павлик...»
            </p>
          </div>

          <div className="doctor-widjet__rate">
            <h3 className="doctor-widjet__name">Долгушина Елена Игоревна</h3>
            <span>Педиатр</span>
            <RatingStars
              starSelectingHoverColor="rgb(249, 215, 73)"
              starRatedColor="rgb(249, 215, 73)"
              starWidthAndHeight="20px"
              starSpacing='0px'
              isSelectable={false}
              rating={3}/>

            <table>
              <tr>
                <td>Пунктуальность</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={4}/>
                </td>
              </tr>
              <tr>
                <td>Вежливость</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={2}/>
                </td>
              </tr>
              <tr>
                <td>Доброжелательность</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={3}/>
                </td>
              </tr>
              <tr>
                <td>Помог(ла)решить проблему</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={3}/>
                </td>
              </tr>
            </table>
            <button> Записаться на прием</button>
          </div>
        </article>

        <article className="doctor-widjet">
          <div className="doctor-widjet__description">
            <img src={require('../../images/doctor-photo.png')} alt=''/>
            <p>
              «Грамотный специалист, помогла справиться с атопическим дерматитом за 2 недели.
              Прекрасно находит общий язык с детьми, даже с таким непоседой как наш Павлик...»
            </p>
          </div>

          <div className="doctor-widjet__rate">
            <h3 className="doctor-widjet__name">Долгушина Елена Игоревна</h3>
            <span>Педиатр</span>
            <RatingStars
              starSelectingHoverColor="rgb(249, 215, 73)"
              starRatedColor="rgb(249, 215, 73)"
              starWidthAndHeight="20px"
              starSpacing='0px'
              isSelectable={false}
              rating={3}/>

            <table>
              <tr>
                <td>Пунктуальность</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={4}/>
                </td>
              </tr>
              <tr>
                <td>Вежливость</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={2}/>
                </td>
              </tr>
              <tr>
                <td>Доброжелательность</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={3}/>
                </td>
              </tr>
              <tr>
                <td>Помог(ла)решить проблему</td>
                <td>
                  <RatingStars
                    starRatedColor="rgb(78, 179, 237)"
                    starWidthAndHeight="20px"
                    starSpacing='0px'
                    rating={3}/>
                </td>
              </tr>
            </table>
            <button> Записаться на прием</button>
          </div>
        </article>

      </div>
    );
  }
}

export default DoctorsCard;
