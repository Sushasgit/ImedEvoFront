import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from  './doctor-cards.scss'
import * as constants from '../../constants/constants'
import RatingStars from '../customComponents/RatingStars'
import AppointmentModal from '../AppointmentForm/AppointmentModal'

class DoctorsCard extends Component {
  render () {
    return (
      <Fragment>
        <div className="container">
          <div className={`container ${styles.widjet}`}>
            {constants.TestDoctorsCards.map((doctor, index) =>
              <article key={index} className={styles.widjet__doctor}>
                <div className={styles.widjet__description}>
                  <img src={require(`../../images/${doctor.image}`)} alt={doctor.lastName}/>
                  <p>
                    «Грамотный специалист, помогла справиться с атопическим дерматитом за 2 недели.
                    Прекрасно находит общий язык с детьми, даже с таким непоседой как наш Павлик...»
                  </p>
                </div>

                <div className={styles.widjet__rate}>
                  <h3 className={styles.widjet__name}>{doctor.lastName} <p>{doctor.firstName}</p></h3>
                  <div className={styles.widjet__position}>
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
                  <AppointmentModal data={doctor}/>
                </div>
              </article>
            )}
          </div>
        </div>
        <Link className={styles.link__all} to="/doctors"> Посмотреть все специализации</Link>
      </Fragment>
    )
  }
}

export default DoctorsCard;