import React from 'react'
import './hero-with-slideshow.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import Image1 from '../../images/img-slider-1.png'
import Image2 from '../../images/img-slider-2.png'
import Image3 from '../../images/img-slider-3.png'

export default function HeroWithSlideshow(props) {
  return (
    <div className="hero-with-slideshow">
      <div className="container-fluid">
          <div className="hero-with-slideshow__text">
              <h2 className="hero-with-slideshow__text-heading">{props.headingText}</h2>
              <p className="hero-with-slideshow__text-description">{props.descriptionText}</p>
              <a href='#contactus' className="button-primary">
                {props.buttonText}
              </a>
          </div>
          <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }} effect={"cards"} grabCursor={true} modules={[Autoplay, EffectCards]} className="mySwiper">
            <SwiperSlide><img src={Image1} /></SwiperSlide>
            <SwiperSlide><img src={Image2} /></SwiperSlide>
            <SwiperSlide><img src={Image3} /></SwiperSlide>
          </Swiper>
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
