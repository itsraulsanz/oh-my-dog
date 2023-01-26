import React from 'react'
import './services-block.scss'

import OhMyDogVideo from '../../images/ohmydogvideo.mp4'

export default function ServicesBlock(props) {
  return (
    <div className="services-block" id='services'>
      <div className="container-fluid">
        <h2 className="services-block__heading">{props.headingText}</h2>
        <p className="services-block__text-description">{props.descriptionText}</p>
        <div className="services-block__container">
          <section>
          <div className='service-block-card'>
              <span className='card-icon transport desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon transport mobile' />
                    <h3 className="services-block-card__text-heading">{props.block1Title}</h3>
                  </div>
                    <p className="services-block-card__text-description">{props.block1Text}</p>
                  <a className='read-more_button'>
                    {props.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.995" height="14.972" className='read-more_button-arrow'>
                      <path d="M90 24.25a3.499 3.499 0 0 0-5.974-2.475L45 60.8 5.975 21.775a3.5 3.5 0 1 0-4.95 4.95l41.5 41.5a3.499 3.499 0 0 0 4.949 0l41.5-41.5A3.487 3.487 0 0 0 90 24.25Z" transform="matrix(.16667 0 0 .16667 -.002 -.014)"/>
                    </svg>
                  </a>
                </summary>
                <div className='details-container'>
                  <ul className='check-list'>
                    <li>{props.block1Advantage1}</li>
                    <li>{props.block1Advantage2}</li>
                    <li>{props.block1Advantage3}</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className='service-block-card'>
              <span className='card-icon transport desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon map mobile' />
                    <h3 className="services-block-card__text-heading">{props.block2Title}</h3>
                  </div>
                  <p className="services-block-card__text-description">{props.block2Text}</p>
                  <a className='read-more_button'>
                    {props.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.995" height="14.972" className='read-more_button-arrow'>
                      <path d="M90 24.25a3.499 3.499 0 0 0-5.974-2.475L45 60.8 5.975 21.775a3.5 3.5 0 1 0-4.95 4.95l41.5 41.5a3.499 3.499 0 0 0 4.949 0l41.5-41.5A3.487 3.487 0 0 0 90 24.25Z" transform="matrix(.16667 0 0 .16667 -.002 -.014)"/>
                    </svg>
                  </a>                
                </summary>
                <div className='details-container'>
                  <ul className='check-list'>
                    <li>{props.block2Advantage1}</li>
                    <li>{props.block2Advantage2}</li>
                    <li>{props.block2Advantage3}</li>
                    <li>{props.block2Advantage4}</li>
                  </ul>            
                </div>
              </details>
            </div>
          </section>

          <section>
            <div className='service-block-card'>
              <span className='card-icon relaxing desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon relaxing mobile' />
                    <h3 className="services-block-card__text-heading">{props.block3Title}</h3>
                  </div>
                  <p className="services-block-card__text-description">{props.block3Text}</p>
                  <a className='read-more_button'>
                    {props.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.995" height="14.972" className='read-more_button-arrow'>
                      <path d="M90 24.25a3.499 3.499 0 0 0-5.974-2.475L45 60.8 5.975 21.775a3.5 3.5 0 1 0-4.95 4.95l41.5 41.5a3.499 3.499 0 0 0 4.949 0l41.5-41.5A3.487 3.487 0 0 0 90 24.25Z" transform="matrix(.16667 0 0 .16667 -.002 -.014)"/>
                    </svg>
                  </a>
                </summary>
                <div className='details-container'>
                  <ul className='check-list'>
                    <li>{props.block3Advantage1}</li>
                    <li>{props.block3Advantage2}</li>
                  </ul>         
                </div>
              </details>
            </div>

            <div className='service-block-card'>
              <span className='card-icon map desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon map mobile' />
                    <h3 className="services-block-card__text-heading">{props.block4Title}</h3>
                  </div>
                  <p className="services-block-card__text-description">{props.block4Text}</p>
                  <a className='read-more_button'>
                    {props.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.995" height="14.972" className='read-more_button-arrow'>
                      <path d="M90 24.25a3.499 3.499 0 0 0-5.974-2.475L45 60.8 5.975 21.775a3.5 3.5 0 1 0-4.95 4.95l41.5 41.5a3.499 3.499 0 0 0 4.949 0l41.5-41.5A3.487 3.487 0 0 0 90 24.25Z" transform="matrix(.16667 0 0 .16667 -.002 -.014)"/>
                    </svg>
                  </a>
                </summary>
                <div className='details-container'>
                  <ul className='check-list'>
                    <li>{props.block4Advantage1}</li>
                    <li>{props.block4Advantage2}</li>
                    <li>{props.block4Advantage3}</li>
                  </ul>            
                </div>
              </details>
            </div>

            {/* <div className='service-block-card video'>
              <video src={OhMyDogVideo} playsInline loop muted autoPlay />
            </div> */}
          </section>
        </div>

        <a href='#contact-us' className="button-secondary">
          {props.buttonContact}
        </a>
      </div>
    </div>
  )
}
