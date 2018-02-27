import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import styles from './article.scss'
import Footer from '../../components/Footer/Footer'
import * as api from '../../constants/testApiForBlog'
import ArticleList from '../../components/Article/ArticleList'
import Article from '../../components/Article/Article'

class BlogArticlePage extends Component {
  state = {
    data: {
      articles: [],
      currentArticle: {}
    },
    newArticleForm: false
  }

  componentDidMount () {
    api.getArticleList().then(articleList => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          articles: articleList,
        },
      }))
    })
  }

  setCurrentArticle = (articleId) => {
    api.getArticle(articleId).then(article => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentArticle: article,
        },
        newArticleForm: false,
      }))
    })
  }

  render () {
    return (
      <Fragment>
        <Header/>
        <section className={styles.banner}>
          <h5 className={styles.banner__title}>Блог</h5>
        </section>
        <div className={styles.right}>
          <Article {...this.state.data.currentArticle} />
        </div>
        <div style={{marginTop: '40px'}}>
          <ArticleList
            articles={this.state.data.articles}
            onArticleClick={this.setCurrentArticle}
          />
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default BlogArticlePage
