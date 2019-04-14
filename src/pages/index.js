import React from 'react';
import { Link, graphql } from 'gatsby';

import axios from 'axios';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import hero from '../images/hero.svg';
import design from '../images/icons/design.svg';
import development from '../images/icons/development.svg';
import experienced from '../images/icons/experienced.svg';
import seo from '../images/icons/seo.svg';
import specialized from '../images/icons/specialized.svg';
import targeted from '../images/icons/targeted.svg';
import crowdforge from '../images/crowdforge.png';
import favicon from '../images/logo.png';
import Projects from './partials/featuredProjects';

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

          <section className="showcase container mt-10">
            <div className="card shadow" style={{ borderRadius: '10%' }}>
              <div className="showcase-card card-body text-center">
                <h2 className="subtitle text-center w-50 mx-auto">Build your vision</h2>
                <div className="row showcase-row">
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={design} className="mx-auto" />
                      <h5 className="showcase-title">UX/UI</h5>
                      <p className="lead mb-0">A design adapted to your app with research to back it up.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={development} className="mx-auto" />
                      <h5 className="showcase-title">Development</h5>
                      <p className="lead mb-0">
A design adapted to your app with research to back it
                                        up.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={seo} className="mx-auto" />
                      <h5 className="showcase-title">SEO</h5>
                      <p className="lead mb-0">A design adapted to your app with research to back it up.</p>
                    </div>
                  </div>
                </div>
                <div className="row showcase-row">
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={specialized} className="mx-auto" />
                      <h5 className="showcase-title">Specialized</h5>
                      <p className="lead mb-0">
A design adapted to your app with research to back it
                                        up.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={experienced} className="mx-auto" />
                      <h5 className="showcase-title">Experienced</h5>
                      <p className="lead mb-0">
A design adapted to your app with research to back it
                                        up.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <img src={targeted} className="mx-auto" />
                      <h5 className="showcase-title">Targeted</h5>
                      <p className="lead mb-0">
A design adapted to your app with research to back it
                                        up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Projects />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
