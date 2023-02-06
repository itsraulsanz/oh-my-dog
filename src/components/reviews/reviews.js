import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'

import './reviews.scss'

const placeId = process.env.GATSBY_GOOGLE_PLACE_ID
const apiKey = process.env.GATSBY_GOGGLE_API_KEY

function ReviewsPage ({headingText, reviewsText, api}) { 
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const locationLanguage = pathname.split("/")[1];

  const fetchReviews = async () => {
    let apiReturn = await axios({
      method: "get",
      url: `http://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,reviews,user_ratings_total&key=${apiKey}&language=${locationLanguage}`,
      mode: "cors",
      headers: {}
    }).then(async function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return apiReturn;
  };
  
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async api => {
      let response = await fetchReviews({ api: api });
      setData(response);
    };
    fetchData(api);
  }, []);

  return (
    <div id='reviews' className='reviews'>
      {data ? (
        <div className='container-fluid'>
          <div className='reviews__heading'>
            <h2 className='reviews__heading-title'>{headingText}</h2>
            <div className='reviews__heading-rating'>
              <p className='reviews__heading-rating'><span className='bold'>{data.data.result.rating}.0</span> <span className={`stars star-rating-${data.data.result.rating}`}></span> {data.data.result.user_ratings_total} {reviewsText}</p>
            </div>
          </div>
          <Carousel showArrows={true} showThumbs={false}>
            {data.data.result.reviews.map((review) => {
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
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  )
}

export default ReviewsPage
