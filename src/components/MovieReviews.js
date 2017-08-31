import React from 'react'
import Review from './Review'

const MovieReviews = (reviews) => {
  MovieReviews.defaultProps = reviews
  let reviewsHTML = MovieReviews.defaultProps.reviews.map((review, index) => Review(review, index) )

  return (
    <div className="review-list">
      {reviewsHTML}
    </div>
  )
}

export default MovieReviews
