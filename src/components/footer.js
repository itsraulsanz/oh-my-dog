import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo-footer.svg'

import './footer.scss'

function Footer (props) {
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const locationLanguage = pathname.split("/")[1];

  return(
    <footer className='homepageFooter'>
      <div className="container-fluid">
        <section className='homepageFooter-container navigation'>
          <nav>
            <ul className="navigation">
              <li className='details-submenu-list why-us'>
                <ul className="navigation-submenu-list">
                  <li className="navigationItem-submenu">
                    {props.whyUs}
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#services`} className='navigationItem-sublist'>
                      {props.services}
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#about-us`} className='navigationItem-sublist'>
                      {props.aboutUs}
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#gallery`} className='navigationItem-sublist'>
                      {props.gallery}
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#reviews`} className='navigationItem-sublist'>
                      {props.testimonials}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='details-submenu-list why-us'>
                <ul className="navigation-submenu-list">
                  <li className="navigationItem-submenu">
                    {props.info}
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#blog`} className='navigationItem-sublist'>
                      {props.blog}
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#passport`} className='navigationItem-sublist'>
                      {props.petPassport}
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#trips`} className='navigationItem-sublist'>
                      {props.calendar}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='details-submenu-list why-us'>
                <ul className="navigation-submenu-list">
                  <li className="navigationItem-submenu">
                    {props.contact}
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#contact-us`} className='navigationItem-main'>
                      {props.contactUs} <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3475 0.547943L13.4482 1.47237L17.2637 5.39431H0.679688V6.7017H17.2636L13.4482 10.6235L14.3475 11.5479L19.6984 6.04794L14.3475 0.547943Z"></path></svg>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
        <section className='homepageFooter-container logo'>
          <Link to="/" className="logoLink">
            <img src={Logo} alt="Oh My Dog Logo" style={{width:'157px', height:'64px'}}/>
          </Link>
          <ul className="social-media">
            <li className='navigationItem'>
              <a href="https://instagram.com/ohmydog_pet_transport/" target="_blank" rel="noreferrer" className="social-media-item instagram"></a>
            </li>
            <li className='navigationItem'>
              <a href="https://www.facebook.com/ohmydog.pettravel" target="_blank" rel="noreferrer" className="social-media-item facebook"></a>
            </li>
            <li className='navigationItem'>
              <a href="https://www.tiktok.com/@ohmydogpettravel" target="_blank" rel="noreferrer" className="social-media-item tiktok"></a></li>
            <li className='navigationItem'>
              <a href="https://www.youtube.com/@ohmydogpettravel2763" target="_blank" rel="noreferrer" className="social-media-item youtube"></a>
            </li>
            <li className='navigationItem'>
              <a href="facebook" target="_blank" rel="noreferrer" className="social-media-item google"></a>
            </li>
          </ul>
          <ul className='contact__info-details'>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22.119" height="22.119"><path fill-rule="evenodd" d="m3.727 4.886.415-.414 3.59 3.59-.678.678a.568.568 0 0 0-.074.713 17.477 17.477 0 0 0 2.582 3.105 17.442 17.442 0 0 0 3.104 2.58.568.568 0 0 0 .714-.073l.678-.679 3.59 3.592-.415.413a2.114 2.114 0 0 1-2.109.558 16.262 16.262 0 0 1-7.46-4.474c-.006-.008-.013-.013-.02-.02a16.258 16.258 0 0 1-4.475-7.46 2.117 2.117 0 0 1 .558-2.109ZM5.81 3.084c-.179-.002-.35.069-.477.195l-.386.386 3.59 3.59.386-.386a.678.678 0 0 0 0-.956L6.288 3.279a.668.668 0 0 0-.477-.196Zm10.394 10.112a.672.672 0 0 0-.954 0l-.386.386 3.589 3.59.386-.387a.677.677 0 0 0 0-.954zM6.85 15.272a17.393 17.393 0 0 0 7.973 4.776 3.23 3.23 0 0 0 3.217-.85l1.607-1.607a1.818 1.818 0 0 0 0-2.566L17.01 12.39a1.816 1.816 0 0 0-2.565 0l-1.539 1.54a16.34 16.34 0 0 1-2.528-2.168c-.006-.008-.013-.013-.02-.02A16.308 16.308 0 0 1 8.19 9.213l1.538-1.539a1.813 1.813 0 0 0 0-2.564L7.094 2.472a1.82 1.82 0 0 0-2.566 0L2.921 4.08a3.23 3.23 0 0 0-.85 3.217c.84 3.043 2.491 5.8 4.778 7.975z"/></svg>
              <a href={"tel:" + props.telephone}>{props.telephone}</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22.119" height="22.119"><path fill-rule="evenodd" d="M4.078 5.539H18.04l-6.98 6.035Zm14.332 11.04a.307.307 0 0 0 .306-.31V6.402l-7.299 6.31a.543.543 0 0 1-.715 0l-7.3-6.31v9.869a.308.308 0 0 0 .308.308Zm-14.7 1.094H18.41a1.403 1.403 0 0 0 1.4-1.403V5.847a1.404 1.404 0 0 0-1.4-1.401H3.71a1.404 1.404 0 0 0-1.4 1.401V16.27a1.402 1.402 0 0 0 1.4 1.403z"/></svg>
              <a href={"mailto:" + props.email}>{props.email}</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
