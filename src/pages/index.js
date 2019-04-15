import React from 'react';
import { Link, graphql } from 'gatsby';

import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';

import hero from '../images/hero.svg';
import favicon from '../images/logo.png';

import Projects from './partials/featuredProjects';
import Services from './partials/services';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div>
          <div className="row">
            <div className="col-md-6">
              <h1>We build modern solutions, for modern problems.</h1>
              <Link to="/contact/">
                <button className="devshop-button">Get a quote</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src={hero} className="header-hero" />
            </div>
          </div>

          <Services />

          <Projects />

        </div>
      </Layout>
    );
  }
}

export default IndexPage;
