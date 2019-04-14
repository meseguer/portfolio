import React from 'react';
import { Link } from 'gatsby';

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

const FeaturedProjects = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};


const IndexPage = () => (
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

      {/* Work experiences */}

      <section className="work" style={{ width: '90%', margin: '100px auto' }}>
        <h2 className="subtitle text-center">Our work</h2>
        <div className="row">
          <div className="col-sm" style={{ marginTop: '25px' }}>
            <div className="card work__card-body" style={{ height: '100%' }}>
              <img className="card-img-top mx-auto" src={crowdforge} style={{ height: '178px', width: 'auto ' }} />
              <div className="card-body">
                <h5 className="card-title">Search engine used by millions</h5>
                <p className="card-text">Built using the latest technologies in terms of Web development and Machine learning.</p>
                <a href="//crowdforge.io" className="btn btn-primary">Check it out</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
