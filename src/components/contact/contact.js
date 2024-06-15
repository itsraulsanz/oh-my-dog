import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from '@emailjs/browser';
import Map from '../map/map'
import './contact.scss'

export default function Contact(props) {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [citypickup, setCitypickup] = useState("");
  const [citydropoff, setCitydropoff] = useState("");
  const [petnumber, setPetnumber] = useState("");
  const [petinfo, setPetinfo] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "telephone") {
      setTelephone(inputValue);
    } else if (inputType === "citypickup") {
      setCitypickup(inputValue);
    } else if (inputType === "citydropoff") {
      setCitydropoff(inputValue);
    } else if (inputType === "petnumber") {
      setPetnumber(inputValue);
    } else if (inputType === "petinfo") {
      setPetinfo(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const serviceID = process.env.GATSBY_APP_YOUR_SERVICE_ID
  const templateID = process.env.GATSBY_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.GATSBY_APP_YOUR_PUBLIC_KEY
  
  const center = { lat: 39.501867083198135, lng: -0.4074959442834655 }
  const mapProps = {
    options: {
      center,
      zoom: 16,
      disableDefaultUI: true,
    },
    onMount: map => {
      var marker = new window.google.maps.Marker({
        position: center,
        map,
        title: 'OMD Pet Travel',
      });
      marker.addListener('click', function(e) {
        const contentString =
        `<h2 id="firstHeading" class="firstHeading">${props.companyName}</h2>` +
        `<div id="bodyContent">` +
        `<p><b>${props.address}:</b> ${props.location}</p>` + 
        `<a href=${props.locationLink} target="_blank" rel="noreferrer" aria-label="Google maps location link">${props.locationLinkText}</a>` + 
        `</div>`;
        
        const infowindow = new window.google.maps.InfoWindow({
          content: contentString,
          ariaLabel: "OMD Pet Travel",
        });

        <div id="div1">The text above has been created dynamically.</div>
        infowindow.open({
          anchor: marker,
          map,
        });
      });
    },
  }

  const form = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("The email is invalid");
      return;
    }
    if (!name) {
      setErrorMessage("Please enter a valid name");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a valid message");
      return;
    }
    alert(`${name}, your email has been sent`);

    setName("");
    setEmail("");
    setTelephone("");
    setCitypickup("");
    setCitydropoff("");
    setPetnumber("");
    setPetinfo("");
    setMessage("");

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
    .then((result) => {
        // show the user a success message
    }, (error) => {
        // show the user an error
    });
  };

  return (
    <div className='contact' id='contact-us'>
      <div className='container-fluid'>
          <div className='contact__text'>
            {props.headingText && 
              <h1 className='contact__text-heading'>{props.headingText}</h1>
            }
            {props.subHeadingText &&
              <h2 className='contact__text-heading'>{props.subHeadingText}</h2>
            }
            {props.descriptionText && 
              <p className='contact__text-description'>{props.descriptionText}</p>
            }
          </div>
          <div className='contact__box'>
            <section className='contact__info'>
              <ul className='contact__info-days'>
                <li><span>{props.openDays}</span><span>{props.openHours}</span></li>
                <li><span>{props.openDaysFriday}</span><span>{props.openHoursFriday}</span></li>
                <li><span>{props.closedDays}</span><span>{props.closedText}</span></li>
              </ul>
              <ul className='contact__info-details'>
                <li><span>{props.callText}</span><span><a href={"tel:" + props.telephone}>{props.telephone}</a></span></li>
                <li><span>{props.emailText}</span><a href={"mailto:" + props.email}>{props.email}</a></li>
              </ul>
              <Map id="contactMap" {...mapProps} />
            </section>


            <section className='contact-form__container'>
              <div className='contact__text form'>
                <h2 className='contact__text-heading'>{props.formTitle}</h2>
                <p className='contact__text-description'>{props.formDescription}</p>
              </div>
              <form className='contact-form__form' ref={form} onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value={name} name="name" type="text" placeholder={props.formNameText} required/>
                <div className="fields-container">
                  <input onChange={handleInputChange} value={email} name="email" type="email" placeholder={props.formEmailText} required/>
                  <input onChange={handleInputChange} value={telephone} name="telephone" type="text" placeholder={props.formPhoneText} required/>
                </div>
                <div className="fields-container">
                  <input onChange={handleInputChange} value={citypickup} name="citypickup" type="text" placeholder={props.formPickupCityText} required/>
                  <input onChange={handleInputChange} value={citydropoff} name="citydropoff" type="text" placeholder={props.formDropoffCityText} required/>
                </div>
                <div className="fields-container">
                  <input onChange={handleInputChange} value={petnumber} className='pet-number' name="petnumber" type="number" placeholder={props.formPetnumberText} required/>
                  <input onChange={handleInputChange} value={petinfo} name="petinfo" type="text" placeholder={props.formPetinfoText} required/>
                </div>
                <textarea onChange={handleInputChange} value={message} name="message" type="message" placeholder={props.formMessageText} required/>
                <button className="button-primary" value="Send" type="submit" onClick={handleFormSubmit}>{props.buttonText}
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3475 0.547943L13.4482 1.47237L17.2637 5.39431H0.679688V6.7017H17.2636L13.4482 10.6235L14.3475 11.5479L19.6984 6.04794L14.3475 0.547943Z"/>
                  </svg>
                </button>
              </form>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </section>
          </div>
      </div>
    </div>
  )
}
