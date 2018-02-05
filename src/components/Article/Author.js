import React, { Component } from 'react'
import styles from './article-style.scss'

class Author extends Component {
  render () {
    return (
      <div className={styles.article_author}>
        By: <a href={this.props.website}>{this.props.firstName} {this.props.lastName}</a>
      </div>
    )
  }
}

export default Author