import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-with-slideshow.scss'

import Image1 from '../../images/img-slider-1.png'
import Image2 from '../../images/img-slider-1.png'
import Image3 from '../../images/img-slider-1.png'

export default function HeroWithSlideshow() {

  return (
    <div className="hero-with-slideshow">
      <div className="container-fluid">
          <div className="hero-with-slideshow__text">
              <h2 className="hero-with-slideshow__text-heading">Our goal is the comfort and Safety of your pet during The trip</h2>
              <p className="hero-with-slideshow__text-description">We offer a luxury door-to-door service, with a reduced number of pets and 2 drivers with animal welfare trainning</p>
              <a href='#contactus' className="button-primary">
                Contact us
              </a>
          </div>
          <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} centerMode={true} centerSlidePercentage={70} interval={7000} transitionTime={1000}>
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
      <svg width="500" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FCEEDD" stop-opacity="1" />
            <stop offset="100%" stop-color="#FFF8EF" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="url(#grad1)" />
      </svg>
    </div>
  )
}
