import React, { Component, Fragment } from 'react'
import styles from './widjets-doctor.scss'
import * as FontAwesome from 'react-icons/lib/fa'
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
          range: 5,
          address:'1304 Macom DrNaperville, IL, United States 60564',
          doctorName:'Владимир Николаевич',
          doctorLastName:'Войтенко',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShziYt6xgZPa1FJP-5MTIGbzeuge4jrqb9P4Wq60digp3YDSUT4g'
        },
        {
          address:'1304 Macom DrNaperville, IL, United States 60564',
          doctorName:'Татьяна Анатольевна',
          doctorLastName:'Долгушина',
          position:'Педиатр',
          image:'https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg'
        },
        {
          doctorName:'Елена Игоревна',
          doctorLastName:'Евтушенко',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-suGSy7c18MU6PhTpd7wKVPYdXXOrcz3FdijbAByPXUnANsTOg',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          doctorName:'Елена Владимировна',
          doctorLastName:'Марчук',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Sf2xYJtQHyFfMHb9IPQ6xm_lRqqlWmFcjOlzDAInE3i1MfnFw',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          doctorName:'Елена Владимировна',
          doctorLastName:'Марчук',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Sf2xYJtQHyFfMHb9IPQ6xm_lRqqlWmFcjOlzDAInE3i1MfnFw',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          doctorName:'Елена Владимировна',
          doctorLastName:'Марчук',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Sf2xYJtQHyFfMHb9IPQ6xm_lRqqlWmFcjOlzDAInE3i1MfnFw',
          address:'1304 Macom DrNaperville, IL, United States 60564'
        },
        {
          doctorName:'Елена Владимировна',
          doctorLastName:'Марчук',
          position:'Педиатр',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Sf2xYJtQHyFfMHb9IPQ6xm_lRqqlWmFcjOlzDAInE3i1MfnFw',
          address:'1304 Macom DrNaperville, IL, United States 60564'
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
              <img src={doctor.image}/>
              <article className={styles.widjet__address}>
                <h3>{`${doctor.doctorName} ${doctor.doctorLastName}`}</h3>
                <ul className={styles.clinic__contacts}>
                  <li><FontAwesome.FaMapMarker />г. Одесса, ул. Варненская, 2</li>
                  <li><FontAwesome.FaPhone />(0482) 307-500, (0482) 343 -062</li>
                  <li><FontAwesome.FaEnvelope /> into-sana@ukr.net</li>
                  <li><FontAwesome.FaClockO />Пн-Вск: 08.00-20.00</li>
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
