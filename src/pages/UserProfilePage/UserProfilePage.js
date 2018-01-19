import React, { Component } from 'react';
import styles from '../../pages/Homepage/home-page.scss'
import logoStyles from '../../pages/SearchResultPage/search-page.scss'
import profileStyles from './user-page.scss'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
BigCalendar.momentLocalizer(moment)
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard'
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard'
import ProfileData from './ProfileData'
import Footer from '../../components/Footer/Footer'


class UserProfilePage extends Component {
constructor (props){
  super(props)
  state:{

  }
}
  render() {
 const events =[{
      allDay: true,
      end: 'Sat Jan 18 2018 02:00:00 GMT+0300 (EEST)',
      start:'Fri Jan 18 2018 19:30:00 GMT+0300 (EEST)',
      title:"Интосана 12:00 Янова О.О ",
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    }]
    return (
      <div className={profileStyles.profile}>
        <div style={{paddingBottom:'0'}} >
          <div   className={profileStyles.container__profile}>
            <div className={logoStyles.logo__container}>
              <a style={{paddingBottom:'50px'}} className={logoStyles.logo} href="">
                <img src={require('../../images/logo.png')} alt="logo"/>
                IMED
              </a>
            </div>
        </div>
      </div>
        <h2 className={profileStyles.profile__title}>Личный кабинет клиента </h2>
        <section className={profileStyles.data}>
          <article className={profileStyles.data__user_photo}>
            <header className={profileStyles.h__header}/>
            <img className={profileStyles.user_photo} src="http://placehold.it/170x120"/>
          </article>

          <article className={profileStyles.data__information}>
            <h3 className={profileStyles.data__title}>Личные данные</h3>
            <div className={profileStyles.data__personal}>
              <ProfileData/>
            </div>
          </article>
        </section>

        <section className={profileStyles.data}>
          <article className={profileStyles.data__user_photo}>
            <header className={profileStyles.h__header}/>
          </article>

          <article className={profileStyles.data__information}>
            <h3 className={profileStyles.data__title}>Текущие записи</h3>
            <div className={profileStyles.data__personal}>
              <BigCalendar
                style={{height: '600px',padding:'40px',borderColor:'blue'}}
                events={events}
                messages={{next:"Следующий",previous:"Предыдущий",today:"Сегодня", month:'месяц', week:'неделя', day:'день', agenda:'расписание'}}
              />
            </div>
          </article>
        </section>
        <section className={profileStyles.data}>
          <article className={profileStyles.data__user_photo}>
            <header className={profileStyles.h__header}/>
          </article>

          <article className={profileStyles.data__information}>
            <h3 className={profileStyles.data__title}>Избранные специалисты</h3>
            <div style={{marginTop:'30px'}} className={profileStyles.data__personal}>
              <DoctorsCard/>
            </div>
          </article>
        </section>

        <section className={profileStyles.data}>
          <article className={profileStyles.data__user_photo}>
            <header className={profileStyles.h__header}/>
          </article>

          <article className={profileStyles.data__information}>
            <h3 className={profileStyles.data__title}>Отзывы</h3>
            <div style={{marginTop:'30px',padding:'20px'}} className={profileStyles.data__personal}>
              <FeedbackCard/>
            </div>
          </article>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default UserProfilePage ;
