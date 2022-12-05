import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-with-slideshow.scss'

import Image1 from '../../images/img-slider-1.png'
import Image2 from '../../images/img-slider-1.png'
import Image3 from '../../images/img-slider-1.png'

export default function HeroWithSlideshow() {

  return (
    <div className="hero-with-slideshow__container">
        <div className="hero-with-slideshow__text">
            <h2 className="hero-with-slideshow__text-heading">Our goal is the comfort and Safety of your pet during The trip</h2>
            <p className="hero-with-slideshow__text-description">We offer a luxury door-to-door service, with a reduced number of pets and 2 drivers with animal welfare trainning</p>
            <a href='#contactus' className="primary-banner__button-container">
              Contact us
            </a>
        </div>
        <Carousel centerSlidePercentage={50} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} interval={7000} transitionTime={1000}>
          <div>
            <img src={Image1} />
          </div>
          <div>
            <img src={Image2} />
          </div>
          <div>
            <img src={Image3} />
          </div>
        </Carousel>
    </div>
  )
}
