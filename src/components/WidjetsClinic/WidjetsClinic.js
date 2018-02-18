import React, { Component, Fragment } from 'react'
import styles from './widjets-clinic.scss'
// import ProfileMap from '../Map/ProfileMap'
// import styles from './clinic-profile.scss'
// import RatingStars from '../customComponents/RatingStars'
// import * as FontAwesome from 'react-icons/lib/fa'
// import Footer from '../Footer/Footer'

class WidjetsClinic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topClinics: [
        {
          clinicName: 'Медея',
          range: 5,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72Pv0OtwqTXlvzb1WZcKyfLHygIwn4CY6ZVKUQTqxB0ZoW7cB',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72Pv0OtwqTXlvzb1WZcKyfLHygIwn4CY6ZVKUQTqxB0ZoW7cB',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'https://storage1a.censor.net.ua/images/6/c/e/c/6cec0548c5c06c4912087258cb836927/original.jpg',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'http://i90.fastpic.ru/big/2017/0111/a2/0b7c8e234547cd7c2eb82f1f64f44ea2.png',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'http://i90.fastpic.ru/big/2017/0111/a2/0b7c8e234547cd7c2eb82f1f64f44ea2.png',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'http://i90.fastpic.ru/big/2017/0111/a2/0b7c8e234547cd7c2eb82f1f64f44ea2.png',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'http://i90.fastpic.ru/big/2017/0111/a2/0b7c8e234547cd7c2eb82f1f64f44ea2.png',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          clinicName: 'Одрекс',
          range: 5,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72Pv0OtwqTXlvzb1WZcKyfLHygIwn4CY6ZVKUQTqxB0ZoW7cB',
          address:'1304 Macom DrNaperville, IL, United States 60564'
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
              <img src={clinic.picture}/>
              <article className={styles.widjet__address}>
                <h3>МЦ на Неждановой</h3>
                <ul className={styles.clinic__contacts}>
                  <li>г. Одесса, ул. Варненская, 2</li>
                  <li>(0482) 307-500, (0482) 343 -062</li>
                  <li> into-sana@ukr.net</li>
                  <li>Пн-Вск: 08.00-20.00</li>
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
