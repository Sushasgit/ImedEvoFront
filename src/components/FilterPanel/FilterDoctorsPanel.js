import React, { Component } from 'react';
import styles from './filter-panel.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'
import RatingStars from '../customComponents/RatingStars'

class FilterDoctorsPanel extends Component {
  render() {
    return (
      <nav className={styles.sort}>
        <ul className={styles.filter}>
          <li><a href="#">Количество отзывов</a></li>
          <li><a className="dropdown" href="/">Пол <Icons.IconArrowDown/></a>
            <ul>
              <label>
                <input type="checkbox"/>
                Все
              </label>
              <label>
                <input type="checkbox"/>
                Женский
              </label>
              <label>
                <input type="checkbox"/>
                Мужской
              </label>
            </ul>
          </li>

          <li><a className="dropdown"  href="#">Рейтинг <Icons.IconArrowDown/></a>
            <ul>
              <label>
                <input type="checkbox"/>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={1}
                />
                <p className={styles.h_title}> и более </p>
              </label>
              <label>
                <input type="checkbox"/>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={2}
                />
                <p className={styles.h_title}> и более </p>
              </label>
              <label>
                <input type="checkbox"/>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={3}
                />
                <p className={styles.h_title}> и более </p>
              </label>
              <label>
                <input type="checkbox"/>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={4}
                />
                <p className={styles.h_title}> и более </p>
              </label>
              <label>
                <input type="checkbox"/>
                <RatingStars
                  starSelectingHoverColor="rgb(249, 215, 73)"
                  starRatedColor="rgb(249, 215, 73)"
                  starWidthAndHeight="20px"
                  starSpacing='0px'
                  isSelectable={false}
                  rating={5}
                />
              </label>
            </ul>
          </li>

          <li><a className="dropdown" href="#">Фамилии <Icons.IconArrowDown/></a>
            <ul>
              <label>
                <input type="checkbox"/>
                от А до Я
              </label>
              <label>
                <input type="checkbox"/>
                от Я до А
              </label>
            </ul>
          </li>


          <li><a className="dropdown" href="#">Популярность <Icons.IconArrowDown/></a>
            <ul>
              <label>
                <input type="checkbox"/>
                от А до Я
              </label>
              <label>
                <input type="checkbox"/>
                от Я до А
              </label>
            </ul>
          </li>

          <li><a className="dropdown" href="#">Стаж <Icons.IconArrowDown/></a>
            <ul>
              <label>
                <input type="checkbox"/>
                от А до Я
              </label>
              <label>
                <input type="checkbox"/>
                от Я до А
              </label>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default FilterDoctorsPanel;
