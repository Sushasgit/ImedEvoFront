import React, { Component, Fragment } from 'react'
import styles from './widjets-clinic.scss'
import RatingStars from '../customComponents/RatingStars'


class WidjetsClinic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topClinics: [
        {
          clinicName: 'Медея',
          range: 5,
          picture: 'medea-logo.png',
          address:'ул. Армейская, 11 корп. 7, оф. 1'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'odreks-logo.png',
          address:'Одесса, Раскидайловская, 69/71'
        },
        {
          clinicName: 'Клиника Святой Екатерины',
          range: 5,
          picture: 'ekaterina-logo.jpg',
          address:'проспект Шевченка, 12/1, Одеса, Одеська область, 65082'
        },
        {
          clinicName: 'Интосана',
          range: 5,
          picture: 'intosana-logo.png',
          address:'г. Одеса ул. Варненская, 2',
          time:'08:00 – 20:00'
        },
        {
          clinicName: 'Виртус',
          range: 5,
          picture: 'virtus-logo.jpg',
          address:'Одесса, Судостроительная, 3',
          time:'08:00 – 20:00'
        },
      ]
    }
  }

  render () {

    return (
      <Fragment>
        {this.state.topClinics.map((clinic, index) => {
          return (
            <section key={index} className={styles.widjet}>
              <img src={require(`../../images/${clinic.picture}`)} alt={clinic.clinicName}/>
              <article className={styles.widjet__address}>
                <h3>{clinic.clinicName}</h3>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="30px"
                  starSpacing='0px'
                  isSelectable={true}
                  rating={clinic.range}
                />
                <ul className={styles.clinic__contacts}>
                  <li>{clinic.address}</li>
                  <li>{clinic.time}</li>
                </ul>
              </article>
            </section>
          )
        })}
      </Fragment>
    )

  }
}

export default WidjetsClinic;
