
import React from 'react';

const Review = ({a,b,c,d}) => {
  return (

    <div className="review">
      <header>
        <a className="review-link" href={c.url}>
          {a}
        </a>
        <span className="author">{b}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;