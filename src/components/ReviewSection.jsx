import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <div className='reviewSection'>
        <header>
            <h1>Reviews</h1>
        </header>

        <div className="reviewBorder"></div>

        <div className="infiniteScroll">
            <ReviewCard />
        </div>

    </div>
  )
}

export default ReviewSection