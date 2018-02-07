import React, { Component, Fragment } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
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
    const events =[{
      id: 0,
      title: 'Интосана 13:00 Долгушина Е.А',
      allDay: true,
      start: new Date(2018, 2, 0),
      end: new Date(2018, 2, 1),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
      {
        id: 1,
        title: 'Интосана 12:00 Биленко А.А',
        allDay: true,
        start: new Date(2018, 2, 2),
        end: new Date(2018, 2, 3),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
      },
      {
        id: 2,
        title: 'Интосана 09:00 Биленко А.А',
        allDay: true,
        start: new Date(2018, 2, 12),
        end: new Date(2018, 2, 13),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
      }
    ]

    const theme = {
      accentColor: '#4775d1',
      floatingNav: {
        background: 'rgba(56, 87, 138, 0.94)',
        chevron: '#FFA726',
        color: '#FFF',
      },
      headerColor: '#4775d1',
      selectionColor: '#fff',
      textColor: {
        active: '#FFA726',
        default: '#333',
      },
      todayColor: '#FFA726',
      weekdayColor: '#559FFF',
    };

    const { width } = this.state;
    const isMobile = width <= 789;
    const calendarHide = width <= 400;
    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    if(!calendarHide){
      if (isMobile) {
        return (
          <section className={styles.appointment}>
            <InfiniteCalendar
              className={styles.mobile_calendar}
              width={360}
              height={200}
              selected={today}
              minDate={lastWeek}
              theme={theme}
              displayOptions={{
                layout: 'portrait',
                showOverlay: false,
                shouldHeaderAnimate: false
              }}
            />

            <table className={styles.appointment__table}>
              <tbody>
              <tr>
                <th>Дата</th>
                <th>Время</th>
                <th>Доктор</th>
              </tr>
              <tr>
                <td>10.02.2017</td>
                <td>9:00</td>
                <td>Биленко А.А</td>
              </tr>
              <tr>
                <td>11.02.2017</td>
                <td>10:00</td>
                <td>Биленко А.А</td>
              </tr>
              <tr>
                <td>11.02.2017</td>
                <td>11:00</td>
                <td>Биленко А.А</td>
              </tr>
              </tbody>

            </table>
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
        <table style={{marginTop:'0'}} className={styles.appointment__table}>
          <tbody>
          <tr>
            <th>Дата</th>
            <th>Время</th>
            <th>Доктор</th>
          </tr>
          <tr>
            <td>10.02.2017</td>
            <td>9:00</td>
            <td>Биленко А.А</td>
          </tr>
          <tr>
            <td>11.02.2017</td>
            <td>10:00</td>
            <td>Биленко А.А</td>
          </tr>
          <tr>
            <td>11.02.2017</td>
            <td>11:00</td>
            <td>Биленко А.А</td>
          </tr>
          </tbody>
        </table>
        </section>
      )
    }
  }
}

export default CalendarComponent;
