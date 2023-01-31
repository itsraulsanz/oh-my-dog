import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo-footer.svg'

import './footer.scss'

const Footer = () => (
  <footer className='homepageFooter'>
    <Link to="/" className="logoLink">
      <img src={Logo} alt="Oh My Dog Logo" style={{width:'157px', height:'64px'}}/>
    </Link>
    <nav>
      <ul className="navigation">
        <li className="navigationItem">
          <Link to="#services">
            Services
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="#blog">
            Gallery
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="#about-us">
            About Us
          </Link>
        </li>
        <li className="navigationItem contactus">
          <Link to="#contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
