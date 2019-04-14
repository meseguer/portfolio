import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import hero from '../images/contact-hero.svg'; // Tell Webpack this JS file uses this image
import ContactForm from './partials/contactForm';


export default () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className="row">
      <div className="col-md-6">
        <h1>Let’s talk about everything</h1>
        <p>Don’t like forms? Send us an email: hello@devpost.com</p>
        <p>Now go build something great.</p>
        <img src={hero} alt="Contact SVG" />
      </div>
      <div className="col-md-6">
        <ContactForm />
      </div>
    </div>
  </Layout>
);
