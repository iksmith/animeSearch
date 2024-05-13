import React from 'react'

function ReviewCard() {
  return (
    <div className='reviewCard'>

        <div className="innerCard">
            <div className="cardHdr">
                <div className="contentType">
                    icon
                </div>
                <div className="contentName">
                   content name
                </div>
                <div className="author">
                    @PostedBy
                </div>
                <div className="options">
                    Options
                </div>
            </div>

            <div className="cardTitle">
                <div className="reviewTitle">
                    <a className="reviewTitle" href="">Review Title</a>
                </div>
            </div>

            <div className="centerCard">

                <div className="cardImage">
                    <div className="coverArt">
                        <img src="" alt="cardImage" />
                    </div>
                </div>

                <div className="rating">
                    <div className="score">
                        <p className='scoreNum'>
                            9.5
                        </p>
                    </div>
                    <div className="scoreDescription">
                        <p className='scoreDesc'>
                            Must Watch!
                        </p>
                    </div>
                </div>
            </div>


            <div className="lowerCard">
                <div className="share">
                    <button className='shareBtn'>Share</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ReviewCard