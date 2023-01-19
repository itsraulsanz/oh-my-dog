import React from 'react';
import { graphql } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import api from '../../../api';

import './reviews.scss'

const ReviewsPage = ({userReviews, headingText, descriptionText}) => {
  let [responseData, setResponseData] = React.useState('')
  
  const fetchData = (e) => {
    e.preventDefault()
    api.getData()
    .then((response)=>{
        setResponseData(response.data)
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  fetchData();

  return (
    <div className='reviews'>
      <div className='container-fluid'>
        <div className='reviews__heading'>
          <h2 className='reviews__heading-title'>{headingText}</h2>
          <p className='reviews__heading-description'>{descriptionText}</p>
          <div className='reviews__heading-rating'>
            <p className='reviews__heading-rating'><span className='bold'>{userReviews.rating}.0</span> <span className={`stars star-rating-${userReviews.rating}`}></span> {userReviews.user_ratings_total} reseñas</p></div>
        </div>
        <Carousel showArrows={true}>
          {userReviews.childrenGooglePlacesReview.map((review) => {
            return (
              <div className='review__card'>
                <div className='review__user'>
                  <img src={review.profile_photo_url} alt={review.author_name} ></img>
                  <strong className='review__user-details'>{review.author_name} <span className={`stars star-rating-${review.rating}`}></span></strong>
                </div>
                {/* <p>{`${review.text.substring(0, 250)} ...`}</p> */}
                <p>{`${review.text.substring(0, 350)}...`}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    googlePlacesPlace {
      name
      rating
      childrenGooglePlacesReview {
        author_name
        text
        rating
        profile_photo_url
      }
      user_ratings_total
    }
  }
`;

export default ReviewsPage
