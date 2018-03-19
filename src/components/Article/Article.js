import React, {Component} from 'react'
import styles from './article-style.scss'
import Author from './Author'
import * as Icons from '../SvgIcons/SvgIcons.js'
import ArticleBody from './ArticleBody'

class Article extends Component {

    render() {
        if (!this.props.title) {
            return <h3 className={styles.article__headline}>Выберите статью</h3>
        }
        return (
            <div className={styles.current_article}>
                <h3 className={styles.current_article__title}>{this.props.title}</h3>
                <div>
                    <div className={styles.article_date}>
                        <Icons.IconCalendar/>
                        {this.props.date}
                    </div>

                    <Author {...this.props.author} />

                    <div className={styles.article_body}>
                        <ArticleBody {...this.props.body}/>
                        <blockquote className={styles.blockquote}>
                            {this.props.blockquote}
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article