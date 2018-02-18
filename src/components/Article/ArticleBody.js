import React, { Component,Fragment  } from 'react'
import styles from './article-style.scss'

class ArticleBody extends Component {

  render () {
    const articleText = this.props;
    return(
      <Fragment>
      {Object.keys(articleText).map(function(objectKey, index) {
        let value = articleText[objectKey];
        return (
          <div key={index}>
            <h2 className={styles.article__headlines}>{value.headline}</h2>
            <p>{value.text}</p>
          </div>
        )
      })}
      </Fragment>
    )
  }
}

export default ArticleBody;