import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './reviews.scss';

function ReviewsPage ({headingText, subHeadingText, descriptionText, reviewsText, reviews, rating, userRating, padding, color, border}) { 
  return (
    <div id='reviews' className={`reviews ${ padding }`} style={{ background: color }}>
        <div className={`container-fluid ${ border }`} >
          <div className='reviews__heading'>
            {headingText && 
              <h1 className='reviews__heading-title'>{headingText}</h1>
            }
            {subHeadingText && 
              <h2 className='reviews__heading-title'>{subHeadingText}</h2>
            }
            {descriptionText && 
              <p className='reviews__text-description'>{descriptionText}</p>
            }
            <div className='reviews__heading-rating'>
              <p className='reviews__heading-rating'><span className='bold'>Rating: {rating}</span> <span className={`stars star-rating-${rating}`}></span> {userRating} {reviewsText}</p>
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
                  {/* <p>{`${review.text.substring(0, 350)}...`}</p> */}
                  <p>{review.text}</p>
                </div>
              )
            })}
          </Carousel>
        </div>        
    </div>
  )
}

export default ReviewsPage
