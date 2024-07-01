import React, { useState, useRef } from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import './banners.scss'

const Banners = ({banners, padding, color}) => {  
  return (
    <div className={`banners ${ padding }`} style={{ background: color }}>
      <div className='container-fluid'>
          <ul className="banners-list">
            {banners.map((banner, index) => (
              <li className='navigationItem' key={index}>
                <a href={banner.url} target="_blank" rel="noreferrer" aria-label="Instagram link">
                  <GatsbyImage alt={banner.title} image={banner.image.gatsbyImage} key={index} />
                  {banner.title}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Banners