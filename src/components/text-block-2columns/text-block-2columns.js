import React from 'react';
import './text-block-2columns.scss';

export default function TextBlock(props) {

  return (
    <div id={props.id} className={`text-block-2columns ${ props.padding }`} style={{ background: props.color }}>
      <div className='container-fluid'>
          <div className='text-block-2columns__text'>
            {props.headingText && 
              <h1 className='contact__text-heading'>{props.headingText}</h1>
            }

            {props.subheadingText && 
              <h2 className='contact__text-heading'>{props.subheadingText}</h2>
            }

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

              {props.image && 
                <img src={props.image} alt='Logo Defra' width={100} height={62} />
              }
          </div>
      </div>
    </div>
  )
}
