import React from 'react'

const Review = (review, index) => {
  return(
    <div key={index} className="review">
      <h3>{review.display_title}</h3>
      <p>{review.headline}</p>
      <p>{review.summary_short}</p>
    </div>
  )
}

export default Review
