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
                      <ul className='check-list'>
                        <li>{props.block1Advantage1}</li>
                        <li>{props.block1Advantage2}</li>
                        <li>{props.block1Advantage3}</li>
                      </ul>
                  <a className='read-more_button'></a>
                </summary>
                <div className='details-container'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum ornare felis, in vehicula mauris malesuada et.</p>
                  <p>Nullam augue mauris, lacinia ac enim at, accumsan pellentesque ipsum. Mauris tincidunt purus vel aliquam tristique. Proin ac finibus nulla, finibus finibus felis.</p>
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
                  <ul className='check-list'>
                    <li>{props.block2Advantage1}</li>
                    <li>{props.block2Advantage2}</li>
                    <li>{props.block2Advantage3}</li>
                    <li>{props.block2Advantage4}</li>
                  </ul>
                <a className='read-more_button'></a>
              </summary>
              <div className='details-container'>
                <ul>
                  <li>Similarly, one of the drivers will spend time with th…</li>
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
                  <ul className='check-list'>
                    <li>{props.block3Advantage1}</li>
                    <li>{props.block3Advantage2}</li>
                  </ul>
                <a className='read-more_button'></a>
              </summary>
              <div className='details-container'>
                <ul>
                  <li>...similarly, one of the drivers will spend time with th…</li>
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
                  <ul className='check-list'>
                    <li>{props.block4Advantage1}</li>
                    <li>{props.block4Advantage2}</li>
                    <li>{props.block4Advantage3}</li>
                  </ul>
                <a className='read-more_button'></a>
              </summary>
              <div className='details-container'>
                <ul>
                  <li>Similarly, one of the drivers will spend time with th…</li>
                </ul>              
                </div>
              </details>
            </div>

            {/* <div className='service-block-card video'>
              <video src={OhMyDogVideo} playsInline loop muted autoPlay />
            </div> */}
          </section>
        </div>

        <a href='#contactus' className="button-secondary">
          Contact us
        </a>
      </div>
    </div>
  )
}
