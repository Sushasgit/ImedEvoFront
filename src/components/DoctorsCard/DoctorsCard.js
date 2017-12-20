import React, { Component } from 'react'
import './doctor-cards.css'
import * as constants from '../../constants/constants'
import RatingStars from '../customComponents/RatingStars'

class DoctorsCard extends Component {
  render () {
    return (
      <div style={{backgroundColor: '#e8e8e8', marginTop: '100px', paddingBottom: '40px'}}>
        <div className="container">
          <h2 className="doctor-widjet-title">ВАШ ДОКТОР:</h2>
          <a className="doctor-widjet-link" href="">Посмотреть всеx врачей</a>
          <div className="container container--widjet">
            {constants.TestDoctorsCards.map((doctor, index) =>
              <article key={index} className="doctor-widjet">
                <div className="doctor-widjet__description">
                  <img src={require('../../images/doctor-photo.png')} alt=''/>
                  <p>
                    «Грамотный специалист, помогла справиться с атопическим дерматитом за 2 недели.
                    Прекрасно находит общий язык с детьми, даже с таким непоседой как наш Павлик...»
                  </p>
                </div>

                <div className="doctor-widjet__rate">
                  <h3 className="doctor-widjet__name">Долгушина <p>Елена Игоревна</p></h3>
                  <div className="doctor-widjet__position">
                    <span>Педиатр</span>
                    <RatingStars
                      starSelectingHoverColor="rgb(249, 215, 73)"
                      starRatedColor="rgb(249, 215, 73)"
                      starWidthAndHeight="20px"
                      starSpacing='0px'
                      isSelectable={true}
                      rating={3}
                    />
                  </div>

                  <table>
                    <tbody>
                    <tr>
                      <td>Пунктуальность</td>
                      <td/>
                      <td>
                        <RatingStars
                          starRatedColor="rgb(78, 179, 237)"
                          starWidthAndHeight="20px"
                          starSpacing='0px'
                          isSelectable={false}
                          rating={4}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Вежливость</td>
                      <td/>
                      <td>
                        <RatingStars
                          starRatedColor="rgb(78, 179, 237)"
                          starWidthAndHeight="20px"
                          starSpacing='0px'
                          isSelectable={false}
                          rating={2}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Доброжелательность</td>
                      <td/>
                      <td>
                        <RatingStars
                          starRatedColor="rgb(78, 179, 237)"
                          starWidthAndHeight="20px"
                          starSpacing='0px'
                          isSelectable={false}
                          rating={3}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Помог(ла)решить проблему</td>
                      <td/>
                      <td>
                        <RatingStars
                          starRatedColor="rgb(78, 179, 237)"
                          starWidthAndHeight="20px"
                          starSpacing='0px'
                          isSelectable={false}
                          rating={3}/>
                      </td>
                    </tr>
                    </tbody>

                  </table>
                  <button> Записаться на прием</button>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default DoctorsCard
