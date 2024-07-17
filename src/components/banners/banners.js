import React, { useState, useRef } from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import './banners.scss'

const Banners = ({banners, padding, color, border}) => {  
  return (
    <div className={`banners ${ padding }`} style={{ background: color }}>
      <div className={`container-fluid ${ border }`}> 
        <ul className="banners-list">
            {banners.map((banner, index) => (
              <li className='navigationItem' key={index}>
                {banner.url ? 
                    <a href={banner.url} rel="noreferrer" aria-label="Instagram link">
                      <GatsbyImage alt={banner.title} image={banner.image.gatsbyImage} key={index} />
                      {banner.title}
                    </a> 
                  : 
                    <div>
                      <GatsbyImage alt={banner.title} image={banner.image.gatsbyImage} key={index} />
                      <span>{banner.title}</span>
                    </div>
                }    
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Banners