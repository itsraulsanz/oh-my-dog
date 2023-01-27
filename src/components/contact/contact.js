import React from 'react'
import './contact.scss'

export default function Contact(props) {
  const getformEndpoint = "https://getform.io/f/cc4a2a36-9ad6-4112-b183-80434526d3b7"

  return (
    <div className='contact' id='contact-us'>
      <div className='container-fluid'>
          <div className='contact__text'>
              <h2 className='contact__text-heading'>{props.headingText}</h2>
              <p className='contact__text-description'>{props.descriptionText}</p>
          </div>

          <div className='contact__box'>
            <section className='contact__info'>
              <ul className='contact__info-days'>
                <li><span>{props.openDays}</span><span>{props.openHours}</span></li>
                <li><span>{props.openDaysFriday}</span><span>{props.openHoursFriday}</span></li>
                <li><span>{props.closedDays}</span><span>{props.closedText}</span></li>
              </ul>
              <ul className='contact__info-details'>
                <li><span>{props.callText}</span><span>{props.telephone}</span></li>
                <li><span>{props.emailText}</span><a href={"mailto:" + props.email}>{props.email}</a></li>
              </ul>
            </section>

            <section className='contact-form__container'>
              <form className='contact-form__form' action={getformEndpoint} method="POST">
                <input type="hidden" name="_gotcha" />
                <input name="name" type="text" placeholder={props.formNameText} required/>
                <div className="fields-container">
                  <input name="email" type="email" placeholder={props.formEmailText} required/>
                  <input name="telephone" type="text" placeholder={props.formPhoneText} required/>
                </div>
                <div className="fields-container">
                  <input name="city-pickup" type="text" placeholder={props.formPickupCityText} required/>
                  <input name="city-dropoff" type="text" placeholder={props.formDropoffCityText} required/>
                </div>
                <div className="fields-container">
                  <input className='pet-number' name="pet-number" type="number" placeholder={props.formPetnumberText} required/>
                  <input name="pet-info" type="text" placeholder={props.formPetinfoText} required/>
                </div>
                <textarea name="message"type="message" placeholder={props.formMessageText} required/>
                <button className="button-primary" type="submit">{props.buttonText}
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3475 0.547943L13.4482 1.47237L17.2637 5.39431H0.679688V6.7017H17.2636L13.4482 10.6235L14.3475 11.5479L19.6984 6.04794L14.3475 0.547943Z"/>
                  </svg>
                </button>
              </form>
            </section>
          </div>
      </div>
    </div>
  )
}
