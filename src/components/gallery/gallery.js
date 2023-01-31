import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'

import './gallery.scss'

const ImageGallery = ({galleryImages, headingText, descriptionText}) => {
  const [openedItem, setOpenedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
		setIsOpen(!isOpen);
	};

  return (
    <div id='gallery' className='gallery'>
      <div className='container-fluid'>
        <div className='gallery__heading'>
          <h2 className='gallery__heading-title'>{headingText}</h2>
          <p className='gallery__heading-description'>{descriptionText}</p>
        </div>
        <div className='gallery__container'>
          <ul className='gallery__list'>
            {galleryImages.map((galleryImage, index) => (
              <li className={`gallery__list-image ${index}`} key={index} onClick={() => 
                {setOpenedItem(index); setIsOpen(!isOpen);}
              }>
                <GatsbyImage alt={galleryImage.title} image={galleryImage.image.gatsbyImage} key={index} />
              </li>
            ))}
          </ul>
          {isOpen && (
                <div className='lightbox'>
                  <div className='lightbox-container'>
                    <div className='lightbox-close' onClick={toggle}>
                      <svg alt="Close icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.420908 0.420786C0.50509 0.33639 0.605096 0.26943 0.715197 0.223744C0.825297 0.178057 0.94333 0.154541 1.06253 0.154541C1.18174 0.154541 1.29977 0.178057 1.40987 0.223744C1.51997 0.26943 1.61998 0.33639 1.70416 0.420786L6.50003 5.21847L11.2959 0.420786C11.3802 0.336526 11.4802 0.269688 11.5903 0.224087C11.7004 0.178486 11.8184 0.155015 11.9375 0.155015C12.0567 0.155015 12.1747 0.178486 12.2848 0.224087C12.3949 0.269688 12.4949 0.336526 12.5792 0.420786C12.6634 0.505045 12.7303 0.605075 12.7759 0.715165C12.8215 0.825256 12.8449 0.94325 12.8449 1.06241C12.8449 1.18157 12.8215 1.29957 12.7759 1.40966C12.7303 1.51975 12.6634 1.61978 12.5792 1.70404L7.78147 6.49991L12.5792 11.2958C12.6634 11.38 12.7303 11.4801 12.7759 11.5902C12.8215 11.7003 12.8449 11.8183 12.8449 11.9374C12.8449 12.0566 12.8215 12.1746 12.7759 12.2847C12.7303 12.3947 12.6634 12.4948 12.5792 12.579C12.4949 12.6633 12.3949 12.7301 12.2848 12.7757C12.1747 12.8213 12.0567 12.8448 11.9375 12.8448C11.8184 12.8448 11.7004 12.8213 11.5903 12.7757C11.4802 12.7301 11.3802 12.6633 11.2959 12.579L6.50003 7.78135L1.70416 12.579C1.6199 12.6633 1.51987 12.7301 1.40978 12.7757C1.29969 12.8213 1.18169 12.8448 1.06253 12.8448C0.943372 12.8448 0.825378 12.8213 0.715287 12.7757C0.605197 12.7301 0.505167 12.6633 0.420908 12.579C0.336648 12.4948 0.26981 12.3947 0.224209 12.2847C0.178608 12.1746 0.155138 12.0566 0.155138 11.9374C0.155138 11.8183 0.178608 11.7003 0.224209 11.5902C0.26981 11.4801 0.336648 11.38 0.420908 11.2958L5.2186 6.49991L0.420908 1.70404C0.336512 1.61985 0.269553 1.51985 0.223866 1.40975C0.178179 1.29965 0.154663 1.18161 0.154663 1.06241C0.154663 0.943208 0.178179 0.825175 0.223866 0.715075C0.269553 0.604974 0.336512 0.504968 0.420908 0.420786Z" />
                      </svg>
                    </div>
                    <GatsbyImage alt={galleryImages[openedItem].title} image={galleryImages[openedItem].image.gatsbyImage} className='lightbox-image' />
                    <div className='lightbox-navigation'>
                    <ul className='lightbox-navigation__list'>
                      {galleryImages.map((galleryImage, index) => (
                        <li className={`lightbox-navigation__list-image`} onClick={() => 
                          {setOpenedItem(index)}
                        }>
                          <GatsbyImage alt={galleryImage.title} image={galleryImage.image.gatsbyImage} key={index} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                  <div className='lightbox-background' onClick={toggle}></div>
                </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
