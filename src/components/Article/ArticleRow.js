import React, { Component }  from 'react'
import styles from './article-style.scss'
import * as Icons from '../SvgIcons/SvgIcons.js'

class ArticleRow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      intervalId: 0
    }
  }

  scrollStep () {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - 50)
  }

  scrollToTop () {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66)
    this.setState({intervalId: intervalId})
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.onClick(this.props.id)
    this.scrollToTop()
  }

  render () {
    return (
      <section className={styles.article_row} onClick={this.handleClick}>
        <header>
          <img src={this.props.img}/>
        </header>
        <div>
          <div className={styles.article_title}>{this.props.title}</div>
          <div className={styles.article_description}>{this.props.description}</div>
          <div className={styles.article_date}>
            <Icons.IconCalendar/>
            {this.props.date}
            </div>
        </div>
      </section>
    )
  }
}

export default ArticleRow