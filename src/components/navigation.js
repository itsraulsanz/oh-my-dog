import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'

import './navigation.scss'

const Navigation = () => (
  <header>
    <nav role="navigation" className="container-fluid" aria-label="Main">
      <Link to="/" className="logoLink">
        <img src={Logo} alt="Oh My Dog Logo" style={{width:'157px', height:'64px'}}/>
      </Link>
      <ul className="navigation">
        <li className="navigationItem">
          <Link to="/blog/" activeClassName="active">
            Services
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="/blog/" activeClassName="active">
            Gallery
          </Link>
        </li>
        <li className="navigationItem">
          <Link to="/blog/" activeClassName="active">
            About Us
          </Link>
        </li>
        <li className="navigationItem contactus">
          <Link to="/blog/" activeClassName="active">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navigation
