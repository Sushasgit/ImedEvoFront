import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types'

class RatingStars extends Component {


    render() {
        return (
            <StarRatings
                rating={this.props.rating}
                isAggregateRating={false}
                numOfStars={this.props.numOfStars}
                starSelectingHoverColor={this.props.starSelectingHoverColor}
                starRatedColor={this.props.starRatedColor}
                starWidthAndHeight={this.props.starWidthAndHeight}
                starSpacing={this.props.starSpacing}

            />
        );
    }
}

RatingStars.propTypes = {
    rating: PropTypes.number,
    starSelectingHoverColor: PropTypes.string,
    numOfStars: PropTypes.number,
    starRatedColor: PropTypes.string,
    starWidthAndHeight: PropTypes.string,
    starSpacing: PropTypes.string,
}


export default RatingStars