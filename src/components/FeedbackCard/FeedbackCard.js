import React, {Component} from 'react';
import * as constants from '../../constants/constants'
import RatingStars from '../customComponents/RatingStars'
import styles from './feedback-card.scss'

class FeedbackCard extends Component {
    render() {
        return (
            <div>
                {constants.TestFeedbacks.map((feedback, index) =>
                    <div key={index} className={styles.feedback_card}>
                        <div className={styles.feedback__name}>
                            <h3 className={styles.doctor__name__feedback}>{feedback.doctor}</h3>
                            <RatingStars
                                starSelectingHoverColor="rgb(249, 215, 73)"
                                starRatedColor="rgb(249, 215, 73)"
                                starWidthAndHeight="20px"
                                starSpacing='0px'
                                isSelectable={false}
                                rating={feedback.rate}
                            />

                        </div>
                        <p>{feedback.text}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default FeedbackCard;
