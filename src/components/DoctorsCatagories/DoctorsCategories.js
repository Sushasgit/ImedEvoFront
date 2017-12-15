import React, { Component } from 'react';
import './doctor-categories.css'

class DoctorsCategories extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="doctor-categories-title">Специализации</h2>
        <a className="doctor-categories-link" href="#">Посмотреть все специализации</a>
        <section className="container-categories">
          <article className="doctor-cards">
            <a href="#">
              <img src={require('../../images/family-doctor-img.png')} alt=""/>
            </a>
            <h2 className="doctor-cards__title">
              Семейный доктор
            </h2>
          </article>

          <article className="doctor-cards">
            <a href="#">
              <img src={require('../../images/cardiologist-img.png')} alt=""/>
            </a>
            <h2 className="doctor-cards__title">
             Кардиолог
            </h2>
          </article>
        </section>

        <section className="container-categories container-categories--col3">
        <article className="doctor-cards">
          <a href="#">
            <img src={require('../../images/pediatrician-img.png')} alt=""/>
          </a>
          <h2 className="doctor-cards__title">
            Педиатр
          </h2>
        </article>

        <article className="doctor-cards">
          <a href="#">
            <img src={require('../../images/dantist-img.png')} alt=""/>
          </a>
          <h2 className="doctor-cards__title">
            Стоматолог
          </h2>
        </article>

        <article className="doctor-cards">
          <a href="#">
            <img src={require('../../images/gynecologist-img.png')} alt=""/>
          </a>
          <h2 className="doctor-cards__title">
            Гинеколог
          </h2>
        </article>
        </section>
      </div>
    );
  }
}

export default DoctorsCategories;
