import React, { Component, Fragment } from 'react'
import styles from './widjets-doctor.scss'
// import ProfileMap from '../Map/ProfileMap'
// import styles from './clinic-profile.scss'
// import RatingStars from '../customComponents/RatingStars'
// import * as FontAwesome from 'react-icons/lib/fa'
// import Footer from '../Footer/Footer'

class WidjetsDoctors extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topDoctors: [
        {
          doctorName:'Елена Дмитриевна',
          doctorLastName:'Биленко',
          position:'Педиатр',
          clinic:'Интосана',
          image:'real-doctor-photo5.png',
          phoneClinic:'(0482) 307-500',
          address:'г. Одесса ул. Варненская, 2',
          time:'08:00 – 20:00'
        },
        {
          doctorName:'Ирина Сергеевна',
          doctorLastName:'Бекало',
          position:'Педиатр',
          image:'real-doctor-photo6.jpg',
          clinic:'Интосана',
          phoneClinic:'(0482) 307-500',
          address:'г. Одесса ул. Варненская, 2',
          time:'08:00 – 20:00'
        },
        {
          doctorName:'Александр Борисович',
          doctorLastName:'Смирнов',
          position:'Cосудистый хирург',
          image:'real-doctor-photo7.jpg',
          clinic:'Одрекс',
          address:'Раскидайловская 69/71',
          phoneClinic:'(048) 752-93-66',
          time:'08:00 – 20:00'
        },
        {
          range: 5,
          address:'г. Одесса ул. Варненская, 2',
          doctorName:'Леонид Владимирович',
          doctorLastName:'Соколов',
          position:'Педиатр',
          image:'real-doctor-photo2.jpg',
          time:'08:00 – 20:00'
        },
        {
          address:'г. Одесса ул. Варненская, 2',
          doctorName:'Людмила Георгиевна',
          doctorLastName:'Малютина',
          position:'Педиатр',
          image:'real-doctor-photo1.jpg',
          time:'08:00 – 20:00'
        },
      ]
    }
  }

  render () {

    return (
      <Fragment>
        {this.state.topDoctors.map((doctor, index) => {
          return (
            <section key={index} className={styles.widjet}>
              <img src={require(`../../images/${doctor.image}`)} alt={doctor.doctorLastName}/>
              <article className={styles.widjet__address}>
                <h3>{`${doctor.doctorName} ${doctor.doctorLastName}`}</h3>
                <ul className={styles.clinic__contacts}>
                  <li>{doctor.clinic}</li>
                  <li>{doctor.address}</li>
                  <li>{doctor.phoneClinic}</li>
                  <li>Пн-Вск: {doctor.time}</li>
                </ul>
              </article>
            </section>
          )
        })}
      </Fragment>
    )

  }
}

export default WidjetsDoctors;
