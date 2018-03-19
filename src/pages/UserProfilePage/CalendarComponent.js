import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import styles from './profile-data.scss';
import * as Icons from '../../components/SvgIcons/SvgIcons.js';
import {Tooltip} from 'react-lightweight-tooltip';
/* eslint-disable */
import '!style-loader!css-loader!./react-big-calendar.css';
/* eslint-enable */

BigCalendar.momentLocalizer(moment);

class CalendarComponent extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
            events: [],
            appointments: []
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth})
    };

    render() {
        const tooltipRoundedStyle = {
            content: {
                backgroundColor: '#fff',
                color: '#000',

            },
            tooltip: {
                backgroundColor: '#fff',
                borderRadius: '10px',
                border: '1px solid #4775d1'
            },
            arrow: {
                borderTop: 'solid #4775d1 5px',
            },
        };
        const events = this.props.events;
        const {width} = this.state;
        const isMobile = width <= 789;
        const calendarHide = width <= 400;
        if (!calendarHide) {
            if (isMobile) {
                return (
                    <section className={styles.appointment}>
                        {events.length > 0 &&
                        <table className={styles.appointments__table}>
                            <tbody>
                            <tr>
                                <th>Дата</th>
                                <th>Время</th>
                                <th>Подтверждение</th>
                            </tr>
                            {events.map((event, index) =>
                                <tr key={index}>
                                    <td>{event.date}</td>
                                    <td>{event.time}</td>
                                    <td>
                                        {event.approved &&
                                        <Icons.IconProve/>
                                        }

                                        {!event.approved &&
                                        <Tooltip styles={tooltipRoundedStyle}
                                                 content="Запись еще не подтверждена специалистом">
                                            <Icons.IconNotProve/>
                                        </Tooltip>

                                        }
                                    </td>
                                </tr>
                            )}
                            </tbody>

                        </table>
                        }

                        {events.length === 0 &&
                        <h3> У Вас еще нет текущих записей</h3>
                        }
                    </section>
                )
            } else {
                return (
                    <section className={styles.appoinments}>
                        <BigCalendar
                            culture='ru-RU'
                            style={{height: '600px', borderColor: 'blue'}}
                            events={events}
                            messages={{
                                next: 'Следующий',
                                previous: 'Предыдущий',
                                today: 'Сегодня',
                                month: 'месяц',
                                week: 'неделя',
                                day: 'день',
                                agenda: 'расписание',
                                date: 'дата',
                                time: 'время',
                                event: 'событие',
                                allDay: 'весь день'
                            }}
                        />

                        {events.length > 0 &&
                        <table className={styles.appointments__table}>
                            <tbody>
                            <tr>
                                <th>Дата</th>
                                <th>Время</th>
                                <th>Подтверждение</th>
                            </tr>
                            {events.map((event, index) =>
                                <tr key={index}>
                                    <td>{event.date}</td>
                                    <td>{event.time}</td>
                                    <td>
                                        {event.approved &&
                                        <Icons.IconProve/>
                                        }

                                        {!event.approved &&
                                        <Tooltip styles={tooltipRoundedStyle}
                                                 content="Запись еще не подтверждена специалистом">
                                            <Icons.IconNotProve/>
                                        </Tooltip>
                                        }
                                    </td>
                                </tr>
                            )}
                            </tbody>

                        </table>
                        }
                    </section>
                )
            }
        }
    }
}

export default CalendarComponent
