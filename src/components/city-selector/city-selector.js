import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import Select from 'react-select';
import transportOptions from '../../data/transportOptions';
import './city-selector.scss'

export default function CitySelector(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = () => {
    console.log('setSelectedOption', setSelectedOption);
  };

  return (
    <div className={`city-selector ${ props.padding }`} style={{ background: props.color }}>
      <div className='container-fluid'>
          <div className='city__text'>
            {props.headingText && 
              <h1 className='contact__text-heading'>{props.headingText}</h1>
            }

            {props.subheadingText && 
              <h2 className='contact__text-heading'>{props.subheadingText}</h2>
            }

            {props.descriptionText && 
              <p className='contact__text-description'>{props.descriptionText}</p>
            }

            {props.descriptionText2 && 
              <p className='contact__text-description'>{props.descriptionText2}</p>
            }   
          </div>

          <div className="city__list">
            <ul className="selector">
              {props.cityOptions[0].cities_list.cities.map((city, index) => (
                <li className='navigationItem' key={index}>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder={city.city}
                    options={transportOptions}
                    onChange={(handleChange, setSelectedOption)}
                  />
                  {/* <Link to={`/${city.label}-${transportOptions}`} >
                    {city.label}
                  </Link> */}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}
