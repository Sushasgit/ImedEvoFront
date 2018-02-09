import React, { Component, Fragment } from 'react';
import styles from './clinic-profile.scss'

class ActivityTable extends Component {
  render() {
    return (
      <Fragment>
        <table className={styles.activity__table}>
          <tbody>
          <tr>
            <th>Направления</th>
            <th>Направления</th>
          </tr>
          <tr>
            <td>Гастроэнтерология</td>
            <td>Акушерство и гинекология</td>
          </tr>
          <tr>
            <td>Ангиографические иссл-ия</td>
            <td>Диагностика</td>

          </tr>
          <tr>
            <td>Кардиология</td>
            <td>Компьютерная томография</td>
          </tr>
          <tr>
            <td>Магнітно-резонансна томографія</td>
            <td>Мамографія</td>
          </tr>
          <tr>
            <td>Урологія</td>
            <td>Хірургія</td>
          </tr>
          <tr>
            <td>Неврологія</td>
            <td>Нейрофункціональні досліждення</td>
          </tr>

          <tr>
            <td>Оториноларингологія</td>
            <td>Педіатрія</td>
          </tr>

          <tr>
            <td>Проктологія</td>
            <td>Рентгенографія</td>
          </tr>

          <tr>
            <td>Травматологія и ортопедія</td>
            <td>УЗД</td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default ActivityTable;
