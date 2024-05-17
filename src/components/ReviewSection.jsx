import React from 'react'
import ReviewCard from './ReviewCard'
import { useNavigate } from 'react-router-dom'

function ReviewSection() {

    const navigate = useNavigate('');

  return (
    <div className='reviewSection'>
        <header>
            <h1>Reviews</h1>
        </header>

        <div className="reviewBorder"></div>

        <div className="infiniteScroll">
        </div>

    </div>
  )
}

export default ReviewSection