import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img src={Logo} alt="Oh My Dog Logo" style={{width:'159px', height:'55px'}}/>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Services
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Gallery
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          About Us
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Contact Us
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
