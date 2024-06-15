import React from 'react'
import './text-banner.scss'

import Footprint from "../../images/footprint.svg"

export default function TextBanner({id, color, headingText, subHeadingText, year, descriptionText1, descriptionText2, pdf, buttonText, pdfCalendar}) {  return (
    <div className='text-banner' id={id}>
      <div className='container-fluid'>
          <div className='text-banner__text' id={color}>
              <h2 className='text-banner__text-heading'>
                {headingText && 
                  <h1 className='contact__text-heading'>{headingText}</h1>
                }
                {subHeadingText &&
                  <h2 className='contact__text-heading'>{subHeadingText}</h2>
                }
                
                {year &&
                  <span>{year}</span>
                }
              </h2>
              <p className='text-banner__text-description'>
                {descriptionText1}
                {year &&
                  <span>{year}</span>
                }
                {year &&
                   <span>{descriptionText2}</span>
                }
              </p>
              {pdf ? <a className="button-secondary" href={pdf} target="_blank">{buttonText}</a> : <a className="button-secondary" href={pdfCalendar} target="_blank">{buttonText}</a>}
              <div className='text-banner__background'>
                <img src={Footprint} className='footprint-left' alt='Footprint background' />
                <img src={Footprint} className='footprint-right' alt='Footprint background' />
              </div>
          </div>
      </div>
    </div>
  )
}
