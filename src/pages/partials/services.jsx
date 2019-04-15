import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../../components/image';
import design from '../../images/icons/design.svg';
import development from '../../images/icons/development.svg';
import seo from '../../images/icons/seo.svg';
import specialized from '../../images/icons/specialized.svg';
import experienced from '../../images/icons/experienced.svg';
import targeted from '../../images/icons/targeted.svg';

export default () => (
  <StaticQuery
    query={graphql`
     query ProjectsQuery {
        allProjectsJson {
            edges {
                node {
                    title,
                    description,
                    thumbnail,
                    link
                }
            }
        }
    }
    `}
    render={data => (
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
    )}
  />
);
