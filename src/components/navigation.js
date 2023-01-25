import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import Language from './language'

import './navigation.scss'

function Navigation() {
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const locationLanguage = pathname.split("/")[1];

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const allDetails = document.querySelectorAll("details")
    const menuElements = document.getElementsByClassName('navigationItem')

    for (const menuElement of menuElements) {
      menuElement.addEventListener("click", () => {
        allDetails.forEach((detail) => {
          if (detail != allDetails) {
            detail.removeAttribute("open");
          }
        });
      });
    }
  })

  return (
    <header>
      <nav role="navigation" className="container-fluid" aria-label="Main">
        <div className="navigation-container">
          <Link to="/" className="logoLink">
            <img src={Logo} alt="Oh My Dog Logo" style={{width:'157px', height:'64px'}}/>
          </Link>
          <ul className="navigation languageSelector">
              <li className='navigationItem'><Language /></li>
          </ul>
        </div>
        <div className="navigation-container desktop-menu">
          <ul className="navigation">
            <li className="navigationItem submenu">
              <details open className='details-submenu'>
                <summary className='summary-submenu'>
                  <span className='navigationItem'>Why Us <span className="summary-submenu-arrow"></span></span>
                </summary>
                <div className='details-submenu-list why-us'>
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
            <li className="navigationItem submenu medium-show">
              <details open className='details-submenu'>
                <summary className='summary-submenu'>
                  <span className='navigationItem'>Info <span className="summary-submenu-arrow"></span></span>
                </summary>
                <div className='details-submenu-list more-info'>
                  <ul className="navigation-submenu-list">
                    <li className="navigationItem-submenu">
                      <Link to={`/${locationLanguage}/#vlog`} activeClassName="active" className='navigationItem-sublist'>
                        Vlog
                      </Link>
                    </li>
                    <li className="navigationItem-submenu">
                      <Link to={`/${locationLanguage}/#passport`} activeClassName="active" className='navigationItem-sublist'>
                        Pet passport
                      </Link>
                    </li>
                    <li className="navigationItem-submenu">
                      <Link to={`/${locationLanguage}/#trips`} activeClassName="active" className='navigationItem-sublist'>
                        Schedule
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            <li className="navigationItem medium-hide">
              <Link to={`/${locationLanguage}/#vlog`} activeClassName="active" className='navigationItem-main'>
                Vlog
              </Link>
            </li>
            <li className="navigationItem medium-hide">
              <Link to={`/${locationLanguage}/#passport`} activeClassName="active" className='navigationItem-main'>
                Pet passport
              </Link>
            </li>
            <li className="navigationItem medium-hide">
              <Link to={`/${locationLanguage}/#trips`} activeClassName="active" className='navigationItem-main'>
                Schedule
              </Link>
            </li>
            <li className="navigationItem">
              <Link to={`/${locationLanguage}/#contact-us`} activeClassName="active" className='navigationItem-main'>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="social-media">
            <li className='navigationItem'>
              <a href="https://instagram.com/ohmydog_pet_transport/" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item instagram">
              </a>
            </li>
            <li className='navigationItem'>
              <a href="https://www.facebook.com/ohmydog.pettravel" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item facebook">
              </a>
            </li>
            <li className='navigationItem'>
              <a href="https://www.tiktok.com/@ohmydogpettravel" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item tiktok">
              </a>
            </li>
            <li className='navigationItem'>
              <a href="https://www.youtube.com/@ohmydogpettravel2763" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item youtube">
              </a>
            </li>
            <li className='navigationItem'>
              <a href="facebook" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item google">
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation-container mobile-menu">
          <details className="navigation__hamburger-menu-details" onClick={handleToggle}>
            <summary id="mobile-summary" className="navigation__hamburger-menu-summary" aria-label="Menu" role="button" aria-expanded="false" aria-controls="menu-drawer">
              <span className="icon-hamburger">
                <svg alt="Open mobile navigation icon" title="Open mobile navigation" width="25" height="13" viewBox="0 0 37 13" xmlns="http://www.w3.org/2000/svg">
                  <line x1="37" y1="1.5" x2="-1.31134e-07" y2="1.5" strokeWidth="3" />
                  <line x1="37" y1="11.5" x2="18" y2="11.5" strokeWidth="3" />
                </svg>
              </span>

              <span className="icon-close">
                <svg alt="Close mobile navigation icon icon" title="Close mobile navigation icon" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.420908 0.420786C0.50509 0.33639 0.605096 0.26943 0.715197 0.223744C0.825297 0.178057 0.94333 0.154541 1.06253 0.154541C1.18174 0.154541 1.29977 0.178057 1.40987 0.223744C1.51997 0.26943 1.61998 0.33639 1.70416 0.420786L6.50003 5.21847L11.2959 0.420786C11.3802 0.336526 11.4802 0.269688 11.5903 0.224087C11.7004 0.178486 11.8184 0.155015 11.9375 0.155015C12.0567 0.155015 12.1747 0.178486 12.2848 0.224087C12.3949 0.269688 12.4949 0.336526 12.5792 0.420786C12.6634 0.505045 12.7303 0.605075 12.7759 0.715165C12.8215 0.825256 12.8449 0.94325 12.8449 1.06241C12.8449 1.18157 12.8215 1.29957 12.7759 1.40966C12.7303 1.51975 12.6634 1.61978 12.5792 1.70404L7.78147 6.49991L12.5792 11.2958C12.6634 11.38 12.7303 11.4801 12.7759 11.5902C12.8215 11.7003 12.8449 11.8183 12.8449 11.9374C12.8449 12.0566 12.8215 12.1746 12.7759 12.2847C12.7303 12.3947 12.6634 12.4948 12.5792 12.579C12.4949 12.6633 12.3949 12.7301 12.2848 12.7757C12.1747 12.8213 12.0567 12.8448 11.9375 12.8448C11.8184 12.8448 11.7004 12.8213 11.5903 12.7757C11.4802 12.7301 11.3802 12.6633 11.2959 12.579L6.50003 7.78135L1.70416 12.579C1.6199 12.6633 1.51987 12.7301 1.40978 12.7757C1.29969 12.8213 1.18169 12.8448 1.06253 12.8448C0.943372 12.8448 0.825378 12.8213 0.715287 12.7757C0.605197 12.7301 0.505167 12.6633 0.420908 12.579C0.336648 12.4948 0.26981 12.3947 0.224209 12.2847C0.178608 12.1746 0.155138 12.0566 0.155138 11.9374C0.155138 11.8183 0.178608 11.7003 0.224209 11.5902C0.26981 11.4801 0.336648 11.38 0.420908 11.2958L5.2186 6.49991L0.420908 1.70404C0.336512 1.61985 0.269553 1.51985 0.223866 1.40975C0.178179 1.29965 0.154663 1.18161 0.154663 1.06241C0.154663 0.943208 0.178179 0.825175 0.223866 0.715075C0.269553 0.604974 0.336512 0.504968 0.420908 0.420786Z" />
                </svg>
              </span>
            </summary>

            <div id="mobile-details" className="mobile-navigation">
              <ul className="mobile-navigation-languages">
                <li className='navigationItem languageSelector'><Language /></li>
              </ul>
              <ul className="mobile-navigation-menu">
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#services`} activeClassName="active" className='navigationItem-link'>
                    Services
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#about-us`} activeClassName="active" className='navigationItem-link'>
                    About Us
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#gallery`} activeClassName="active" className='navigationItem-link'>
                    Gallery
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#reviews`} activeClassName="active" className='navigationItem-link'>
                    Testimonials
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#vlog`} activeClassName="active" className='navigationItem-link'>
                    Vlog
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#passport`} activeClassName="active" className='navigationItem-link'>
                    Pet passport
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#trips`} activeClassName="active" className='navigationItem-link'>
                    Schedule
                  </Link>
                </li>
                <li className="navigationItem">
                  <Link to={`/${locationLanguage}/#contact-us`} activeClassName="active" className='navigationItem-link'>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="social-media">
                <li className='navigationItem'>
                  <a href="https://instagram.com/ohmydog_pet_transport/" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item instagram">
                  </a>
                </li>
                <li className='navigationItem'>
                  <a href="https://www.facebook.com/ohmydog.pettravel" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item facebook">
                  </a>
                </li>
                <li className='navigationItem'>
                  <a href="https://www.tiktok.com/@ohmydogpettravel" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item tiktok">
                  </a>
                </li>
                <li className='navigationItem'>
                  <a href="https://www.youtube.com/@ohmydogpettravel2763" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item youtube">
                  </a>
                </li>
                <li className='navigationItem'>
                  <a href="facebook" activeClassName="active" target="_blank" rel="noreferrer" className="social-media-item google">
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
