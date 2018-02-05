import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import styles from './article.scss'
import Article from '../../components/Article/Article'

class BlogArticlePage extends Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <section className={styles.banner}>

        </section>
        <Article/>
        <aside>
          <h3>Темы</h3>
          <ul>
            <li>Акушерство</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </aside>
      </Fragment>
    )
  }
}

export default BlogArticlePage
