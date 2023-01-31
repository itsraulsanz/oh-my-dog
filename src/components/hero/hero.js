import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import './hero.scss'

const Hero = ({ image, title, content }) => (
  <div className="hero">
    {image && (
      <GatsbyImage className="hero__image" alt={title} image={image} />
    )}
    {/* <div className="hero__details">
      <h1 className="hero__details_title">{title}</h1>
      {content && (
        <div className="hero__details_content">{renderRichText(content)}</div>
      )}
    </div> */}
  </div>
)

export default Hero
