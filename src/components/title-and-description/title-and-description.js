import React, { useState, useRef } from "react";
import './title-and-description.scss'

export default function TitleAndDescription(props) {
  return (
    <div className={`title-and-description ${ props.padding }`} style={{ background: props.color }}>
      <div className='container-fluid'>
          <div className='contact__text'>
            {props.headingText && 
              <h1 className='contact__text-heading'>{props.headingText}</h1>
            }

            {props.descriptionText && 
              <p className='contact__text-description'>{props.descriptionText}</p>
            }     
          </div>
      </div>
    </div>
  )
}
