import React from 'react'
import './text-banner.scss'

import Footprint from "../../images/footprint.svg"

export default function TextBanner(props) {

  return (
    <div className='text-banner' id={props.id}>
      <div className='container-fluid'>
          <div className='text-banner__text' id={props.color}>
              <h2 className='text-banner__text-heading'>{props.headingText}</h2>
              {props.bodyTexts.map((bodyText, index) => {
                return (
                  <p key={index} className='text-banner__text-description'>{bodyText.text}</p>
                )
              })}
              <a className="button-secondary" href={props.pdf} target="_blank">{props.buttonText}</a>
              <div className='text-banner__background'>
                <img src={Footprint} className='footprint-left' />
                <img src={Footprint} className='footprint-right' />
              </div>
          </div>
      </div>
    </div>
  )
}
