import React from 'react'
import { form } from 'react-router-dom';

function addReview() {

    const anime = {
        title: 'Attack on Titan',
        coverArt: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    };

  return (
    <div className='animeReview'>
        <form action="GET">

            <div>
                <input type="search" name="" id="" placeholder='Type Anime Here...'/>
            </div> 

            <div className="results">
                {/* Show results here */}
                <p className='animeTitle'></p>
                {/* inset image here */}
                <img   
                    key={anime.coverArt}
                    src={anime.coverArt || null} 
                    alt={anime.title} />
            </div>

            <div className="rating">
                <input type="range" name="" id="" max={10} />
            </div>

            <div className="review">
                <textarea name="" id="" cols="50" rows="50" placeholder='Type review here...'></textarea>
            </div>

            <div className="submitBtn">
                <input type="submit" value="" />
            </div>

        </form>
    </div>
  )
}

export default addReview