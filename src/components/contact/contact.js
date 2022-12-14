import React from 'react'
import './contact.scss'

export default function Contact(props) {

  return (
    <div className='contact' id={props.id}>
      <div className='container-fluid'>
          <div className='contact__text'>
              <h2 className='contact__text-heading'>{props.headingText}</h2>
              <p className='contact__text-description'>{props.descriptionText}</p>
          </div>

          <div className='contact__box'>
            <section className='contact__info'>
              <ul>
                <li><span>{props.openDays}</span><span>{props.openHours}</span></li>
                <li><span>{props.closedDays}</span><span>{props.closedText}</span></li>
                <li><span>{props.callText}</span><span>{props.telephone}</span></li>
                <li><span>{props.emailText}</span><a href={"mailto:" + props.email}>{props.email}</a></li>
              </ul>
            </section>

            <section className='contact-form__container'>
              <form className='contact-form__form'>
                <input name="name" type="text" placeholder={props.formNameText} required/>
                <input name="email" type="email" placeholder={props.formEmailText} required/>
                <input name="telephone" type="text" placeholder={props.formPhoneText} required/>
                <input name="city" type="text" placeholder={props.formCityText} required/>
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
