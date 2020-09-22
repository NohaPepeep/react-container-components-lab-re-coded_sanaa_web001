import React from 'react';

const MovieReviews = (props) =>
  <div className="review-list">
      {props.reviews.map(movie => {
          return <div className="review" key={movie.display_title}>
                <a href={movie.link.url}>{movie.headline}</a>
                {movie.byline}
            </div>
      })}
  </div>

export default MovieReviews 