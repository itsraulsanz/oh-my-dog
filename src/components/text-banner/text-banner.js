import React from 'react'
import './text-banner.scss'

import Footprint from "../../images/footprint.svg"

export default function TextBanner(props) {
  return (
    <div className='text-banner' id={props.id}>
      <div className='container-fluid'>
          <div className='text-banner__text' id={props.color}>
              <h2 className='text-banner__text-heading'>
                {props.headingText}
                {props.year &&
                  <span>{props.year}</span>
                }
              </h2>
              <p className='text-banner__text-description'>
                {props.descriptionText1}
                {props.year &&
                  <span>{props.year}</span>
                }
                {props.year &&
                   <span>{props.descriptionText2}</span>
                }
              </p>
              {props.pdf &&
                <a className="button-secondary" href={props.pdf} target="_blank">{props.buttonText}</a>
              }
              {!props.pdf &&
                <a className="button-secondary" href='/'>{props.buttonText}</a>
              }
              <div className='text-banner__background'>
                <img src={Footprint} className='footprint-left' alt='Footprint background' />
                <img src={Footprint} className='footprint-right' alt='Footprint background' />
              </div>
          </div>
      </div>
    </div>
  )
}
