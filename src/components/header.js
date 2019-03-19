import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "./../images/logo.svg"

const Header = ({ siteTitle }) => (
    <nav className="devshop-nav navbar static-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} style={{ width: '30px', height: '30px' }} />
            </a>
            <a className="navbar-text" href="#">Work</a>
            <a className="navbar-text" href="#">Services</a>
            <a className="btn btn-light color-primary rounded-pill" href="#">Get quote</a>
        </div>
    </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/*
* {/*<header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>*/