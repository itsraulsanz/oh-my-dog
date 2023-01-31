import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './reviews.scss'

const ReviewsPage = ({userReviews, headingText, reviewsText}) => {  
  return (
    <div id='reviews' className='reviews'>
      <div className='container-fluid'>
        <div className='reviews__heading'>
          <h2 className='reviews__heading-title'>{headingText}</h2>
          <div className='reviews__heading-rating'>
            <p className='reviews__heading-rating'><span className='bold'>{userReviews.rating}.0</span> <span className={`stars star-rating-${userReviews.rating}`}></span> {userReviews.user_ratings_total} {reviewsText}</p></div>
        </div>
        <Carousel showArrows={true}>
          {userReviews.childrenGooglePlacesReview.map((review) => {
            return (
              <div className='review__card' key={review.id}>
                <div className='review__user'>
                  <img src={review.profile_photo_url} alt={review.author_name} ></img>
                  <strong className='review__user-details'>{review.author_name} <span className={`stars star-rating-${review.rating}`}></span></strong>
                </div>
                <p>{`${review.text.substring(0, 350)}...`}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default ReviewsPage
