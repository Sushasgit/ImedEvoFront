import React, { Component } from 'react';
import styles from './footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <nav className={styles.footer__nav}>
          <ul>
            <li>
              <h2>Пациентам</h2>
            </li>
            <li>
              <a href="">Log In</a>
            </li>
            <li>
              <a href="">
                Регистрация
              </a>
            </li>
            <li>
              <a href="">Блог</a>
            </li>
            <li>
              <a href="">Помощь</a>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Партнерам</h2>
            </li>
            <li>
              <a href="">Imed для клиник</a>
            </li>
            <li>
              <a href="">
                Log In
              </a>
            </li>
            <li>
              <a href="">Регистрация</a>
            </li>
            <li>
              <a href="">Реклама и продвижение</a>
            </li>
          </ul>

          <ul>
            <li>
              <h2>О нас</h2>
            </li>
            <li>
              <a href="">О компани</a>
            </li>
            <li>
              <a href="">
                Контакты
              </a>
            </li>
            <li>
              <a href="">Вакансии</a>
            </li>
            <li>
              <a href="">Карта сайта</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="">Политика конфиденциальности</a>
            </li>
          </ul>
        </nav>
          <span>Copyright 2017 by Hillel Group. All rights resrved.</span>
      </footer>
    );
  }
}

export default Footer;
