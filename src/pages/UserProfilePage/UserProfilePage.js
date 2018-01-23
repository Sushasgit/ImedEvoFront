import React, { Component, Fragment } from 'react';
import styles from './user-page.scss'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
BigCalendar.momentLocalizer(moment)
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard'
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard'
import ProfileData from './ProfileData'
import Footer from '../../components/Footer/Footer'


class UserProfilePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lat:46.4632302,
      lng: 30.6895109
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
      <Fragment>

        <header className={styles.logo}>
          <a href="">
            <img src={require('../../images/logo.png')} alt="logo"/>
            IMED
          </a>
        </header>

      </Fragment>
    );
  }
}

export default UserProfilePage ;
