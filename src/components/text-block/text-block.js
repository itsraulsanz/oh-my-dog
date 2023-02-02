import React from 'react'
import './text-block.scss'

export default function TextBlock(props) {

  return (
    <div className='text-block' id={props.id}>
      <div className='container-fluid'>
          <div className='text-block__text'>
              <h2 className='text-block__text-heading'>{props.headingText}</h2>
              <p className='text-block__text-description'>{props.bodyText1}</p>
               <p className='text-block__text-description'>{props.bodyText2}</p>
               <p className='text-block__text-description'>{props.bodyText3}</p>
               <p className='text-block__text-description'>{props.bodyText4}</p>
               <p className='text-block__text-description'>{props.bodyText5}</p>
               <p className='text-block__text-description'>{props.bodyText6}</p>
              <img src={props.logo} alt='Logo Defra' />
          </div>
      </div>
    </div>
  )
}
