import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import Select from 'react-select';
import transportOptions from '../../data/transportOptions';
import './city-selector.scss'

let pathname = typeof window !== "undefined" ? window.location.pathname : "";
const locationLanguage = pathname.split("/")[1];
console.log('locationLanguage', locationLanguage);

export default function CitySelector(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  console.log('selectedOption', selectedOption);

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
                {props.cities.map((city, index) => (
                  <li className='navigationItem' key={index}>
                    <Select
                      // value={selectedOption}
                      className="basic-single"
                      classNamePrefix="select"
                      placeholder={city.cityName}
                      options={transportOptions[locationLanguage]}
                      onChange={setSelectedOption}
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
    );
  }