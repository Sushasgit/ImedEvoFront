import React, { Component, Fragment } from 'react';
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import styles from './profile-data.scss'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.momentLocalizer(moment)

class CalendarComponent extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const events =[];
    const { width } = this.state;
    const isMobile = width <= 789;
    const calendarHide = width <= 400;
    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    if(!calendarHide){
      if (isMobile) {
        return (
          <section className={styles.appointment}>
            <h3> У Вас еще нет текущих записей</h3>
          </section>

        );
      }  else {
        return (
          <BigCalendar
            style={{height: '600px',borderColor:'blue'}}
            events={events}
            messages={{
              next:"Следующий",
              previous:"Предыдущий",
              today:"Сегодня",
              month:'месяц',
              week:'неделя',
              day:'день',
              agenda:'расписание'
            }}
          />
        );
      }
    } else{
      return (
        <section className={styles.appointment}>
          <h3> У Вас еще нет текущих записей</h3>
        </section>
      )
    }
  }
}

export default CalendarComponent;
