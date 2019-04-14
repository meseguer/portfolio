import React from 'react';
import { Link } from 'gatsby';
import instagramIcon from '../images/instagram.svg';
import linkedinIcon from '../images/linkedin.svg';
import styles from './footer.module.scss';


export default () => (
  <footer className="call-to-action d-flex flex-column">
    <div className="aligner">
      <h2>Ready to chat?</h2>
      <p>Send us a message</p>
      <Link to="/contact" className="navbar-brand">
        <button className="devshop-button" type="submit">Get a quote</button>
      </Link>
      <div className={styles.footer}>
        <a href="#instagram"><img src={instagramIcon} style={{ width: '20px', height: '20px' }} /></a>
        <a href="#linkedin"><img src={linkedinIcon} style={{ width: '20px', height: '20px' }} /></a>
      </div>
    </div>
  </footer>
);
