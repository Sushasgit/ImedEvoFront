import React, { Component } from 'react'
import styles from './footer.scss'
import { Link } from 'react-router-dom'
import SignUpModal from '../SignUpModal/SignUpModal'
import SignInModal from '../SignInModal/SignInModal'

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
              <SignInModal/>
            </li>
            <li>
             <SignUpModal/>
            </li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/help">Помощь</Link>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Партнерам</h2>
            </li>
            <li>
              <Link to="/forClinic">IMED для клиник</Link>
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
              <a href="">О компании</a>
            </li>
            <li>
              <a href="">
                Контакты
              </a>
            </li>
            <li>
              <a href="">Вакансии</a>
            </li>
          </ul>

          <ul style={{alignSelf:'center'}}>
            <li>
              <Link to ="/rules">Правила сервиса</Link>
            </li>
            <li>
              <Link to="/privacy">Политика конфиденциальности</Link>
            </li>
          </ul>
        </nav>
          <span>Copyright 2018 by Hillel Group. All rights resrved.</span>
      </footer>
    );
  }
}

export default Footer;
