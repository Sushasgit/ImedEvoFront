import React, {Component, Fragment} from 'react';
import styles from './schedule-clinic.scss';

class ClinicSchedule extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.schedule}>
                    <h3 className={styles.title_schedule}>Режим работы</h3>
                    <div className={styles.time}>
                        <p>
                            Понедельник-Пятница
                        </p>

                        <p>
                            8:00-17:00
                        </p>
                    </div>

                    <div className={styles.time}>
                        <p>
                            Суббота
                        </p>
                        <p>
                            9:30-17:30
                        </p>
                    </div>

                    <div className={styles.time}>
                        <p>
                            Воскресенье
                        </p>

                        <p>
                            9:30-15:00
                        </p>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ClinicSchedule;
