import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'
import Lightbox from 'react-image-lightbox';

import './gallery.scss'

const ImageGallery = ({galleryImages, headingText, descriptionText}) => {
  const [isOpen, setIsOpen, photoIndex] = useState(false);

  const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

  return (
    <div className='gallery' id='blog'>
      <div className='container-fluid'>
        <div className='gallery__heading'>
          <h2 className='gallery__heading-title'>{headingText}</h2>
          <p className='gallery__heading-description'>{descriptionText}</p>
        </div>
        <ul className='gallery__list'>
          {galleryImages.map((galleryImage, i) => (
            <li className={`gallery__list-image ${galleryImage.order}`} onClick={() => ({ isOpen: true })}>
              <GatsbyImage alt={galleryImage.title} image={galleryImage.image.gatsbyImage} key={i} />
              {/* <img alt={galleryImage.title} src={galleryImage.image.url} key={i} className={i} /> */}
            
              {isOpen ?
                <Lightbox
                mainSrc={galleryImage[i].image.url}
                nextSrc={galleryImage[(i + 1) % galleryImage.length]}
                prevSrc={galleryImage[(i + galleryImage.length - 1) % galleryImage.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    i: (i + galleryImage.length - 1) % galleryImage.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    i: (i + 1) % galleryImage.length,
                  })
                }
              />
				      : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ImageGallery
