import React from 'react'
import './text-block.scss'

export default function TextBlock(props) {

  return (
    <div className='text-block' id={props.id}>
      <div className='container-fluid'>
          <div className='text-block__text'>
              <h2 className='text-block__text-heading'>{props.headingText}</h2>
              {props.bodyTexts}
              {/* {props.bodyTexts.map((bodyText, index) => {
                return (
                  <p key={index} className='text-block__text-description'>{bodyText.text}</p>
                )
              })} */}
              <img src={props.logo} alt='Logo Defra' width='100px' />
          </div>
      </div>
    </div>
  )
}
