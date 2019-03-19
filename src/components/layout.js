/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import instagram from "./../images/instagram.svg" // Tell Webpack this JS file uses this image

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer className="call-to-action d-flex flex-column">
            <div className="aligner">
                <h2>Ready to chat?</h2>
                <p>Send us a message</p>
                <a href="contact.html">
                    <button className="devshop-button" type="submit">Get a quote</button>
                </a>
                <div className="below">
                    <a href="#somthing"><img src={instagram} style={{width: '20px', height: '20px'}} /></a>
                </div>
            </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
