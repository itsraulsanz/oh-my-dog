import React from 'react'
import './hero-with-slideshow.scss'

import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

export default function HeroWithSlideshow(props) {
  return (
    <div className="hero-with-slideshow">
      <div className="container-fluid hero-container">
          <div className="hero-with-slideshow__text">
              <h2 className="hero-with-slideshow__text-heading">{props.headingText}</h2>
              <p className="hero-with-slideshow__text-description">{props.descriptionText}</p>
              <a href='#contact-us' className="button-primary">
                {props.buttonContact}
              </a>
          </div>
          <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }} effect={"cards"} grabCursor={true} modules={[Autoplay, EffectCards]} className="mySwiper">
            <SwiperSlide><StaticImage alt="Trip with a cat" src="../../images/img-slider-1.webp" /></SwiperSlide>
            <SwiperSlide><StaticImage alt="Van's front view" src="../../images/img-slider-2.webp" /></SwiperSlide>
            <SwiperSlide><StaticImage alt="Trip collage" src="../../images/img-slider-3.webp" /></SwiperSlide>
          </Swiper>
      </div>
      <svg width="500" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#FCEEDD" />
      </svg>
    </div>
  )
}
