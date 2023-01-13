import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'

import './gallery.scss'

const imageGallery = ({galleryImages, headingText, descriptionText}) => {

  return (
    <div className='gallery' id='blog'>
      <div className='container-fluid'>
        <div className='gallery__heading'>
          <h2 className='gallery__heading-title'>{headingText}</h2>
          <p className='gallery__heading-description'>{descriptionText}</p>
        </div>
        <ul className='gallery__list'>
          {galleryImages.map((galleryImages) => (
            <li key={galleryImages.order} className={`gallery__list-image ${galleryImages.order}`}>
              <a>
              <GatsbyImage alt={galleryImages.title} image={galleryImages.image.gatsbyImage} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default imageGallery
