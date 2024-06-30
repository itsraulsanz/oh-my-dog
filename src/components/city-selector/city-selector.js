import React, { useEffect, useState } from 'react';
import { useIntl } from "gatsby-plugin-intl"
import transportOptions from '../../data/transportOptions';
import './city-selector.scss'

let pathname = typeof window !== "undefined" ? window.location.pathname : "";
const locationLanguage = pathname.split("/")[1];
console.log('locationLanguage', locationLanguage);

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class CitySelector extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    window.location = selectedOption.target.value;
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className={`city-selector ${ this.props.padding }`} style={{ background: this.props.color }}>
        <div className='container-fluid'>
            <div className='city__text'>
              {this.props.headingText && 
                <h1 className='contact__text-heading'>{this.props.headingText}</h1>
              }

              {this.props.subheadingText && 
                <h2 className='contact__text-heading'>{this.props.subheadingText}</h2>
              }

              {this.props.descriptionText && 
                <p className='contact__text-description'>{this.props.descriptionText}</p>
              }

              {this.props.descriptionText2 && 
                <p className='contact__text-description'>{this.props.descriptionText2}</p>
              }   
            </div>

            <div className="city__list">
              <h3 className='contact__text-heading'>{this.props.servicesFromSpain}</h3>
              <ul className="selector">
                {this.props.citiesSpain.map((city, index) => (
                  <li className='navigationItem' value={city.slug} key={index}>
                    <select label={city.cityName} name={city.cityName} onChange={this.handleChange} value={this.state.value} className="basic-single">
                      <option disabled selected value className="service-option"> {city.cityName} </option>
                      {transportOptions[locationLanguage].map((service) => (
                        <option value={city.slug + "-" + service.value} className="service-option">
                          <a href={"/" + city.slug + "-" + service.value } >
                            {service.label}
                          </a>
                        </option>
                      ))}
                    </select>
                  </li>
                ))}
              </ul>

              <h3 className='contact__text-heading'>{this.props.servicesFromUk}</h3>
              <ul className="selector">
                {this.props.citiesUk.map((city, index) => (
                  <li className='navigationItem' value={city.slug} key={index}>
                    <select label={city.cityName} name={city.cityName} onChange={this.handleChange} value={this.state.value} className="basic-single">
                      <option disabled selected value className="service-option"> {city.cityName} </option>
                      {transportOptions[locationLanguage].map((service) => (
                        <option value={city.slug + "-" + service.value} className="service-option">
                          <a href={"/" + city.slug + "-" + service.value } >
                            {service.label}
                          </a>
                        </option>
                      ))}
                    </select>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default withMyHook(CitySelector);
