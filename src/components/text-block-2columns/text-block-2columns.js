import React from 'react'
import './text-block-2columns.scss'

export default function TextBlock(props) {

  return (
    <div className='text-block-2columns' id={props.id}>
      <div className='container-fluid'>
          <div className='text-block-2columns__text'>
              <h2 className='text-block-2columns__text-heading'>{props.headingText}</h2>
              <div className='text-block-2columns__columns-container'>
                <div className='text-block-2columns__column'>
                  <p className='text-block-2columns__text-description'>{props.bodyText1}</p>
                  <p className='text-block-2columns__text-description'>{props.bodyText2}</p>
                </div>
                <div className='text-block-2columns__column'>
                  <p className='text-block-2columns__text-description'>{props.bodyText3}</p>
                  <p className='text-block-2columns__text-description'>{props.bodyText4}</p>
                </div>
              </div>
              <img src={props.logo} alt='Logo Defra' width={100} height={62} />
          </div>
      </div>
    </div>
  )
}
