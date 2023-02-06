import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './reviews.scss'

function ReviewsPage ({headingText, reviewsText, reviews, rating, userRating}) { 
  return (
    <div id='reviews' className='reviews'>
        <div className='container-fluid'>
          <div className='reviews__heading'>
            <h2 className='reviews__heading-title'>{headingText}</h2>
            <div className='reviews__heading-rating'>
              <p className='reviews__heading-rating'><span className='bold'>{rating}.0</span> <span className={`stars star-rating-${rating}`}></span> {userRating} {reviewsText}</p>
            </div>
          </div>
          <Carousel showArrows={true} showThumbs={false}>
            {reviews.map((review) => {
              return (
                <div className='review__card' key={review.time}>
                  <div className='review__user'>
                    <img src={review.profile_photo_url} alt={review.author_name} width={50} height={50} ></img>
                    <div className='review__user-details'>
                      <strong>{review.author_name}</strong>
                      <div className='review__user-details_2'>
                        <span className={`stars star-rating-${review.rating}`}></span>
                        <span className='review__date'>{review.relative_time_description}</span>
                      </div>
                    </div>
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
