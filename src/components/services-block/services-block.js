import React from 'react'
import './services-block.scss'

import OhMyDogVideo from '../../images/OhMyDogVideo.mp4'

export default function ServicesBlock() {
  return (
    <div className="services-block">
      <div className="container-fluid">
        <h2 className="services-block__heading">The kind of service we provide</h2>
        
        <div className="services-block__container">
          <section>
          <div className='service-block-card'>
              <span className='card-icon transport desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon transport mobile' />
                    <h3 className="services-block__text-heading">Vehicles</h3>
                  </div>
                    <p className="services-block__text-description">At Ohmydog Pet Travel we have:</p>
                      <ul className='check-list'>
                        <li>Vehicles with international pet transport license type 2 approved in the EU and the UK.</li>
                        <li>Trained drivers with animal welfare courses.</li>
                        <li>The best van conversions for pet travelling.</li>
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
              <span className='card-icon map desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon map mobile' />
                    <h3 className="services-block__text-heading">Stops</h3>
                  </div>
                  <ul>
                    <li>Following our animal welfare training, we make stops every 5 hours.</li>
                    <li>Dogs, just like people, need to stop during a road trip. So, we take advantage of the driver changes to walk the dogs.</li>
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
              <span className='card-icon temperature desktop' />
              <details>
                <summary>
                  <div className='heading-container'>
                    <span className='card-icon temperature mobile' />
                    <h3 className="services-block__text-heading">Temperature</h3>
                  </div>
                  <ul>
                    <li>At Ohmydog Pet Travel we have:</li>
                    <li>We guarantee a controlled temperature between 21 and 24 degrees throughout the journey Isolation of the interior of the vehicle (floor, sides, front and roof) with GRP panels, reinforced with…</li>
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

            <div className='service-block-card video'>
              <video src={OhMyDogVideo} playsInline loop muted autoPlay />
            </div>
          </section>
        </div>

        <a href='#contactus' className="button-secondary">
          Contact us
        </a>
      </div>
    </div>
  )
}
