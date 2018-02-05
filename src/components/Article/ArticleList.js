import React, { Component } from 'react';
import styles from './article-style.scss'
import ArticleRow from './ArticleRow';

class ArticleList extends Component {
  render() {
    const { articles, onArticleClick } = this.props;
    return (
      <div className={styles.article_list}>
        {articles.map(article =>
          <ArticleRow
            onClick={onArticleClick}
            key={article.id}
            {...article}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;