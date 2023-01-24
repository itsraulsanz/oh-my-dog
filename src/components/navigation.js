import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import Language from './language'

import './navigation.scss'

function Navigation() {
  const locationLanguage = window.location.pathname.split("/")[1];
  console.log(locationLanguage)

  return (
    <header>
      <nav role="navigation" className="container-fluid" aria-label="Main">
        <Link to="/" className="logoLink">
          <img src={Logo} alt="Oh My Dog Logo" style={{width:'157px', height:'64px'}}/>
        </Link>
        <ul className="navigation">
          <li className="navigationItem submenu">
            <details open className='details-submenu'>
              <summary className='summary-submenu'>
                <span className='navigationItem'>Why Us <span className="summary-submenu-arrow"></span></span>
              </summary>
              <div className='details-submenu-list'>
                <ul className="navigation-submenu-list">
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#services`} activeClassName="active" className='navigationItem-sublist'>
                      Services
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#about-us`} activeClassName="active" className='navigationItem-sublist'>
                      About Us
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#gallery`} activeClassName="active" className='navigationItem-sublist'>
                      Gallery
                    </Link>
                  </li>
                  <li className="navigationItem-submenu">
                    <Link to={`/${locationLanguage}/#reviews`} activeClassName="active" className='navigationItem-sublist'>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </details>
          </li>
          <li className="navigationItem">
            <Link to={`/${locationLanguage}/#vlog`} activeClassName="active" className='navigationItem-main'>
              Vlog
            </Link>
          </li>
          <li className="navigationItem">
            <Link to={`/${locationLanguage}/#passport`} activeClassName="active" className='navigationItem-main'>
              Pet passport
            </Link>
          </li>
          <li className="navigationItem">
            <Link to={`/${locationLanguage}/#trips`} activeClassName="active" className='navigationItem-main'>
              Schedule
            </Link>
          </li>
          <li className="navigationItem">
            <Link to={`/${locationLanguage}/#contact-us`} activeClassName="active" className='navigationItem-main'>
              Contact Us
            </Link>
          </li>
          <li className='navigationItem languageSelector'><Language /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
