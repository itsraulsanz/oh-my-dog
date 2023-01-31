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
          <Link to="#services" activeClassName="active">
            Services
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="#blog" activeClassName="active">
            Gallery
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="#about-us" activeClassName="active">
            About Us
          </Link>
        </li>
        <li className="navigationItem contactus">
          <Link to="#contact-us" activeClassName="active">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
